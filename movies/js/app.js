function renderMovies(movie_list) {
    var tbody = document.querySelector("tbody");
    
    tbody.textContent = "";

    for (var idx = 0; idx < movie_list.length; idx++) {
        var movie = movie_list[idx];
        
        tbody.appendChild(renderMovie(movie))
    }

}

function renderMovie(movie) {
    var tr = document.createElement("tr");
    
    tr.appendChild(renderMovieProp(movie.title));
    tr.appendChild(renderMovieProp(movie.revenue));
    tr.appendChild(renderMovieProp(movie.rating));
    
    return tr;
}

function renderMovieProp(content, nonNumeric) {
    var td = document.createElement("td");
    
    td.textContent = content;

    if (nonNumeric) {
       td.classList.add("non-numeric")
}
    return td;
}

MOVIES.sort(function(record1, record2) {
    return record2.revenue - record1.revenue;

});

var movieInput = document.getElementById('movie-filter');

movieInput.addEventListener("input", function filterItems(query) {
    return MOVIES.title.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    }
) 

});



renderMovies(movie);

