# Experience

---

## Software Architect
**QuartSoft** · March 2025 – Present · ~1y 9m

Responsible for technical direction of a geospatial agricultural SaaS platform. Collaborate ~60% of the time with Business Analysts translating business requirements into technical specs, API contracts, and module boundaries.

- Designed modular backend architecture (Clean Architecture + DDD) — reduced inter-module coupling, enabling 2 teams to work in parallel without conflicts
- Authored engineering standards (coding style, dev workflow, test coverage requirements, MR templates): reduced production bug count and increased overall delivery velocity — higher per-feature investment in quality, but significantly fewer bug-driven context switches
- Regularly reinterpreted business requirements in BA sessions — proposed technically simpler, cheaper alternatives that delivered the same business value at a fraction of the estimated complexity
- Led PHP upgrade 7.4 → 8.3 with zero downtime on a live monolith (400+ DB tables, 500k+ lines of code)
- Migrated critical Laravel service to Go — background snapshot processing: ~3 min avg → max 30s (all retries), **6× improvement**; lowered infra cost
- Coordinated technical integration between 3 related projects sharing data models and APIs
- Established GitLab MR-based code review; mentored 2 junior developers during onboarding
- Set up observability stack from scratch: OpenObserve (logs), Sentry + New Relic (errors + APM)
- CI/CD in progress: automated container builds in GitLab CI for a complex legacy monolith
- Initiated AI tooling experiments: deployed self-hosted Qwen 3.5 for internal feature evaluation; currently building a GitLab MCP server to integrate AI agents with repository workflows

**Led team of 10**: 2 Backend · 2 Frontend · 2 Mobile · 2 QA · 1 PM

**Tech**: PHP 8.3, Yii2, Go, .NET, PostgreSQL/PostGIS, AWS RDS, Hetzner, Docker, GitLab CI

---

## Software Developer (Backend)
**QuartSoft** · March 2019 – February 2025 · 6y

Core backend developer for the same platform, growing it from early-stage to 5k+ daily active mobile users.

- Built and maintained REST API serving Web (500+ DAU) and Mobile (5k+ DAU) clients — 100+ endpoints
- **+30% GPS processing throughput**: optimized geospatial pipeline with PostGIS spatial indexing and batch processing
- **+40% API data transfer efficiency**: introduced response compression, pagination, and selective field loading
- Implemented PostgreSQL table partitioning + streaming replication on a ~400–500 GB PostGIS database (geo data dominant)
- Built geospatial data pipelines: GDAL/OGR format conversion, GeoServer WMS/WFS tile serving, QGIS-based validation
- Developed binary/XML parsers for agricultural machinery telemetry (ISO-XML, proprietary protocols)
- Led database performance optimization under growing load: query tuning, index design, connection pooling
- Implemented custom notification system: push (Firebase FCM), email (SMTP + queue), in-app
- Migrated file storage from local disk to SeaweedFS (S3-compatible distributed storage)

**Tech**: PHP, Python, .NET, Node.js, PostgreSQL/PostGIS, Redis, Docker, GDAL/OGR, GeoServer, QGIS
