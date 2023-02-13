import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import StarRating from "../starRating/StarRating";
// import "./movieCard.css";

const MovieCard = ({ movie, del }) => {
  return (
    <div>
      <Card style={{ width: "18rem", height: "38rem", margin: "20px" }}>
        <Card.Img
          variant="top"
          src={movie.image}
          style={{ width: "100%", height: "380px" }}
        />

        <div style={{ height: "150 px" }}>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Title>{movie.date}</Card.Title>
          <Card.Text>
            <StarRating rating={movie.rating} />
          </Card.Text>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button onClick={() => del(movie.id)} variant="danger">
              Delete
            </Button>
            <Link to={`/movie/${movie.id}`}>
              <Button style={{ marginTop: "15px" }} variant="danger">
                more details
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
