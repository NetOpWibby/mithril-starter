"use strict";



//  P A C K A G E S

const domready = require("domready");
const m = require("mithril");

//  U T I L

const routes = require("./routes");



//  P R O G R A M

m.route.prefix("");

domready(() => m.route(document.body, "/", routes));
