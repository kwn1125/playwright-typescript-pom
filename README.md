# Playwright + TypeScript + Page object models

This repository is an example of a combined tests of Playwright, TypeScript, and Page object models.

## Requirements

### Node.js
Node.js is required to run tests. It is recommended to use [Volta](https://volta.sh/) for managing your Node.js version rather than installing Node.js directly. The recommended Node.js and npm versions are specified in the [package.json](./package.json).

## Recommended

### [Visual Studio Code](https://code.visualstudio.com/)

The recommended extensions for Visual Studio Code are listed in [.vscode/extensions.json](.vscode/extensions.json).

## Getting Started

Clone repository.

```
git clone https://github.com/kwn1125/playwright-typescript-pom.git <project_directory>
```

Install dependencies by referencing the package-lock.json.

```
cd <project_directory>
npm ci
```

Follow the instructions in the Playwright documentation to install the browsers and run the tests:
- [Install browsers](https://playwright.dev/docs/browsers#install-browsers)
- [Running tests](https://playwright.dev/docs/running-tests#running-tests)