"use strict";



//  I M P O R T S

// import bankai from "fastify-bankai";
import fastify from "fastify";
import m from "mithril";
import ssr from "mithril-node-render";

//  U T I L S

import routes from "../client/routes";

const app = fastify({
  caseSensitive: false,
  logger: {
    prettyPrint: true, // process.env.NODE_ENV === "development",
    redact: ["req.headers.authorization"],
    level: "warn",
    serializers: {
      req(req) {
        return {
          method: req.method,
          url: req.url,
          headers: req.headers,
          hostname: req.hostname,
          remoteAddress: req.ip,
          remotePort: req.connection.remotePort
        };
      }
    }
  }
});



//  P R O G R A M

// app.register(bankai, {
//   entry: "../index.js"
// });

Object.keys(routes).map(route => {
  const module = routes[route];
  const onmatch = module.onmatch || (() => module);
  const render = module.render || (a => a);

  app.get(route, {
    preHandler: (requestObject, responseObject, next) => {
      // any custom prehandler stuff would go here
      next();
    }
  }, async(requestObject, responseObject, next) => {
    responseObject.type("text/html; charset=utf-8");

    try {
      const rootNode = render(
        m((await onmatch(requestObject.params, requestObject.url)) || "div", requestObject.params)
      );

      responseObject.send(await ssr(rootNode));
    } catch(error) {
      next(error); // TODO: Return 500 error page
      // return "Something strange happened. Try again in a couple minutes.";
    }
  });
});



//  E X P O R T

module.exports = exports = app;
