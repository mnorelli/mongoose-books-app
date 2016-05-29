// is this going to heroku?
var mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI ||
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/book-app")


module.exports.Book = require("./book.js");
module.exports.Author = require("./author.js");
