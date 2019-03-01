"use strict";



const m = require("mithril");

module.exports = {
  onmatch: async function() {
    return {
      view: function() {
        return [
          m("div", "yo"),
          m(
            "a",
            {
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
