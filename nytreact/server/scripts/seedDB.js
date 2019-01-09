const mongoose = require("mongoose");
const db = require("../models");

// This file inserts the articles below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/nytreact"
);

const articleSeed = [
  {
    title: "Donald Trump's Gift to Women",
    date: new Date(Date.now()),
    url: "https://www.nytimes.com/2017/12/13/opinion/donald-trump-women.html"
  },
  {
    title: "Donald Trump Could Really Use a Friend",
    date: new Date(Date.now()),
    url: "https://www.nytimes.com/2017/12/05/opinion/donald-trump-needs-friends.html"
  },
  {
    title: "Donald Trump Did It",
    date: new Date(Date.now()),
    url: "https://www.nytimes.com/2017/12/13/opinion/donald-trump-sexual-harassment.html"
  }
];

db.Book
  (() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
