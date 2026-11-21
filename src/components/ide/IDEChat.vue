<template>
  <div class="chat">
    <div class="chat__log" ref="logEl">
      <!-- Intro message -->
      <div class="chat__message chat__message--bot">
        <div class="chat__avatar">AI</div>
        <div class="chat__bubble">
          <p>Hi! I'm an interactive Q&amp;A about Oleksandr's background. Pick a question below to get started, or scroll through the conversation.</p>
          <p class="chat__note">pre-written Q&amp;A · not a live AI</p>
        </div>
      </div>

      <!-- Conversation history -->
      <template v-for="item in conversation" :key="item.id">
        <div class="chat__message chat__message--user">
          <div class="chat__bubble chat__bubble--user">{{ item.question }}</div>
        </div>
        <div class="chat__message chat__message--bot">
          <div class="chat__avatar">AI</div>
          <div class="chat__bubble" :class="{ 'chat__bubble--typing': item.typing }">
            <span v-if="item.typing" class="chat__typing">
              <span></span><span></span><span></span>
            </span>
            <p v-else>{{ item.answer }}</p>
          </div>
        </div>
      </template>
    </div>

    <!-- Question chips -->
    <div class="chat__chips">
      <button
        v-for="q in availableQuestions"
        :key="q.id"
        class="chat__chip"
        :disabled="askedIds.has(q.id)"
        @click="ask(q)"
      >{{ q.question }}</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from 'vue'
import { cvType } from '@/composables/useCVMode'
import { qaItems } from '@/content/qa'
import type { QAItem } from '@/types'

interface ConversationItem extends QAItem {
  typing: boolean
}

const conversation = ref<ConversationItem[]>([])
const askedIds = ref(new Set<string>())
const logEl = ref<HTMLElement | null>(null)

const availableQuestions = computed(() =>
  qaItems.filter(q => q.cv === 'both' || q.cv === cvType.value)
)

async function ask(item: QAItem) {
  if (askedIds.value.has(item.id)) return
  askedIds.value.add(item.id)

  conversation.value.push({ ...item, typing: true })
  await scrollToBottom()

  await new Promise(r => setTimeout(r, 900 + item.answer.length * 2.5))

  const entry = conversation.value.find(e => e.id === item.id)
  if (entry) entry.typing = false

  await scrollToBottom()
}

async function scrollToBottom() {
  await nextTick()
  if (logEl.value) {
    logEl.value.scrollTop = logEl.value.scrollHeight
  }
}
</script>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

.chat__log {
  flex: 1;
  overflow-y: auto;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.chat__message {
  display: flex;
  gap: 10px;
  align-items: flex-start;
}

.chat__message--user {
  flex-direction: row-reverse;
}

.chat__avatar {
  width: 28px;
  height: 28px;
  background: var(--accent-status);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: white;
  flex-shrink: 0;
  font-family: var(--mono);
}

.chat__bubble {
  max-width: 68%;
  background: var(--bg-sidebar);
  border: 1px solid var(--border);
  border-radius: 10px 10px 10px 2px;
  padding: 10px 14px;
  font-size: 12px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.chat__bubble p { margin: 0; }
.chat__bubble p + p { margin-top: 6px; }

.chat__bubble--user {
  background: var(--bg-active);
  border-color: rgba(167, 139, 250, 0.3);
  border-radius: 10px 10px 2px 10px;
  color: var(--accent-bright);
  margin-left: auto;
}

.chat__note {
  font-size: 9px !important;
  color: var(--text-dim) !important;
  font-family: var(--mono);
  margin-top: 6px !important;
}

/* Typing indicator */
.chat__typing {
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 4px 0;
}

.chat__typing span {
  width: 6px;
  height: 6px;
  background: var(--accent);
  border-radius: 50%;
  animation: bounce 1.2s infinite;
  opacity: 0.6;
}

.chat__typing span:nth-child(2) { animation-delay: 0.2s; }
.chat__typing span:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
  40% { transform: translateY(-4px); opacity: 1; }
}

/* Chips */
.chat__chips {
  padding: 12px 16px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  background: var(--bg-tabbar);
}

.chat__chip {
  font-family: var(--sans);
  font-size: 10px;
  padding: 5px 11px;
  background: var(--bg-active);
  border: 1px solid var(--border);
  border-radius: 20px;
  color: var(--accent);
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
}

.chat__chip:hover:not(:disabled) {
  background: rgba(167, 139, 250, 0.2);
  border-color: var(--accent);
}

.chat__chip:disabled {
  opacity: 0.35;
  cursor: default;
}
</style>
