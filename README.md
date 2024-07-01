# Playwright + TypeScript + Page object models

This repository is an example of a combined tests of Playwright, TypeScript, and Page object models.

## Requirements

### [Node.js](https://nodejs.org/)
Node.js is required to run tests. **Instead of installing Node.js directly, we recommend using Volta as described in the recommended section.** The recommended Node.js and npm versions are specified in the [package.json](./package.json).

## Recommended

### [Volta](https://volta.sh/)

Using Volta to manage your Node.js version is recommended. The [package.json](./package.json) in this repository includes Volta settings, ensuring that the appropriate Node.js version is used if Volta is installed.

### [Visual Studio Code](https://code.visualstudio.com/)

The recommended extensions for Visual Studio Code are listed in [.vscode/extensions.json](.vscode/extensions.json).

## Getting Started

1. Clone repository.

```
git clone https://github.com/kwn1125/playwright-typescript-pom.git <project_directory>
```

2. Install dependencies by referencing the package-lock.json.

```
cd <project_directory>
npm ci
```

3. Follow the instructions in the Playwright documentation to install the browsers and run the tests:
- [Install browsers](https://playwright.dev/docs/browsers#install-browsers)
- [Running tests](https://playwright.dev/docs/running-tests#running-tests)