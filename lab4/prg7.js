import http from "http";
import { getUsers, addUser } from "./users.js";

const server = http.createServer((req, res) => {
  // GET /api/users
  if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify(getUsers()));
  }

  // POST /api/users
  else if (req.url === "/api/users" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const user = JSON.parse(body);

      addUser(user);

      console.log("Received user data:", user);

      res.end(
        JSON.stringify({
          msg: "Add user",
          user: user,
        }),
      );
    });
  }

  // GET /api/users/1
  else if (req.url === "/api/users/1" && req.method === "GET") {
    res.end(
      JSON.stringify({
        msg: "Show user with id 1",
      }),
    );
  }

  // PUT /api/users/1
  else if (req.url === "/api/users/1" && req.method === "PUT") {
    res.end(
      JSON.stringify({
        msg: "Replace user 1",
      }),
    );
  }

  // DELETE /api/users/1
  else if (req.url === "/api/users/1" && req.method === "DELETE") {
    res.end(
      JSON.stringify({
        msg: "Delete user 1",
      }),
    );
  }

  // PATCH /api/users/1
  else if (req.url === "/api/users/1" && req.method === "PATCH") {
    res.end(
      JSON.stringify({
        msg: "Partially update user 1",
      }),
    );
  }

  // Invalid route
  else {
    res.end(
      JSON.stringify({
        msg: "Route not found",
      }),
    );
  }
});

server.listen(4444, () => {
  console.log("Server prg7 running on http://localhost:4444");
});
