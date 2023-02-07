import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({ add }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      image: image,
      rating: rate,
      name: name,
      date: date,
    };
    if (name && date && image && rate) {
      add(newMovie);
      handleClose();
    }
  };
  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          Add Movie
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div style={{ margin: "15px" }}>
                <label style={{ width: "150px" }}>Title :</label>
                <input
                  type="text"
                  placeholder=""
                  style={{ width: "350px" }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div style={{ margin: "15px" }}>
                <label style={{ width: "150px" }}>Cover :</label>
                <input
                  type="text"
                  placeholder=""
                  style={{ width: "350px" }}
                  value={image}
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </div>
              <div style={{ margin: "15px" }}>
                <label style={{ width: "150px" }}>Release Date :</label>
                <input
                  type="text"
                  placeholder=""
                  style={{ width: "350px" }}
                  value={date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </div>
              <div style={{ margin: "15px" }}>
                <label style={{ width: "150px" }}>Rating</label>
                <input
                  type="text"
                  placeholder=""
                  style={{ width: "350px" }}
                  value={rate}
                  onChange={(e) => {
                    setRate(e.target.value);
                  }}
                />
              </div>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default AddMovie;
