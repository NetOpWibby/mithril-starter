"use strict";



//  I M P O R T

import m from "mithril";



//  P R O G R A M

const Page = {
  view: () => (
    <div>
      <h1>Page</h1>

      <p>This is a page</p>
      <a href="/" oncreate={m.route.link}>Back</a>
    </div>
  )
};



//  E X P O R T

export default Page;
