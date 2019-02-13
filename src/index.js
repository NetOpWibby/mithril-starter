"use strict";



//  I M P O R T

import m from "mithril";

//  U T I L S

import Page from "./page";

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

const Nope = {
  view: () => (
    <div>
      <h1>404</h1>

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
  "/": Index,
  "/page": Page
};

const notFound = {
  "/:404...": Nope
};



//  P R O G R A M

m.route.prefix(""); // no fugly hash in our URLs
m.route(mountNode, "/", { ...routes, ...notFound });
