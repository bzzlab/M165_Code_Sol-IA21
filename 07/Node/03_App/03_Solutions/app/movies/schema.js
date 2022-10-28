//Schema erstellen für die Queries
let mongoose = require("mongoose");
let movieSchema = mongoose.Schema({
    plot : String,
    title : String,
    languages: [],
    year: Number
});

//Schema exportieren
module.exports = {
    movieSchema
}
