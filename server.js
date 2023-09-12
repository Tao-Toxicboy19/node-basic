const express = require("express");
const { readdirSync } = require("fs");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./Config/db");

const app = express();
connectDB()

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "10mb" }));

readdirSync("./Routes").map((router) =>
  app.use("/api", require(`./Routes/${router}`))
);

const post = 3030 || 5000;

app.listen(post, () => console.log(`Server is Runing on port ${post}`));
