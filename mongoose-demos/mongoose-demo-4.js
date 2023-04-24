const mongoose = require('mongoose');
const { type } = require('os');

const authorSchema = new mongoose.Schema({
    name: String,
    birthYear: Number,
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ]
});

const bookSchema = new mongoose.Schema({
    title: String,
    numberOfPages: Number,
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }
});

const Author = mongoose.model("Author", authorSchema);
const Book = mongoose.model("Book", bookSchema);

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://localhost:27017/mongoose-demo-4");

    /*
    const jkr = await Author.findOne({ name: "JKR" });

    const harryP3 = new Book({
        title: "Harry P 3",
        numberOfPages: 13,
        author: jkr._id
    });

    await harryP3.save();

    jkr.books.push(harryP3._id)

    await jkr.save();
    */

    const jkr = await Author.findOne({ name: "JKR" }).populate("books");

    console.log(jkr);

    console.log("Done!");
}

async function addAuthors() {
    const jkrAuthor = new Author({
        name: "JKR",
        birthYear: 1802
    });
    await jkrAuthor.save();

    const jrrAuthor = new Author({
        name: "JRR",
        birthYear: 1008
    });
    await jrrAuthor.save();
}