# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in caravan-kidstec, please report it responsibly via [GitHub Security Advisories](https://github.com/OpenUp-LabTakizawa/caravan-kidstec/security/advisories/new).

Please do not open a public issue for security vulnerabilities.

### What to include

- A description of the vulnerability
- Steps to reproduce the issue
- Affected versions
- Any potential impact

### Response timeline

- We will acknowledge your report within 7 days.
- We aim to provide a fix or mitigation plan within 30 days, depending on severity.
- You will be notified when the issue is resolved.

### Scope

The following areas are in scope for security reports:

- LINE Bot API route handlers and webhook verification
- Server-side rendering and data handling (Next.js App Router)
- Docker image and Lambda deployment configuration
- Dependency vulnerabilities
- Static asset serving via CloudFront

### Out of scope

- Issues in third-party services (e.g., AWS, LINE Platform) that are not caused by this project's code
- Denial of service attacks against development environments
- Social engineering
