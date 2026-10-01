import http from "http";
import {
  getAllUsers,
  getUsersById,
  updateUser,
  deleteUser,
  addUser,
  updatePartialUser,
} from "./users.js";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  // GET All Users
  if (req.url === "/api/users" && req.method === "GET") {
    res.end(JSON.stringify(getAllUsers()));
  }

  // POST Add User
  else if (req.url === "/api/users" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const user = JSON.parse(body);
      const userCreated = addUser(user);

      res.end(
        JSON.stringify({
          msg: "user added",
          userCreated,
        }),
      );
    });
  }

  // Routes with ID
  else if (req.url.startsWith("/api/users/")) {
    const pid = Number(req.url.split("/")[3]);

    // GET User by ID
    if (req.method === "GET") {
      const user = getUsersById(pid);

      if (!user) {
        res.statusCode = 404;
        return res.end(
          JSON.stringify({
            msg: "User not found",
          }),
        );
      }

      res.end(JSON.stringify(user));
    }

    // PUT Replace User
    else if (req.method === "PUT") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const updateData = JSON.parse(body);
        const updatedUser = updateUser(pid, updateData);

        if (!updatedUser) {
          res.statusCode = 404;
          return res.end(
            JSON.stringify({
              msg: "User not found",
            }),
          );
        }

        res.end(
          JSON.stringify({
            msg: "user updated",
            updatedUser,
          }),
        );
      });
    }

    // DELETE User
    else if (req.method === "DELETE") {
      const deleted = deleteUser(pid);

      if (!deleted) {
        res.statusCode = 404;
        return res.end(
          JSON.stringify({
            msg: "User not found",
          }),
        );
      }

      res.end(
        JSON.stringify({
          msg: "user deleted",
        }),
      );
    }

    // PATCH Partially Update User
    else if (req.method === "PATCH") {
      let body = "";

      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        const updateData = JSON.parse(body);
        const updatedUser = updatePartialUser(pid, updateData);

        if (!updatedUser) {
          res.statusCode = 404;
          return res.end(
            JSON.stringify({
              msg: "User not found",
            }),
          );
        }

        res.end(
          JSON.stringify({
            msg: "user partially updated",
            updatedUser,
          }),
        );
      });
    }
  }
});

server.listen(3000, () => {
  console.log("prg7 is running on port 3000");
});
