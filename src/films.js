// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {  
  return array.map(movie => movie.director);
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 return array.filter(movie => movie.director === director)
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesByDirector = array.filter(movie => movie.director === director);
  let totalScore = moviesByDirector.reduce((accumulator, movie) => accumulator + movie.score, 0);
  let average = (totalScore / moviesByDirector.length).toFixed(2);
  return parseFloat(average);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  return array.map(movie => movie.title).sort().slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {  
  return movies.slice().sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  let moviesByCategory = movies.filter(movie => movie.genre.includes(category) && movie.score > 0);
  let totalScoreByCategory = moviesByCategory.reduce((accumulator, movie) => accumulator + movie.score, 0);
  return parseFloat((parseFloat(totalScoreByCategory) / moviesByCategory.length).toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  let updatedMovies = [];
  let updatedMovies2 = new Array();
  if (Array.isArray(movies)) {
      updatedMovies = [...movies];
      updatedMovies2 =  updatedMovies.map(movie => {
      if (movie.duration === undefined) {
        movie.duration = 0;
        return;
      }

      let hoursToMinutes = movie.duration.indexOf('h');
      let minutes = 0;
      if (hoursToMinutes > -1 ) {
        hoursToMinutes = parseInt(movie.duration.split('h')[0].trim()) * 60;
        minutes = parseInt(movie.duration.split('h')[1].trim().split('min')[0]);
      } else {
        hoursToMinutes = 0;
        minutes = movie.duration.indexOf('min');
        if (minutes > -1) minutes = parseInt(movie.duration.split('min')[0].trim());
      }
      movie.duration = isNaN(minutes) ? hoursToMinutes : hoursToMinutes + minutes;
      return movie;
    });
  }
  return updatedMovies2;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
