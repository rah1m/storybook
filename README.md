# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs the app in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for publish to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

**semantic-release** automates the whole package release workflow including: determining the next version number, generating the release notes, and publishing the package.

This removes the immediate connection between human emotions and version numbers, strictly following the [Semantic Versioning](http://semver.org) specification and communicating the **impact** of changes to consumers.

> Trust us, this will change your workflow for the better. – [egghead.io](https://egghead.io/lessons/javascript-how-to-write-a-javascript-library-automating-releases-with-semantic-release)

## Highlights

- Fully automated release
- Enforce [Semantic Versioning](https://semver.org) specification
- New features and fixes are immediately available to users
- Notify maintainers and users of new releases
- Use formalized commit message convention to document changes in the codebase
- Publish on different distribution channels (such as [npm dist-tags](https://docs.npmjs.com/cli/dist-tag)) based on git merges
- Integrate with your [continuous integration workflow](docs/recipes/release-workflow/README.md#ci-configurations)
- Avoid potential errors associated with manual releases
- Support any [package managers and languages](docs/recipes/release-workflow/README.md#package-managers-and-languages) via [plugins](docs/usage/plugins.md)
- Simple and reusable configuration via [shareable configurations](docs/usage/shareable-configurations.md)

## How does it work?

### Commit message format

**semantic-release** uses the commit messages to determine the consumer impact of changes in the codebase.
Following formalized conventions for commit messages, **semantic-release** automatically determines the next [semantic version](https://semver.org) number, generates a changelog and publishes the release.

By default, **semantic-release** uses [Angular Commit Message Conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).
The commit message format can be changed with the [`preset` or `config` options](docs/usage/configuration.md#options) of the [@semantic-release/commit-analyzer](https://github.com/semantic-release/commit-analyzer#options) and [@semantic-release/release-notes-generator](https://github.com/semantic-release/release-notes-generator#options) plugins.

Tools such as [commitizen](https://github.com/commitizen/cz-cli) or [commitlint](https://github.com/conventional-changelog/commitlint) can be used to help contributors and enforce valid commit messages.

The table below shows which commit message gets you which release type when `semantic-release` runs (using the default configuration):

| Commit message                                                                                                                                                                                   | Release type               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| `fix(pencil): stop graphite breaking when too much pressure applied`                                                                                                                             | ~~Patch~~ Fix Release      |
| `feat(pencil): add 'graphiteWidth' option`                                                                                                                                                       | ~~Minor~~ Feature Release  |
| `perf(pencil): remove graphiteWidth option`<br><br>`BREAKING CHANGE: The graphiteWidth option has been removed.`<br>`The default graphite width of 10mm is always used for performance reasons.` | ~~Major~~ Breaking Release <br /> (Note that the `BREAKING CHANGE: ` token must be in the footer of the commit) |

### Automation with CI

**semantic-release** is meant to be executed on the CI environment after every successful build on the release branch.
This way no human is directly involved in the release process and the releases are guaranteed to be [unromantic and unsentimental](http://sentimentalversioning.org).

### Triggering a release

For each new commit added to one of the release branches (for example: `master`, `next`, `beta`), with `git push` or by merging a pull request or merging from another branch, a CI build is triggered and runs the `semantic-release` command to make a release if there are codebase changes since the last release that affect the package functionalities.

**semantic-release** offers various ways to control the timing, the content and the audience of published releases.
See example workflows in the following recipes:

- [Using distribution channels](docs/recipes/release-workflow/distribution-channels.md#publishing-on-distribution-channels)
- [Maintenance releases](docs/recipes/release-workflow/maintenance-releases.md#publishing-maintenance-releases)
- [Pre-releases](docs/recipes/release-workflow/pre-releases.md#publishing-pre-releases)