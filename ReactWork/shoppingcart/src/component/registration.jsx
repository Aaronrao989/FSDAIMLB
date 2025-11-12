import React from 'react';

function Registration({ regData }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function getData(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      password
    };
    regData(data);
    // console.log(data);
  }

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={getData}>
        <div className="form-group">
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            id="nameInput"
          />
        </div>

        <div className="form-group">
          <label htmlFor="emailInput">Email address</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="emailInput"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="passwordInput"
          />
        </div>

        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
