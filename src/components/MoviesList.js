import React from "react";
import MoviesShow from "./MoviesShow";
import "./style.css";
// import { useState } from "react";

function MoviesList({ movieData, deleteMovieHandler, saveEditMovie }) {
  //   const [delMovie, setDeleteMoview] = useState(movieData);
  // const { count, incrementCount } = useContext(MovieContext);
  console.log("movie data ", movieData);
  //   console.log("delte moviw ", delMovie);

  const deleteHandler = (movie) => {
    deleteMovieHandler(movie);
  };

  const editMovieHandler = (movie) => {
    saveEditMovie(movie);
  };
  return (
    <div className="container ">
      <div className="row mx-auto gap-3">
        {movieData.map((movie) => (
          <div className="col-6 col-lg-2 col-md-4 ">
            <MoviesShow
              movie={movie}
              key={movie.id}
              deleteHandler={deleteHandler}
              SaveEditMovieHandler={editMovieHandler}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
