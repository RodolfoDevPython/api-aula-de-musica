const express = require("express");
const router = require("./router");
const morgan = require("morgan");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Library Api",
            version: "1.0.0",
            description: "A Provider Services API"
        },
        servers: [
            {
                url: "http://localhost:3001"
            }
        ]
    },
    apis: ["./src/router.js"]
}

const specs = swaggerJsDoc(options)

require("./database");

const app = express();

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
app.use("/api", router);

app.listen(process.env.PORT || 3001);