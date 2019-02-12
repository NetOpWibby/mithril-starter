"use strict";



//  P A C K A G E S

require("@babel/register");
require("@babel/polyfill");
require("mithril/test-utils/browserMock")(global);

//  U T I L S

global.window.XMLHttpRequest = require("w3c-xmlhttprequest").XMLHttpRequest;
require("./app");
