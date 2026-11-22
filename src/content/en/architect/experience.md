# Experience

---

## Software Architect
**QuartSoft** | March 2025 - Present | ~1y 9m

Own technical direction of a geospatial agricultural SaaS platform. Spend ~60% of time embedded with Business Analysts - translating domain requirements into technical specs, API contracts, and module boundaries.

- Designed modular backend architecture (Clean Architecture + DDD) - 2 feature teams now ship in parallel without merge conflicts
- Established engineering standards (code style, MR templates, test coverage gates) - reduced production bug rate and eliminated most reactive firefighting cycles
- Consistently reframed scope in BA sessions - delivered same business outcomes at lower technical complexity, freeing engineering capacity
- Upgraded PHP 7.4 to 8.3 with zero downtime on a 500k-LOC live monolith (400+ DB tables)
- Rewrote critical Laravel service in Go - cut background processing from ~3 min to 30s (6x); reduced infrastructure cost
- Defined cross-project API contracts across 3 integrated products sharing data models - eliminated integration regressions
- Built code review culture via GitLab MRs; mentored 2 junior devs from onboarding to independent delivery
- Built observability from scratch (OpenObserve, Sentry, New Relic) - gave the team first real visibility into production health
- Incrementally shipping CI/CD for a 500k-LOC legacy monolith without disrupting daily releases
- Drove AI tooling adoption: deployed self-hosted Qwen 3.5 for internal evaluation; building GitLab MCP server to connect AI agents to repository workflows

**Led team of 10**: 2 Backend, 2 Frontend, 2 Mobile, 2 QA, 1 PM

**Tech**: PHP 8.3, Yii2, Go, .NET, PostgreSQL/PostGIS, AWS RDS, Hetzner, Docker, GitLab CI

---

## Software Developer (Backend)
**QuartSoft** | March 2019 - February 2025 | 6y

Core backend developer growing the platform from early-stage to 5k+ daily active mobile users.

- Designed and maintained REST API serving 500+ web and 5k+ daily mobile users - 100+ endpoints, stable under 6 years of continuous delivery
- **+30% GPS processing throughput**: redesigned geospatial pipeline with PostGIS spatial indexing and batch processing
- **+40% API data transfer efficiency**: added response compression, pagination, and selective field loading
- Scaled PostgreSQL to 400-500 GB via table partitioning and streaming replication
- Built geospatial data pipelines: GDAL/OGR format conversion (Shapefile, GeoJSON, KML, GeoTIFF), GeoServer WMS/WFS
- Developed binary/XML parsers for agricultural machinery telemetry (ISO-XML, proprietary protocols)
- Profiled and tuned database under sustained load growth: EXPLAIN ANALYZE, index redesign, connection pooling
- Built multi-channel notification system (Firebase FCM, SMTP queue, in-app) for 5k+ mobile users
- Migrated file storage to SeaweedFS (S3-compatible) - removed single-node bottleneck as data volumes scaled

**Tech**: PHP, Python, .NET, Node.js, PostgreSQL/PostGIS, Redis, Docker, GDAL/OGR, GeoServer, QGIS
