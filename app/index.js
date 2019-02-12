"use strict";



//  U T I L S

import bankai from "fastify-bankai";
import server from "./server";

const port = process.env.PORT || 8000;



//  P R O G R A M

server.register(bankai, {
  entry: "."
});

server.listen(port, "0.0.0.0", async() => {
  process.stdout.write(`Server is now running on port ${port}\n`);
});
