import express from "express";

const app = express();

app.get("/", (req, res) => {
  // res.send("Hello Express");
  res.send("<h1>Hello Express</h1>");
});

// this line must be last line 👇
app.listen(4444, () => {
  console.log("prg1 is running on port 4444");
});
