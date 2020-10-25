import React, { Component } from 'react';
import axios from 'axios';
import './Login.css'
class Login extends Component{
  state = {
    email:'',
    password:'',
    errors:{
      email: '',
      password: ''
    }
  }

  handleValidation = (field)=> {
    var errors = this.state.errors
    
    switch(field){
      case('email'):
        let emailField = this.state.email;
        const validEmailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        errors.email = validEmailRegex.test(emailField) ? '': "Email invalid"
        debugger
        break;
      case('password'):
        let passwordField = this.state.password;
        errors.password = passwordField.length < 5
          ? 'Password must be 6 characters long!'
          : ''; 
        break;  
      default:
        break  
    }
    this.setState({errors})
  
  
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value =  target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  isValidParams = () => {
    this.handleValidation("email")
    this.handleValidation("password")
    debugger
    let errors = this.state.errors
    for (var key in errors) {
      if (errors[key].length > 0) {
          return false;
      }
      return true;
    }

    return true
  }

  submitHandler = (event) => {
    event.preventDefault();
  

    if(this.isValidParams()){
      let data = {
        email: this.state.email,
        password: this.state.password
      }
      
      
      axios.post("/authenticate", data)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.auth_token)
          this.props.history.push("/organisations")
        }).catch( err => {
          console.log(err)
        })
    }
    else{
     
    }
  }

  render(){
    return(
      
      <div className = "login">
        <div className = "login__container">
          <img 
          className = "login__logo"
          src= "https://www.bicsglobal.com/wp-content/themes/bics5.1/img/bics_v2_logo.png"
          alt="Paris"/>
          
          <h1>SignUp</h1>
          <form onSubmit = { this.submitHandler }>
            <h5>Email:</h5>
            <input
              name="email"
              type="text"
              placeholder = "Email address"
              onChange = {this.handleInputChange}/>  
            <span className = "login__container__error">{this.state.errors.email}</span>  
            <h5>Password:</h5> 
            <input
              name="password"
              placeholder= "Enter password"
              type="password"
              onChange = {this.handleInputChange}
              />
            <span className = "login__container__error">{this.state.errors.password}</span>  
  

            <button className = "login__signInButton"> Sign In </button>  
            <p> Forgot password</p> 
          </form> 
        </div>  

      </div>

       
    );
  }
}
export default Login