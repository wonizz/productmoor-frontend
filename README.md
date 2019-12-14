# React Redux ProductMoor Frontend

[![Build Status](https://travis-ci.org/davezuko/react-redux-starter-kit.svg?branch=master)](https://travis-ci.org/davezuko/react-redux-starter-kit?branch=master)
[![dependencies](https://david-dm.org/davezuko/react-redux-starter-kit.svg)](https://david-dm.org/davezuko/react-redux-starter-kit)
[![devDependency Status](https://david-dm.org/davezuko/react-redux-starter-kit/dev-status.svg)](https://david-dm.org/davezuko/react-redux-starter-kit#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

이 프로젝트는 Product Moor 웹 프론트엔드 제작을 위한 Kit 입니다. 추후에 마크업 나오면 구조에 맞추어 적용하겠습니다.

## Table of Contents
1. [Running the Project](#running-the-project)
2. [Project Structure](#project-structure)
3. [Live Development](#local-development)
    * [Hot Reloading](#hot-reloading)
    * [Redux DevTools](#redux-devtools)
4. [Routing](#routing)

## Running the Project

```bash
$ yarn start  # Start the development server (or `npm start`)
```

## Project Structure

```
.
├── build                    # 전체 소스 빌드
├── public                   # Main HTML page and Static public assets 
├── src                      # Application source code
│   ├── components           # Global Reusable Components
│   │   └── Article          # PD page all component
│   │   └── Home             # Home page all component
│   ├── constants            # action 정의서 
│   ├── reducers             # all reducers definition
│   │   ├── createStore.js   # Create and instrument redux store
│   │   └── reducers.js      # Reducer registry and injection
│   └── agent.js             # 외부 API 연계 호출 (데이터)
│   └── index.js             # 페이지 Router 정의 
```

## Live Development

### Hot Reloading

Hot reloading is enabled by default when the application is running in development mode (`yarn start`). This feature is implemented with webpack's [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) capabilities, where code updates can be injected to the application while it's running, no full reload required. Here's how it works:

* For **JavaScript** modules, a code change will trigger the application to re-render from the top of the tree. **Global state is preserved (i.e. redux), but any local component state is reset**. This differs from React Hot Loader, but we've found that performing a full re-render helps avoid subtle bugs caused by RHL patching.

* For **Sass**, any change will update the styles in realtime, no additional configuration or reload needed.

### Redux DevTools

**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn't require installing any packages in your project.

However, it's easy to bundle these developer tools locally should you choose to do so. First, grab the packages from npm:

```bash
yarn add --dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```

Then follow the [manual integration walkthrough](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md).

## Routing
We use `react-router` [route definitions](https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application. See the [project structure](#project-structure) section for more information.


