import http from "http";

const server = http.createServer((req, res) => {
  if ((req.url === "/api/users", req.method === "GET")) {
    res.end(JSON.stringify({ msg: "all users" }));
  } else if ((req.url === "/api/users", req.method === "POST")) {
    res.end(JSON.stringify({ msg: "add users" }));
  } else if ((req.url === "/api/users", req.method === "PUT")) {
    res.end(JSON.stringify({ msg: "single users with id i" }));
  } else if ((req.url === "/api/users", req.method === "DELETE")) {
    res.end(JSON.stringify({ msg: "update user 1" }));
  } else if ((req.url === "/api/users", req.method === "PATCH")) {
    res.end(JSON.stringify({ msg: "remove  1" }));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(4444, () => {
  console.log("Server prg7 running ...");
});
