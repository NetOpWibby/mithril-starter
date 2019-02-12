"use strict";



//  I M P O R T

import m from "mithril";

//  U T I L S

import CSS from "./styles";
import Page from "./page";

const links = [
  {
    module: Page,
    name: "Link to Page",
    path: "/page"
  }
];

const Index = {
  view: () =>
    m(CSS.page, [
      m(CSS.pageTitle, "Home"),
      m(CSS.list, links.map(link => (
        m(CSS.listItem, m(CSS.link, {
          href: link.path,
          oncreate: m.route.link
        }, link.name))
      )))
    ])
};

const mountNode = document.querySelector("app");

const routes = {
  "/": Index
};



//  P R O G R A M

m.route.prefix("");

links.forEach(link => routes[link.path] = link.module);

m.route(mountNode, "/", routes);
