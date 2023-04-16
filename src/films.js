// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map(movie => movie.director);
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  return movies.filter(movie => movie.director === director)
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let average = 0;
  let moviesByDirector = getMoviesFromDirector(movies, director);
  let totalScore = moviesByDirector.reduce((accumulator, movie) => accumulator + movie.score, 0);
  if (moviesByDirector.length > 0) average = (totalScore / moviesByDirector.length).toFixed(2);

  return parseFloat(average);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  return movies.map(movie => movie.title).sort().slice(0, 20);
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
  const updatedMovies = [];
  for (let movie of movies) {
      const newMovie = JSON.parse(JSON.stringify(movie));    
      let total_minutes = 0;

      if (undefined === newMovie.duration) {
        newMovie.duration = total_minutes;
          return;
      }  

      if (newMovie.duration.indexOf('h') > -1) {
          total_minutes = parseInt(newMovie.duration.split('h')[0].trim()) * 60;
          if (newMovie.duration.indexOf('min') > -1) total_minutes += parseInt(newMovie.duration.split('h')[1].trim().split('min')[0]);
      } else {
          if (newMovie.duration.indexOf('min') > -1) total_minutes = parseInt(newMovie.duration.split('min')[0].trim());
      }
      newMovie.duration = total_minutes;      
      updatedMovies.push(newMovie);
  }
  return updatedMovies;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const bestMovie = movies.filter(movie => movie.year === year)
                          .reduce((prev, current) => prev.score > current.score ? prev : current);
  return [bestMovie];  
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
