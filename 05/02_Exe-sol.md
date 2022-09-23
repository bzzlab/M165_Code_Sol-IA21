### Übung 5.02: Suchen von Filmen nach Genre und Paginieren von Ergebnissen

Zwei Löungsvarianten:
```
//Autor: Noah Bargisen
let findMoviesByGenre =
    function(genre, pageNumber, pageSize){
        let movies = db.movies.find(
            {genres: {$all: [genre]}
            },
            {title:1, "imdb.rating":1
            }
        ).sort({"imdb.rating":-1}).toArray();
        let index;
        for(let i = 0 ; i < pageSize ; i++) {
            index=pageSize * pageNumber + i;
            print(movies[index].title, movies[index].imdb.rating.toString().trim())
        }

   }

findMoviesByGenre("Short", 1, 10);
```
Alternative: 
```
var findMoviesByGenre = function(genre, pageNumber, pageSize){
      let toSkip = 0;
      if(pageNumber < 2){
          toSkip = 0;
      } else{
          toSkip = (pageNumber -1) * pageSize;
      }
      let movies = db.movies.find(
          {"genres" : genre}, 
          {"_id" : 0, "title" :1})
      .sort({"imdb.rating" : -1})
      .skip(toSkip)
      .limit(pageSize)
      .toArray()
      print("************* Page : " + pageNumber)
      for(let i=0; i<movies.length; i++){
          print(movies[i].title)
      }
}
```


