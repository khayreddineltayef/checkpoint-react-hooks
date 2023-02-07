import React from "react";
import MovieCard from "../movieCard/MovieCard";

const MovieList = ({ movies, del }) => {
  return (
    <div className="list">
      {movies.map((el) => (
        <div key={el.id}>
          <MovieCard movie={el} del={del} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
