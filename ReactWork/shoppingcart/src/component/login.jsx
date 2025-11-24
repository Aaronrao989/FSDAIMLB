import React from "react";
import { useNavigate } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Login({ loginData }) {   // ✅ destructure props
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate(); 

  function verification(e) {
    e.preventDefault();
    if (loginData.email === email && loginData.password === password) {
      navigate('/dashboard');
    } else {
      alert("Password could not match");
    }
  }

  return (
    <div>
      <h2 style={{ background: 'brown', color: 'white' }}>Login Page</h2>

      <form onSubmit={verification}>   {/* ✅ handle submit at form level */}
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input 
            type="email" 
            onChange={(e) => setEmail(e.target.value)} 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input 
            type="password" 
            onChange={(e) => setPassword(e.target.value)} 
            className="form-control" 
            id="exampleInputPassword1"
          />
        </div>

        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Login;
