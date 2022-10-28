let mongoose = require("mongoose");
let dbConfig = require('../db.config');
mongoose.connect(
    `${dbConfig.HOST}/${dbConfig.DB}`, {
        /* allow users to fall back to the old
        parser if they find a bug in the new parser.
        */
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);
let movieSchema = mongoose.Schema({
    plot : String,
    title : String,
    languages: [],
    year: Number
});

const Movies = mongoose.model('movies', movieSchema, 'movies');

console.log("get all movies. Output titles and their languages. ")
Movies.find({},{title:1, languages:1},
    function(err, movies) {
    console.log(movies);
});

let args = process.argv.slice(2);
let out = args[0];

switch (out) {
    case 0:
        console.log("get all movies. Output titles and their languages. ")
        Movies.find({},{title:1, languages:1},
            function(err, movies) {
                console.log(movies);
            });
        break;
    case 1:
        console.log("get plot by title");
        this.Movies.find({title: 'Blacksmith Scene'}, {_id: 0, plot: 1},
            function (err, movies) {
                console.log(movies);
            });
        break;
    case 2:
        console.log("get count by year");
        Movies.countDocuments({year: {$eq: 2015}}, (err, cnt) => {
            console.log(cnt);
        });
        break;
    case 3:
        console.log("get count by title");
        let query = Movies.find({title: /Black/});
        query.count((err, count) => {
            console.log(count);
        });
        break;
}
