const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 8087;

const app = express();
app.use(cors());
app.use(bp.json());

const cat = require("./models/cat")
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
	response.status(200).json("Hello World");
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
