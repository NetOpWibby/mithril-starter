"use strict";



//  N A T I V E

import fs from "fs";

//  I M P O R T S

import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import { eslint } from "rollup-plugin-eslint";
import pathmodify from "rollup-plugin-pathmodify";
import resolve from "rollup-plugin-node-resolve";

//  U T I L S

export const pkg = JSON.parse(fs.readFileSync("./package.json"));

if (!pkg)
  throw("Could not read package.json");

const env = process.env;
const external = Object.keys(pkg.dependencies || {});
const globals = {};
const input = env.INPUT || "index.js";
const name = env.NAME || pkg.name;

external.forEach(ext => {
  switch(ext) {
    case "mithril":
      globals["mithril"] = "m";
      break;

    default:
      globals[ext] = ext;
      break;
  }
});

export const createConfig = ({ includeDepencies }) => ({
  external: includeDepencies ? [] : external,
  input,
  output: {
    name,
    globals
  },
  plugins: [
    eslint({
      cache: true
    }),

    babel({
      exclude: "node_modules/**"
    }),

    // Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
    commonjs({
      include: "node_modules/**"
    }),

    pathmodify({
      aliases: [
        {
          id: "mithril/stream",
          resolveTo: "node_modules/mithril/stream.js"
        }
      ]
    }),

    // Resolve libs in node_modules
    resolve({
      jsnext: true,
      main: true
    })
  ]
});

