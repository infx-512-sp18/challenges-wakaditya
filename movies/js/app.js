var userString = document.getElementById('movie-filter');
console.log (userString.textContent);

function updateMovies() {
    console.log (userString.value);
    console.log (createNewList(MOVIES, userString.value))
    var updatedMovieList = (createNewList(MOVIES, userString.value));
    console.log (renderMovies (updatedMovieList));
}

//changes query to lowercase, then filters whether it matches the criteria in filterMovie, which is whether the string provided by user exists in the title
function createNewList (MOVIES, query) { 
    // filterMovie(MOVIES, query)
    var string = query.toLowerCase();
    var newMovies = MOVIES.filter( function(movie) {
        var lowerMovie = movie.title.toLowerCase();
        if ((lowerMovie.indexOf(string) !== -1)) { 
            return true;
        }
        if ((lowerMovie.indexOf(string) === -1)) {
            return false;
        }})
    return newMovies;
}
//when event input occurs by the user, the input (userString) triggers createNewList using the user string to search. 
userString.addEventListener("input", updateMovies);


//Display & sort data

function renderMovies(movie_list) {
    //select the <tbody> element
    var tbody = document.querySelector("tbody");
    //Sort data by sales before passing in
    function compare(record1, record2) {
        return record2.revenue-record1.revenue;
      }
    movie_list.sort(compare);
    //clear any existing content in the body
    tbody.textContent = "";
    //for each element in the array...
    for (var i = 0; i < movie_list.length; i++) {
        //get the movie record at the current index
        var movie = movie_list[i];
        //render that movie record as a <tr> with <td>s
        //and append it to the <tbody>
        tbody.appendChild(renderMovie(movie));
    }
}

function renderMovie(movie) {
    //create the <tr> element
    var tr = document.createElement("tr");
    //create and append the <td> elements
    tr.appendChild(renderMovieProp(movie.title, true));
    tr.appendChild(renderMovieProp(movie.revenue));
    tr.appendChild(renderMovieProp(movie.rating));
     //return the table row to the caller
     return tr;

    }

function renderMovieProp(content, nonNumeric) {
    //create new td element
    var td = document.createElement("td");
    //add element title, revenue, rating, to the new td element \
    td.textContent = content;
    //if it should be formatted as nonnumeric
    if (td.querySelector("non-numeric") == true) {
        //add the "numeric" style class
        td.classList.add("non-numeric");
   }
   if (nonNumeric) {
    //add the "numeric" style class
    td.classList.add("non-numeric");
    }
    //return new element
    return td;
} 
