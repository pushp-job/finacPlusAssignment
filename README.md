# DemoQA Automation (Playwright)

Playwright UI + API tests for DemoQA, organized with POM, fixtures, and API helpers.

## Quick start

```bash
npm ci
npx playwright install --with-deps
```

Create `.env`:

```bash
DEMOQA_USERNAME=you@example.com
DEMOQA_PASSWORD=yourPassword
```

## Run tests

```bash
npx dotenvx run -- npx playwright test
```

Run specific tests:

```bash
npx dotenvx run -- npx playwright test --grep "DemoQA API"
```

## Structure

```
api/         # Endpoint definitions
components/  # Reusable UI components
fixtures/    # Playwright fixtures
pages/       # Page objects
tests/       # Specs
utils/       # Helpers (API + file)
```

## CI (GitHub Actions)

Workflow: `.github/workflows/playwright.yml`

Secrets required:
- `DEMOQA_USERNAME`
- `DEMOQA_PASSWORD`

Manual run with grep:
- Actions → Playwright Tests → Run workflow → set `grep`
