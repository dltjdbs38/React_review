const jsonServer = require("json-server");
const { resolve } = require("path");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname + "/db.json"));
const middlewares = jsonServer.defaults({
  static: path.resolve(__dirname + "/../build"),
});

const port = process.env.PORT || 3001;
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);
server.listen(port, () => {
  console.log("Hey, JSON Server is running!!");
  console.log("Let's Go to http://localhost:3001/");
  console.log("{^_^}/");
});
