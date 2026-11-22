# Experience

---

## Software Architect / Lead Developer
**QuartSoft** | March 2025 - Present | ~1y 9m

Hybrid architecture + hands-on development role on a geospatial agricultural SaaS platform.

- Led PHP upgrade 7.4 to 8.3 with zero downtime on a live monolith (400+ DB tables, 500k+ lines of code)
- Migrated critical Laravel service to Go - background snapshot processing time: ~3 min avg to max 30s (all retries), **6x improvement**; lowered infra cost
- Initiated .NET rewrite of a data parser service (ISO-XML and proprietary agricultural formats)
- Designed modular API layer with clean domain boundaries - enabled parallel development across 2 backend developers
- Established GitLab MR-based code review for a team of 10; mentored 2 junior developers on onboarding
- Set up full observability stack: OpenObserve (centralized logs), Sentry + New Relic (error tracking + APM)
- Initiated CI/CD pipeline for a complex legacy monolith

**Tech**: PHP 8.3, Yii2, Go, .NET, PostgreSQL/PostGIS, AWS RDS, Docker, GitLab CI

---

## Software Developer (Backend)
**QuartSoft** | March 2019 - February 2025 | 6y

Core backend developer for a geospatial agricultural SaaS platform, growing it from early-stage to 5k+ daily active users.

- Built and maintained REST API serving Web (500+ DAU) and Mobile (5k+ DAU) clients - 100+ endpoints
- **+30% GPS processing throughput**: PostGIS spatial indexing + batch processing optimization
- **+40% API data transfer efficiency**: response compression, pagination, selective field loading
- Implemented PostgreSQL table partitioning + streaming replication on a ~400-500 GB PostGIS database
- Built geospatial data pipelines: GDAL/OGR format conversion (Shapefile, GeoJSON, KML, GeoTIFF, ISO-XML), GeoServer WMS/WFS
- Developed binary/XML parsers for agricultural machinery telemetry data (proprietary protocols)
- Led database performance optimization under growing load: EXPLAIN ANALYZE tuning, index design, connection pooling, New Relic profiling
- Implemented custom multi-channel notification system: push (Firebase FCM), email (SMTP + async queue), in-app
- Migrated file storage from local disk to SeaweedFS (S3-compatible distributed object storage)
- Led transition from monolithic architecture toward modular decomposition

**Tech**: PHP, Python, .NET, Node.js, PostgreSQL/PostGIS, Redis, Docker, GDAL/OGR, GeoServer, QGIS
