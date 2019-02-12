"use strict";



//  P A C K A G E

const m = require("mithril");



//  E X P O R T

module.exports = exports = view => {
  if (process.browser) {
    return function(vnode) {
      document.title = getTitle(vnode);
      return view(vnode);
    };
  }

  return function(vnode) {
    return [
      m("!DOCTYPE[html]"),
      m("html[lang=en]", [
        m("head", [
          m("title", getTitle(vnode)),
          m("meta[charset=utf-8]"),
          m("script[src=/index.js]")
        ])
      ]),
      m("body", view(vnode))
    ];
  };
};



//  H E L P E R

function getTitle(vnode) {
  if (vnode.state.getTitle)
    return vnode.state.getTitle();

  return "isomorphic mithril application";
}
