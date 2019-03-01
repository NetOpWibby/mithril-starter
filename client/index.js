"use strict"; /* global document */



const domready = require("domready");
const m = require("mithril");

const routes = require("./routes");

m.route.prefix("");

domready(() => m.route(document.body, "/", routes));
