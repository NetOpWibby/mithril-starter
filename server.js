"use strict";

require("mithril/test-utils/browserMock")(global);
global.window.XMLHttpRequest = require("w3c-xmlhttprequest").XMLHttpRequest;

const fastify = require("fastify");
const web = require("./server/web");
const app = fastify();

app.register(web);

// app.get("/index.js", browserify("./client/index.js"));

const port = process.env.PORT || 8000;

app.listen(port, "0.0.0.0", async() => {
  console.log("Server is now running on port " + port); // eslint-disable-line no-console
});
