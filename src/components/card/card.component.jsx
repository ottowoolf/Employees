import React from "react";
import "./card.style.css";

const Card = (props) => {
  const name = props.user.name;
  const email = props.user.email;
  const city = props.user.address.city;
  const website = props.user.website;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.user.id}?set=set5&size=180x180`}
        alt="user"
      />
      <h2>{name}</h2>
      <div className="info">
        <strong>Email:</strong> {email}
      </div>
      <div className="info">
        <strong>Website: </strong>
        <a href="/">{website}</a>
      </div>
      <p>
        {" "}
        <strong>City: </strong> {city}
      </p>
    </div>
  );
};
export default Card;
