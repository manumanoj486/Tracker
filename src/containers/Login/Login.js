import React, { Component } from 'react';
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
    var errors_obj = {...this.state.errors}
    
    switch(field){
      case('email'):
        let emailField = this.state.email;
        const validEmailRegex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        errors_obj.email = validEmailRegex.test(emailField) ? '': "Email invalid"
        debugger
        break;
      case('password'):
        let passwordField = this.state.password;
        errors_obj.password = passwordField.length < 8
          ? 'Password must be 8 characters long!'
          : ''; 
        break;  
      default:
        break  
    }
    this.setState({errors: {...errors_obj} })
  
  
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  submitHandler = (event) => {
    event.preventDefault();
    if(this.handleValidation("email") && this.handleValidation("password")){
      console.log("valid  email")
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
            <spam class = "login__container__error">{this.state.errors.email}</spam>  
            <h5>Password:</h5> 
            <input
              name="password"
              placeholder= "Enter password"
              type="password"/>
            <spam class = "login__container__error">{this.state.errors.password}</spam>  
  

            <button className = "login__signInButton"> Sign In </button>  
            <p> Forgot password</p> 
          </form> 
        </div>  

      </div>

       
    );
  }
}
export default Login