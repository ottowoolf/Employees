import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/searchBox/searchBox.component";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);
  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredUsers = users
    ? users.filter((user) =>
        user.name.toLowerCase().includes(searchField.toLowerCase())
      )
    : null;

  return !users.length ? (
    <h2>Loading...</h2>
  ) : (
    <div className="App">
      <h1>Employee List</h1>
      <SearchBox placeholder="search" handleChange={handleChange} />

      <CardList users={filteredUsers}></CardList>
    </div>
  );
};

export default App;
