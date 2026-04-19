# Playwright QA Test Suite

End-to-end automated UI testing project using Playwright and TypeScript.

## Overview

This project validates core user journeys for Sauce Demo, including:

- Authentication flows
- Product listing and cart actions
- Full checkout flow from login to order confirmation

## Tech Stack

- Playwright Test
- TypeScript
- pnpm
- dotenv

## Project Structure

```text
.
├── data/
├── pages/
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   ├── LoginPage.ts
│   └── ProductsPage.ts
├── tests/
│   ├── auth/
│   ├── core/
│   └── fixtures/
├── playwright.config.ts
├── package.json
└── .env
```

## Prerequisites

- Node.js 18+
- pnpm 10+

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Install Playwright browsers:

```bash
pnpm exec playwright install
```

3. Create environment file:

```bash
cp .env.example .env
```

4. Update `.env` values if needed:

```env
BASE_URL=https://www.saucedemo.com/
STAGING_USER=
STAGING_PASSWORD=
```

## Run Tests

Run all tests:

```bash
pnpm exec playwright test
```

Run tests in headed mode:

```bash
pnpm exec playwright test --headed
```

Run a single spec file:

```bash
pnpm exec playwright test tests/core/full-flow.spec.ts
```

Run with UI mode:

```bash
pnpm exec playwright test --ui
```

## Reports

After execution, open the HTML report:

```bash
pnpm exec playwright show-report
```

## Notes

- Base URL is configured through `BASE_URL` in `.env` and used in `playwright.config.ts`.
- On failure, screenshot and video are retained; trace is collected on first retry.
- Tests run across Chromium, Firefox, and WebKit projects by default.
