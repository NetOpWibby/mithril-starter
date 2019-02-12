# mithril-starter



Project setup with:
* [Babel](http://babeljs.io) for transpiling es2015 to es5
* [ESLint](http://eslint.org) to find syntax errors and get a standardized coding style
* [LiveReload](https://github.com/livereload/livereload-js) to view code changes directly in the browser
* [Mithril](http://mithril.js.org)
* [Rollup](http://rollupjs.org) for optimized module bundles

Basic styles are included using [Tachyon](http://tachyons.io), but these can simply be replaced with your own CSS solution.

*If you want to check out the isomorphic example of using Mithril with Fastify, check out [this branch](https://git.inc.sh/NetOperatorWibby/mithril-starter/src/branch/isomorphic).*



## Setup

Install dependencies

```bash
npm i
```

## Build and watch

Script commands defined in `package.json`:

* `build`: creates a minified bundle in `dist/scripts/`
* `start`: serves the build directory at [localhost:5000](http://localhost:5000)
* `watch`: starts a local webserver; creates a bundle in `dist/scripts/` that is being updated with each code change; calls LiveReload to refresh the browser after code changes are built

Call `npm run watch` and open a web page at [localhost:8080](http://localhost:8080). The port number is set by environment variable `PORT` in `package.json`.

When making changes, the terminal will show lint errors, if any.

## Configuration files

`scripts` contains a couple of Rollup configuration files. The scripts use `rollup.base.js` as base configuration.

FYI, the base configuration:
* Exports `createConfig({ includeDepencies })`
* Reads `package.json` to read package dependencies. If `includeDepencies` is `true`, it will include those dependencies in the build file
* Creates global package names; and sets global `m` for package "mithril".

### Bundler configuration

* `rollup.es.js`: Builds an ES2015 module with syntax features that node supports
* `rollup.umd.js`: Builds a UMD bundle
* `rollup.watch.js`: Builds a UMD bundle that is updated with each file change

Optional environment variables:

* `DEPS` (Number 0 or 1): include dependencies
* `WATCH_DIR` (String): sets the watch directory when running the `watch` script
* `PORT` (Number): sets the http server port when running the `watch` script

Other configuration files:
* `.babelrc`: Babel configuration
* `.eslintrc`: ESLint configuration

## License

MIT
