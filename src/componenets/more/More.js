import React from "react";
import { useParams } from "react-router";

const More = ({ movies }) => {
  const parms = useParams();
  const movieID = parms.id;
  const mmm = movies.find((el) => el.id === Number(movieID));
  return (
    <div>
      <h1>Description:</h1>
      <p>{mmm.description}</p>
      <iframe
        width="956"
        height="538"
        title="trailer"
        src={mmm.trailer}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default More;
