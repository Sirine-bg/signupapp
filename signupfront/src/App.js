import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

import axios from 'axios';
class App extends Component {
  constructor() {
    super();

  
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
     email : "",
password: "",
    };
  }

    onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault()
  const registered = {
    name : this.state.name,
    email : this.state.email,
    password : this.state.password
  }
  axios.post('http://localhost:5000/api/clients', registered)
        .then(res => console.log(res))

        this.setState ({
          name: "",
         email : "",
    password: "",
        })

      }
  render() {
    return (
      <div className="App">
        <h3>Sign up App</h3>
           <form onSubmit= {this.onSubmit}>
           <div className="form-group">
         <label for="exampleInputEmail1">Full Name </label>
          <input type="text" className="form-control" onChange={this.onChangeName} value={this.state.name} placeholder="Enter your full name please"/>
        </div>
           <div className="form-group">
         <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChangeEmail} value={this.state.email}/>
           <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
         </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
           <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.onChangePassword} value={this.state.password}/>
         </div>
        <div class="form-check">
      <input type= 'submit'className='btn btn-danger' id='btn'/>
    
        </div>
        </form>
         </div>
        );
      }
      
      }
export default App;