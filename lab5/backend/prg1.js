import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello Server</h1>
    <p>I am responding from Express framework</p>
    <h3>The code is minimal and easy to return</h3>
  `);
});

// this line must be last line 👇
app.listen(4444, () => {
  console.log("prg1 is running on port 4444");
});
