"use strict";



const m = require("mithril");
const baseView = require("../baseView");

function view() {
  return [
    m("h1", "mithril-isomorphic-example"),
    m("p", "yes, it works"),
    m(
      "a",
      {
        href: "/second-page",
        oncreate: m.route.link
      },
      "second page"
    ),
    m(
      "a",
      {
        href: "/with-route-resolver/999",
        oncreate: m.route.link
      },
      "with route resolver"
    )
  ];
}

module.exports = {
  view: baseView(view)
};
