const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bp = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 8087;

const app = express();
app.use(cors());
app.use(bp.json());

const Cat = require("./models/cat");
mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
	response.status(200).json("Hello World");
});

app.get("/cats", async (request, response) => {
	const allCats = await Cat.find(request.query);
	response.status(200).json(allCats);
});

app.post("/cats", async (request, response) => {
	try {
		const newCat = await cat.create(req.body);
		response.status(200).json(newCat);
	} catch (error) {
		response.status(500).json(error);
	}
});

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
