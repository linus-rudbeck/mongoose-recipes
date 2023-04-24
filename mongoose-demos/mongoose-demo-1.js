const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    const kittySchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        birthYear: Number
    });

    await mongoose.connect("mongodb://localhost:27017/mongoose-demo-1");

    const Kitten = mongoose.model("Kitten", kittySchema);

    // const lambada = new Kitten({name: "Lambada", birthYear: 1990})
    // await lambada.save();

    // const albis = new Kitten({name: "Albis", birthYear: 1985})
    // await albis.save();

    const kittens = await Kitten.find();

    console.log({ kittens })

    console.log("Done!");
}