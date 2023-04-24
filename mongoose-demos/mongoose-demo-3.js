const mongoose = require('mongoose');

main().catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    numberOfPages: Number
});


const Book = mongoose.model('Book', bookSchema);

async function main(){
    await mongoose.connect("mongodb://localhost:27017/mongoose-demo-3");

    const books1 = await Book.find({author: "JKR"}, 'title author');
    console.log({books1});

    const books2 = await Book.find({numberOfPages: {$gt: 550}}, 'title author');
    console.log({books2});


    console.log("Done");
}

async function createBooks(){
    const book1 = new Book({
        title: "Harry P 1",
        author: "JKR",
        numberOfPages: 500
    });

    await book1.save();
    
    const book2 = new Book({
        title: "Harry P 2",
        author: "JKR",
        numberOfPages: 600
    });

    await book2.save();
    
    const book3 = new Book({
        title: "LOTR",
        author: "JRR",
        numberOfPages: 700
    });

    await book3.save();
}