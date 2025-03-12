import { hostname } from "os";

import * as http from "http";

const PORT = 8080;
const MESSAGE = "Hello there!";

const LOGGER = console;

const server = http.createServer((req: any, res: any) => {
  res.statusCode = 200;
  res.setHeader("content-type", "application/json");
  res.end(
    JSON.stringify({
      message: MESSAGE,
    })
  );
});

server.listen(PORT, hostname, (err) => {
  if (err) {
    LOGGER.error(err);
  }
  LOGGER.log(`Server started at http://${hostname}:${PORT}`);
});
