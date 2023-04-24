const mongoose = require('mongoose') 
const { Schema, model } = mongoose; // mongoose.Schema & mongoose.model 

const blogSchema = new Schema({
  title: String,
  tags: [String],
  comments: [{
    user: String,
    content: String,
    votes: Number
  }]
});

const Blog = model('Blog', blogSchema);

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://localhost:27017/mongoose-demo-2");

    

    console.log("Done");
}

async function createBlogPost(){
    const blogPost = new Blog({
        title: "Blogpost 2",
        tags: ["tag1", "tag2"],
        comments: [
            {
                user: "Linus",
                content: "Content2",
                votes: 3
            }
        ]
    });

    await blogPost.save();
} 

async function updateBlogPost(){
    const blogPost = await Blog.findById("644640e961050795468a1058");

    blogPost.comments.push({
        user: "Pelle",
        content: "Content 3",
        votes: 4
    });

    await blogPost.save();
}

async function deleteOne(){
    await Blog.findOneAndDelete({_id: "6446468ccd0853b227234de3"});
}