# **MOE QA Automation Suite**
```bash
        A robust end-to-end (E2E) and performance test automation suite for the Ministry of Education, Singapore website. Built using Playwright, integrated with GitHub Actions CI/CD, and designed with Page Object Model (POM) for maintainability and scalability.
```

## 📦 Tech Stack
```bash
        | Layer        | Tool / Framework                                   |
        | ------------ | -------------------------------------------------- |
        | UI Testing   | [Playwright](https://playwright.dev/) (TypeScript) |
        | Load Testing | [k6](https://k6.io/) by Grafana                    |
        | CI/CD        | GitHub Actions                                     |
        | Reporting    | Playwright HTML Reporter + k6 JSON                 |
        | Structure    | Page Object Model (POM)                            |
```

## 🧪 Test Types
```bash
        | Tag     | Description                                                 |
        | ------- | ----------------------------------------------------------- |
        | `@e2e`  | Core user journey and regression tests                      |
        | `@load` | Performance testing of critical endpoints using k6          |
        | `@api`  | (Planned) Backend validation using Playwright’s API testing |
```

## 📁 Project Structure
        ```bash 
        moe-qa-automation/
        ├── pages/                   # Page Object Models
        │   ├── HomePage.ts
        │   ├── NavigationPage.ts
        │   └── FooterPage.ts
        ├── tests/
        │   ├── e2e/                 # End-to-End UI tests
        │   │   ├── navigation.spec.ts
        │   │   ├── p1-registration.spec.ts
        │   │   └── search-flow.spec.ts
        │   └── load-tests/          # k6 performance scripts
        │       └── search.k6.js
        ├── .github/workflows/
        │   └── playwright.yml       # CI Pipeline
        ├── playwright.config.ts     # Playwright settings
        ├── tsconfig.json            # TypeScript config
        ├── package.json             # Dependencies + test scripts
        └── README.md                # 📘 You're here!
```

## 🚀 Quick Start
```bash
        ✅ Run all E2E tests locally
                npx playwright test

        🧪 Run specific test
                npx playwright test tests/e2e/navigation.spec.ts

        ⚡ Run only tests with @e2e tag
                npx playwright test --grep @e2e

        🌐 Open HTML Report
                npx playwright show-report
```

## 🔄 CI/CD – GitHub Actions
```bash
        ✅ Automatically runs on:
        Every push and PR for E2E tests
        Load tests on scheduled or tagged builds
        Uploads HTML reports as artifacts
        You can view it in .github/workflows/playwright.yml.
```

## 📈 Performance Test with k6
```bash
        Runs load-tests/search.k6.js
        Generates k6-result.json
        (Planned) Add thresholds and alerts for regression detection

        Run locally:
                k6 run --out json=k6-result.json tests/load-tests/search.k6.js
```

## 🔧 Best Practices Followed
```bash
        ✅ Page Object Model – clean abstraction layer
        ✅ Tags for test selection (@e2e, @smoke, @load)
        ✅ Cross-browser tests via Playwright config
        ✅ Viewport control to handle responsive UI
        ✅ Error debugging with .pause() and .screenshot()
        ✅ Parallel jobs split in CI for fast feedback
```

## 📌 Sample Test Flows Covered
```bash
        | Area            | Description                                   |
        | --------------- | --------------------------------------------- |
        | Navigation      | Dropdown reveals submenu + correct page loads |
        | Search          | Input school name → Results load → Assert     |
        | P1 Registration | Navigation and key heading validation         |
        | Footer          | Validates external links + page presence      |
```

## 📅 Roadmap
```bash
        ✅ Add k6 load test to CI
        ✅ Integrate GitHub Actions with split jobs
        🔄 Add API test coverage
        🔄 Integrate Accessibility testing (axe-core)
        🔄 Add Visual regression testing (Playwright snapshots)
        🔄 Slack/Webhook alerts for failing builds
```

## 🧠 Tips
```bash
        * If a test is flaky in WebKit or mobile view: use setViewportSize() and check for intercepts pointer events error.
        * Use .first() or nth() when multiple elements match.
        *Debug with await page.pause(); or await page.screenshot().
```

## 👩‍💻 Contributing
```bash
        Fork the repo
        Clone and npm install
        Add new tests under tests/e2e/ or tests/api/
        Commit with a clear message
        Push and open a PR
```

## 📝 How to Commit & Push Changes
After you've updated or added tests, follow these steps in the terminal:
```bash
        # 1. Stage all changes
        git add .

        # 2. Commit with a meaningful message
        git commit -m "test: added E2E navigation and registration flow"

        # 3. Push to your GitHub repo
        git push origin main
```

## 🧠 Tip: Git Setup (If First Time)
If Git asks for your identity, configure it globally:
```bash
        git config --global user.name "Your Name"
        git config --global user.email "you@example.com"
```