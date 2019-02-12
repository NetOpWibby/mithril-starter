"use strict";



//  P A C K A G E

const m = require("mithril");

//  U T I L

const pauseFor = ms => new Promise(resolve => setTimeout(resolve, ms));



//  E X P O R T

module.exports = exports = {
  onmatch: async(params, route) => {
    await pauseFor(1000);

    return {
      view: function() {
        return [
          m("div", "route: ", route, JSON.stringify(params)),
          m(
            "a", {
              href: "/",
              oncreate: m.route.link
            },
            "back to home page"
          )
        ];
      }
    };
  }
};
