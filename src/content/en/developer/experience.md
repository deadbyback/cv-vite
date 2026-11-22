# Experience

---

## Software Architect / Lead Developer
**QuartSoft** | March 2025 - Present | ~1y 9m

Hybrid architecture + hands-on development role on a geospatial agricultural SaaS platform.

- Upgraded PHP 7.4 to 8.3 with zero downtime on a 500k-LOC live monolith (400+ DB tables)
- Rewrote critical Laravel service in Go - cut background processing from ~3 min to 30s (6x); reduced infrastructure cost
- Designed and led .NET rewrite of a critical data parser (ISO-XML and proprietary agricultural formats)
- Designed modular API layer with clean domain boundaries - enabled parallel development across 2 backend devs
- Built code review culture via GitLab MRs; mentored 2 junior devs during onboarding
- Built observability stack: OpenObserve (logs), Sentry + New Relic (APM) - first real production visibility
- Shipping CI/CD incrementally for a legacy monolith under active daily delivery pressure

**Tech**: PHP 8.3, Yii2, Go, .NET, PostgreSQL/PostGIS, AWS RDS, Docker, GitLab CI

---

## Software Developer (Backend)
**QuartSoft** | March 2019 - February 2025 | 6y

Core backend developer growing the platform from early-stage to 5k+ daily active users.

- Designed and maintained REST API serving 500+ web and 5k+ daily mobile users - 100+ endpoints, stable under 6 years of continuous delivery
- **+30% GPS processing throughput**: PostGIS spatial indexing + batch processing optimization
- **+40% API data transfer efficiency**: response compression, pagination, selective field loading
- Scaled PostgreSQL to 400-500 GB via table partitioning and streaming replication
- Built geospatial data pipelines: GDAL/OGR format conversion (Shapefile, GeoJSON, KML, GeoTIFF, ISO-XML), GeoServer WMS/WFS
- Developed binary/XML parsers for agricultural machinery telemetry (proprietary protocols)
- Profiled and tuned database under sustained load growth: EXPLAIN ANALYZE, index redesign, connection pooling
- Built multi-channel notification system (Firebase FCM, SMTP queue, in-app)
- Migrated file storage to SeaweedFS (S3-compatible) - removed single-node bottleneck at scale
- Led incremental migration from monolith toward modular architecture

**Tech**: PHP, Python, .NET, Node.js, PostgreSQL/PostGIS, Redis, Docker, GDAL/OGR, GeoServer, QGIS
