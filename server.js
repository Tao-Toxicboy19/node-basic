const express = require("express");
const { readdirSync } = require("fs");

const app = express();

readdirSync("./Routes").map((router) =>
  app.use("/api", require(`./Routes/${router}`))
);

const post = 3030 || 5000;

app.listen(post, () => console.log(`Server is Runing on port ${post}`));
