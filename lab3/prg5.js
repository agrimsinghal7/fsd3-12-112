import http from "http";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.end(`
      <h1>Home Page</h1>
      <a href="/product">Product</a>
      <br>
      <a href="/contact">Contact Us</a>
    `);
  } else if (req.url === "/product") {
    res.end(`
      <h1>iPhone XL</h1>
      <h2>Price: ₹90,000</h2>
      <h3>Discount: 30%</h3>
      <br>
      <a href="/">Home</a>
      <br>
      <a href="/contact">Contact Us</a>
    `);
  } else if (req.url === "/contact") {
    res.end(`
      <h1>Contact Us</h1>
      <p>Email: support@example.com</p>
      <br>
      <a href="/">Home</a>
      <br>
      <a href="/product">Product</a>
    `);
  } else {
    res.statusCode = 404;

    res.end(`
      <h1>Page Not Found</h1>
      <a href="/">Home</a>
    `);
  }
});

server.listen(3000, () => {
  console.log("Server prg5 runs on port 3000...");
});
