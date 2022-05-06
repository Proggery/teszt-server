import React, { useState } from "react";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:5555/users",
      data: user,
    }).then(res=> setUser({username: res.data}));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="user" onChange={handleChange} />
      <button type="submit">gomb</button>
      <div>{user && user.username}</div>
    </form>
  );
};

export default Home;
