"use strict";



//  I M P O R T

import m from "mithril";

//  U T I L S

import Page from "./page";

const links = [
  {
    module: Page,
    name: "Link to Page",
    path: "/page"
  }
];

const Index = {
  view: () => (
    <div>
      <h1>Home</h1>

      <ul>
        <li>
          <a href="/page" oncreate={m.route.link}>Link to Page</a>
        </li>
      </ul>
    </div>
  )
};

const mountNode = document.querySelector("app");

const routes = {
  "/": Index
};



//  P R O G R A M

m.route.prefix(""); // no fugly hash in our URLs
links.forEach(link => routes[link.path] = link.module);
m.route(mountNode, "/", routes);
