import React from "react";

const Login = ({ setIsLoggedIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input type="text" defaultValue="Name" />
      </div>

      <br />

      <div>
        <label>Password: </label>
        <input type="password" />
      </div>

      <br />

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;