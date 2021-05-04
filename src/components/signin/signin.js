import React, { Component } from 'react';
import './signin.css';
import logo from '../../assets/logo.svg'
import loginpage from '../../assets/loginpage.svg'
import shape from '../../assets/Shape.svg'
import password from '../../assets/Password.svg'


class signin extends Component {
    constructor() {
        super();
        this.state = {
          input: {},
          errors: {}
        };
         
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }
      handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }

      handleSubmit(event) {
        event.preventDefault();
      
        if(this.validate()){
            console.log(this.state);
      
            let input = {};
            input["username"] = "";
            input["password"] = "";
            this.setState({input:input});
            
            this.props.history.push('/welcome');
    
        }
      }
      
      validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
     
        if (!input["username"]) {
          isValid = false;
          errors["username"] = "Please enter your username.";
        }
    
        if (typeof input["username"] !== "undefined") {
          const re = /^\S*$/;
          if(input["username"].length < 6 || !re.test(input["username"])){
              isValid = false;
              errors["username"] = "Please enter valid username.";
          }
        }

        if (!input["password"]) {
          isValid = false;
          errors["password"] = "Please enter your password.";
        }

        if (typeof input["password"] !== "undefined") {
          if(input["password"].length < 6){
              isValid = false;
              errors["password"] = "Please add at least 6 charachter.";
          }
        }
    
        if (typeof input["password"] !== "undefined" && typeof input["confirm_password"] !== "undefined") {
            
          if (input["password"] != input["confirm_password"]) {
            isValid = false;
            errors["password"] = "Passwords don't match.";
          }
        }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }

    render() {
        return (
              <div className="container">
                  <div className="col-lg-12 mb-4">
                    <img src={logo} className="img_logo" /> 
                  </div>
                  <div class= "row">
                    <div class="col-md-6 p-0 ">       
                      <img src={loginpage} className="img_loginpage img-fluid" />
                    </div>
                    <div class="col-md-6 px-0">
                      <div className="signin-column ">
                        <form onSubmit={this.handleSubmit}>
                          <div className="content-form">
                            <p className="signin-content ">Welcome to <br />TVS Supply Chain Solutions</p>
                            <p className="signin-title">Login to continue</p> 
                          </div> 
                          <div class="signin-input-wrapper">
                            <img src={shape} className="input-icon" />
                            <input type="text" name="username" onChange={this.handleChange} value={this.state.input.userName} className="signin-input" placeholder="Username" id="username"  />
                          </div>
                          <div className="text-danger">{this.state.errors.username}</div>
                            <div class="signin-input-wrapper">
                              <img src={password} className="input-icon" />
                              <input type="password" name="password" onChange={this.handleChange} value={this.state.input.password} className="signin-input" placeholder="Password" id="password"  />
                            </div>  
                            <div className="text-danger">{this.state.errors.password}</div> 
                          <div>
                            <p className="forgot-password">Forgot Password?</p> 
                          </div>
                          <div class="signin-button-wrapper">
                            <button type="submit" value="submit" className="signin-button" >
							                Login
						                </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>                   
                  <div class="footer mt-5">
                    <p className="copy-right">Copyright.TVS Supply Chain Solutions. All rights reserved</p>
                  </div>
                </div>  
              );
            }
          }
export default signin;