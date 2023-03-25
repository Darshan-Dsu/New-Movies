import React from "react";
import { useState } from "react";
import MovieEdit from "./MovieEdit";

function MoviesShow({ movie, deleteHandler, SaveEditMovieHandler }) {
  const [isEdit, setEditMovie] = useState(false);

  const editMovieHandler = () => {
    setEditMovie(true);
  };

  const deleteMovie = () => {
    deleteHandler(movie);
  };

  const saveEditMovie = (movie) => {
    setEditMovie(false);
    console.log("movie needs to be edited is !", movie);
    SaveEditMovieHandler(movie);
  };

  return (
    <div className="card">
      <img src={`https://picsum.photos/seed/${movie.id}/200/300`} alt="sadad" />
      <p>id :{movie.id}</p>
      <p>name :{movie.name}</p>
      <button onClick={deleteMovie}>delete!</button>
      <button onClick={editMovieHandler}>edit</button>
      {isEdit && <MovieEdit editMovie={movie} saveEditMovie={saveEditMovie} />}
    </div>
  );
}

export default MoviesShow;
