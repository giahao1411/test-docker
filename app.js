require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const ProductRouter = require("./routes/ProductRouter");
const Database = require("./config/database");

// database connection
Database.connect();

app.use("/", ProductRouter);

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
