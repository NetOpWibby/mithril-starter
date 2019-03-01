"use strict";



const fp = require("fastify-plugin");
const m = require("mithril");
const toHtml = require("mithril-node-render");

const routes = require("../client/routes");



module.exports = exports = fp((fastify, options, next) => {
  Object.keys(routes).map(function(route) {
    const module = routes[route];
    const onmatch = module.onmatch || (() => module);
    const render = module.render || (a => a);

    fastify.get(route, async function(req, res) {
      res.type("text/html; charset=utf-8");

      try {
        const rootNode = render(
          m((await onmatch(req.params, req.url)) || "div", req.params)
        );

        res.send(await toHtml(rootNode));
      } catch(err) {
        next(err);
      }
    });
  });

  next();
});
