"use strict";



//  I M P O R T

import m from "mithril";

//  U T I L

import CSS from "../styles";



//  P R O G R A M

const Page = {
  view: ({ attrs }) =>
    m(CSS.page, [
      m(CSS.pageTitle, attrs.title || "Page"),
      m(CSS.link, {
        href: "/",
        oncreate: m.route.link
      }, "Back")
    ])
};



//  E X P O R T

export default Page;
