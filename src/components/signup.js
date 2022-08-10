import React, { Component } from "react";
import "./chat.css";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { fname, lname, email, password } = this.state;
    console.log(fname, lname, email, password);
    fetch("http://localhost:3000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        email,
        lname,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      });
  }
  render() {
    return (
      <div className="cont">
<form onSubmit={this.handleSubmit}>
<div className="container"> 
<h3>REGISTRARSE</h3>

        <div>
          <input type="text" className="input" placeholder="First name" onChange={(e) => this.setState({ fname: e.target.value })}
          />
        </div>

        <div >
          <input type="text" className="input" placeholder="Last name" onChange={(e) => this.setState({ lname: e.target.value })}
          />
        </div>

        <div>
          <input className="input" type="email" placeholder="Enter email"onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div>
          <input className="input"
            type="password"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div>
          <button type="submit" className="buton"> Registrate
          </button>
        </div>
        <p>
           <a href="/sign-in">¿Ya tienes cuenta?</a>
        </p>
 </div>

        
      </form>


      </div>
      
    );
  }
}