# Learn Playwright Fundamentals 2X

This repository contains a Playwright test project for practicing browser automation fundamentals.

## Features

- Playwright test setup with Chromium, Firefox, and WebKit projects
- Sample end-to-end tests using the official Playwright test runner
- HTML test reporting enabled by default

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the test suite:
   ```bash
   npx playwright test
   ```
3. Open the HTML report:
   ```bash
   npx playwright show-report
   ```

## Project Structure

- tests/: example Playwright test specs
- playwright.config.ts: Playwright configuration
- playwright-report/: generated HTML reports
- test-results/: generated test artifacts

## Notes

The repository ignores dependencies and generated test artifacts to keep the workspace clean.
