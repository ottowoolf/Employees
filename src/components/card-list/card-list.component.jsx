import React from "react";
import "./card-list.style.css";
import Card from "../card/card.component.jsx";

const CardList = ({ users }) => (
  <div className='card-list'>
    {users.map((user) => (
      <Card key={user.id} user={user} />
    ))}
  </div>
);
export default CardList;
