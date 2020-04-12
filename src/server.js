const express = require("express");
const router = require("./router");
const morgan = require("morgan");

require("./database");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", router);

app.listen(process.env.PORT || 3000);

