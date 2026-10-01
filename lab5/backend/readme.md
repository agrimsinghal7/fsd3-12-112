# Express

Fast, unopinionated, minimalist web framework for Node.js

## Steps
1. create project folder(lab5)
2. create two folder (frontend,backend) in root(lab5)
3. open terminal and reach to backend by 

```
cd..
cd lab5
cd backend 
```
4. type `npm init -y`
5. install nodemon `npm i nodemon -d`
6. install express  `npm i express`
7. update backend/package.json 
    - change type `type:"module"`
    - change script

    ``` 
    script:{
        "start": "node app.js",
        "dev": "nodemon prg1.js"
    }
    ```
```
  import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

// this line must be last line 👇
app.listen(4444, () => {
  console.log("prg1 is running on port 4444");
});
```
