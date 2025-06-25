📘 MOE QA Automation Project
        A complete Playwright-based test automation framework for end-to-end and load testing the MOE Singapore website. It follows the Page Object Model (POM), supports cross-browser testing, and integrates with CI pipelines on GitHub Actions.

📁 Project Structure
.
        ├── pages/
        │   ├── HomePage.ts
        │   ├── SearchPage.ts
        │   ├── CalendarPage.ts
        │   └── FooterPage.ts
        ├── tests/
        │   └── e2e/
        │       ├── search-flow.spec.ts
        │       ├── navigation.spec.ts
        │       ├── academic-calendar.spec.ts
        │       ├── p1-registration.spec.ts
        │       ├── footer-links.spec.ts
        │       ├── error-handling.spec.ts
        │       └── responsive-ui.spec.ts
        ├── playwright.config.ts
        ├── tsconfig.json
        ├── .github/workflows/playwright.yml
        └── load-tests/
            └── search.k6.js

🧪 Test Descriptions
        | Spec File                   |Description                  |
        | --------------------------- | --------------------------- |
        | `search-flow.spec.ts`       | Tests the global search bar functionality and verifies results.        |
        | `navigation.spec.ts`        | Validates the navigation menu and submenu routing across screen sizes. |
        | `academic-calendar.spec.ts` | Verifies links and visibility for academic calendar resources.         |
        | `p1-registration.spec.ts`   | Tests navigation and content for Primary 1 registration page.          |
        | `footer-links.spec.ts`      | Checks the integrity of footer links and contact details.              |
        | `error-handling.spec.ts`    | Ensures 404 and other error pages are handled gracefully.              |
        | `responsive-ui.spec.ts`     | Runs across multiple viewport sizes to ensure layout responsiveness.   |


🧱 Page Objects
        | File              | Description                                                    |
        | ----------------- | -------------------------------------------------------------- |
        | `HomePage.ts`     | Methods for interacting with the home page search and headers. |
        | `SearchPage.ts`   | Used in validating search results.                             |
        | `CalendarPage.ts` | Handles academic calendar validations.                         |
        | `FooterPage.ts`   | Methods for verifying footer content and external links.       |


⚙️ Configuration
📁 playwright.config.ts
        use: {
        baseURL: 'https://moe.gov.sg',
        viewport: { width: 1280, height: 720 },
        headless: true,
        actionTimeout: 0,
        ignoreHTTPSErrors: true
        }

        Browsers tested: Chromium, Firefox, WebKit
        Tag filtering: You can use @e2e or custom tags to control CI runs.

📁 tsconfig.json
Basic setup for Playwright and POM structure:

        {
        "compilerOptions": {
            "target": "ESNext",
            "module": "commonjs",
            "strict": true,
            "esModuleInterop": true,
            "moduleResolution": "node",
            "types": ["playwright"]
        }
        }

🚀 GitHub Actions CI
        Located at .github/workflows/playwright.yml. Currently supports:

        ✅ E2E testing on push and pull request.
        ✅ Load testing via k6 (load-tests/search.k6.js).
        ✅ Cross-browser test matrix (Chromium, Firefox, WebKit).
        ✅ Artifacts: HTML reports uploaded on failure.

        You can enhance CI by splitting jobs via tags like @e2e, @load and running them conditionally on PRs or commits.

⚙️ Commands
        # Run all tests
        npx playwright test

        # Run specific file
        npx playwright test tests/e2e/search-flow.spec.ts

        # Tag-based run
        npx playwright test --grep "@e2e"

        # Show report
        npx playwright show-report

🧼 Suggested Cleanup / Improvements
        🔍 Audit unused locators: Check if any methods in FooterPage.ts, CalendarPage.ts are not called from tests.
        🔁 Remove regression/smoke folders (if unused) to simplify the suite.
        ✅ Add accessibility tests (e.g. getByRole, getByLabelText).
        📊 Add HTML dashboard for test metrics.
        📦 Optimize POM classes: Group reusable components like nav/footer into a base layout page.

🧩 Future Suggestions
        🔀 Split test jobs in CI for faster feedback.
        📱 Test mobile viewports explicitly.
        🔒 Integrate basic security headers and accessibility scan.
        📸 Integrate visual regression using Playwright’s screenshot diff feature.

