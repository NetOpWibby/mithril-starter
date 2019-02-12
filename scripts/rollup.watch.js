"use strict";



//  I M P O R T S

import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";

//  U T I L S

import umdConfig from "./rollup.umd.js";

const env = process.env;
const serverPort = parseInt(env.PORT, 10);
const targetConfig = Object.assign({}, umdConfig);
const watchDir = env.WATCH_DIR;



//  P R O G R A M

if (!watchDir)
  throw("Missing WATCH_DIR: no watch directory");

if (!serverPort)
  throw("Missing PORT: no http server port");

targetConfig.plugins.push(
  serve({
    contentBase: watchDir,
    port: serverPort
  })
);

targetConfig.plugins.push(
  livereload({
    watch: watchDir
  })
);



//  E X P O R T

export default targetConfig;



// Builds a UMD bundle that is updated with each file change
