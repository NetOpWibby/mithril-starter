"use strict";



//  P A C K A G E

const m = require("mithril");

//  U T I L

const wrapper = require("../wrapper");



//  E X P O R T

module.exports = exports = {
  view: wrapper(view)
};



//  H E L P E R

function view() {
  return [
    m("h1", "mithril-isomorphic-example"),
    m("p", "yes, it works"),
    m(
      "a", {
        href: "/with-route-resolver/999",
        oncreate: m.route.link
      },
      "with route resolver"
    )
  ];
}
