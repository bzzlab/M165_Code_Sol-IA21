//Import der eigenen Module und die von Drittanbietern.
let mongoose = require("mongoose");
let dbConfig = require('../../../../db.config');
let sc = require('./schema');
//Export Klasse Movie
module.exports = class Movie {
    coll = 'movies';
    Movies = null;

    constructor() {
        //Connect
        mongoose.connect(
            `${dbConfig.HOST}/${dbConfig.DB}`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        //Schema zu weisen
        this.Movies = mongoose.model(this.coll, sc.movieSchema, 'movies');
    }

    /**
     * Gibt alle Filmtitel aus.
     */
    getAllTitles() {
        this.Movies.find({},{title:1},
            function(err, movies) {
                console.log(movies);
            });
    }

    /**
     * Gibt alle Film-Titel mit unterstützter Sprache aus.
     */
    getTitleWithLanguages(Title) {
        this.Movies.find({title: Title},{title:1, languages:1},
            function(err, movies) {
                console.log(movies);
            });
    }
    /**
     * Gibt alles Plots aufgrund des Titles aus.
     * @param title
     */
    getPlot(title) {
        this.Movies.find({title: title},{_id:0, plot:1},
            function(err, movies) {
                console.log(movies);
            });
    }

    /**
     * Gibt die Anzahl Filmtitel aufgrund des Jahres aus.
     * @param year
     */
    getCountByYear(year) {
        console.log(`searching for year ${year}`);
        this.Movies.find({year: year})
            .countDocuments()
            .exec(
                function(err, count) {
                    console.log(`Movies in year ${year}: ${count} movies`);
                }
            );
    }

    /**
     * Gibt die Anzahl Filmtitel aufgrund des Teilstrings im Titel aus.
     * @param partOfTitle
     */
    getCountByTitle(partOfTitle){
        let query = this.Movies.find({title: partOfTitle});
        query.count((err, count) => {
            console.log(`Movies with title ${partOfTitle} : ${count} movies`);
        });
    }

    /**
     * Eigene Query
     */

}
