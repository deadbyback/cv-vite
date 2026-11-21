import type { QAItem } from '@/types'

export const qaItems: QAItem[] = [
  {
    id: 'current-role',
    question: "Tell me about your current role",
    answer: "I'm a Software Architect at QuartSoft. Officially since March 2025, though I'd been doing a lot of architecture work earlier. It's a hybrid role — I still write code, but most of my time (~60%) goes to working with the BA team: translating business requirements into technical specs, defining API contracts, module boundaries, that kind of thing.",
    cv: 'both',
  },
  {
    id: 'team',
    question: "What's your team setup?",
    answer: "Cross-functional team of 10: 2 backend, 2 frontend, 2 mobile, 2 QA, and 1 PM. I handle technical direction — architecture decisions, code review via GitLab MRs, and mentoring. We're also closely integrated with 2 neighboring projects that share our data models and APIs, so there's a lot of cross-project coordination.",
    cv: 'both',
  },
  {
    id: 'tech-stack',
    question: "What's your core tech stack?",
    answer: "PHP 8.3 on Yii2 is the main backend — we just migrated from 7.4. The database is PostgreSQL with PostGIS extensions, sitting on AWS RDS with a read-only replica on Hetzner. We also run Go (for a migrated service) and .NET (parser rewrite). For observability: OpenObserve for logs, Sentry and New Relic for monitoring.",
    cv: 'both',
  },
  {
    id: 'architecture',
    question: "How do you approach architecture?",
    answer: "Clean Architecture is my primary lens — separating domain logic from infrastructure. I've also been applying DDD concepts: bounded contexts, aggregates, ubiquitous language. The practical challenge is that we have a legacy Yii2 monolith, so the migration is gradual: each new feature or significant refactor gets the clean treatment, while stable legacy code stays as-is until touched.",
    cv: 'architect',
  },
  {
    id: 'hard-problem',
    question: "What's the hardest technical problem you've solved?",
    answer: "Probably the GPS data processing pipeline. We handle agricultural machinery telemetry — large volumes of GPS tracks that need spatial analysis, and the database was growing toward 400-500 GB (mostly geospatial data with PostGIS). I improved processing throughput by 30% and API transfer efficiency by 40% through partitioning, query optimization, and pipeline restructuring. That involved a lot of EXPLAIN ANALYZE and New Relic profiling sessions.",
    cv: 'both',
  },
  {
    id: 'cicd',
    question: "What's your CI/CD setup?",
    answer: "Still a work in progress, honestly. The monolith has a lot of custom deployment quirks — legacy dependencies, manual steps. I've been building GitLab CI pipelines incrementally: automated tests first, then linting, now working on the deployment part. The constraint is that it can't disrupt the team while they ship features daily. It's a classic 'change the engine while flying' situation.",
    cv: 'both',
  },
  {
    id: 'dev-philosophy',
    question: "What's your development philosophy?",
    answer: "Make it work, make it right, make it fast — in that order. I'm pragmatic about architecture: Clean Architecture is a goal, not a dogma. If a module is small and stable, a simple CRUD with Yii2 is fine. The complexity budget should be spent where it matters — domain logic, not infrastructure boilerplate. Also: observability before optimization. You can't fix what you can't see.",
    cv: 'architect',
  },
  {
    id: 'geospatial',
    question: "Tell me about the geospatial work",
    answer: "It's a core part of the platform — agricultural machinery tracking and field management. I've worked with GDAL/OGR for data format conversion pipelines (Shapefile, GeoJSON, KML, GeoTIFF), GeoServer for WMS/WFS tile serving, and PostGIS for all the spatial queries. QGIS for validation and analysis. The interesting challenges are around performance: PostGIS queries on large polygons or geometry collections can get expensive fast.",
    cv: 'developer',
  },
  {
    id: 'english',
    question: "How's your English?",
    answer: "I'd say B1 — solid reading and writing, comfortable with technical documentation. Speaking is where I'm still building confidence for complex conversations. I can handle technical discussions, stand-ups, and async communication well. I'm actively working on the spoken side.",
    cv: 'both',
  },
]
