const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);

const Cat = require("./models/cat");

async function seed() {
	await Cat.create({
		name: "Felix",
		color: "Gray and White",
		hasClaws: true,
		likes: ["catnip", "sleeping", "dreamies"],
	});
	await Cat.create({
		name: "Credic",
		color: "Ginger",
		hasClaws: false,
		likes: ["scritches", "sleeping", "milk"],
	});
	console.info("Cat Seeds Planted");
	mongoose.disconnect();
}

seed();