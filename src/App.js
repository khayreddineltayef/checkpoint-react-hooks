import React, { useState } from "react";
import "./App.css";
import Filter from "./componenets/filter/Filter";
import MovieList from "./componenets/movieList/MovieList";
import { movieData } from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovie from "./componenets/addMovie/AddMovie";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import More from "./componenets/more/More";

function App() {
  const [movies, setMovies] = useState(movieData);
  const handlDelete = (movieID) => {
    setMovies(movies.filter((el) => el.id !== movieID));
  };
  const handleAdd = (newMovie) => {
    setMovies([...movies, newMovie]);
  };
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const [ratefil, setRatefil] = useState(1);
  const handleRating = (x) => {
    setRatefil(x);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Filter
          search={search}
          handleSearch={handleSearch}
          fil={ratefil}
          handleRating={handleRating}
        />

        <Routes>
          <Route
            path={"/"}
            element={
              <MovieList
                movies={movies.filter(
                  (el) =>
                    el.name
                      .trim()
                      .toLowerCase()
                      .includes(search.trim().toLowerCase()) &&
                    el.rating >= ratefil
                )}
                del={handlDelete}
              />
            }
          />

          <Route path={"/movie/:id"} element={<More movies={movies} />} />
        </Routes>
        <AddMovie add={handleAdd} />
      </BrowserRouter>
    </div>
  );
}

export default App;
