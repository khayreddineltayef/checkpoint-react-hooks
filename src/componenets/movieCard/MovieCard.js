import React from "react";
import { Button, Card } from "react-bootstrap";

import StarRating from "../starRating/StarRating";
// import "./movieCard.css";

const MovieCard = ({ movie, del }) => {
  return (
    <div>
      <Card style={{ width: "18rem", height: "38rem", margin: "15px" }}>
        <Card.Img variant="top" src={movie.image} tyle={{ height: "380px" }} />

        <div style={{ height: "150 px" }}>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Title>{movie.date}</Card.Title>
          <Card.Text>
            <StarRating rating={movie.rating} />
          </Card.Text>
          <Button onClick={() => del(movie.id)} variant="danger">
            Delete
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default MovieCard;
