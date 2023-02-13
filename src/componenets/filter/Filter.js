import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRating from "../starRating/StarRating";

const Filter = ({ handleSearch, search, fil, handleRating }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav
            className="me-auto"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to={"/"}>
              <Nav.Link href="#home">K.movies</Nav.Link>
            </Link>
            <div>
              <input type="text" value={search} onChange={handleSearch} />
              <h1>
                <StarRating rating={fil} handleRating={handleRating} />
              </h1>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Filter;
