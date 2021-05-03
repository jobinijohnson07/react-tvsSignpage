import React, { Component } from 'react';
import './signin.css';
import logo from '../assets/logo.svg'
import loginpage from '../assets/loginpage.svg'
import shape from '../assets/Shape.svg'
import password from '../assets/Password.svg'


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
          
                <div className="content-login row">
                    <div className="col-lg-12 mb-4">
                       <img src={logo} className="img_logo" /> 
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 d-flex p-0">
                        <div class="col-lg-6 p-0 ">
                            <p className="content pl-4 mb-0"> Welcome to <br /> TVS Supply Chain Solutions </p>
                            <img src={loginpage} className="img_loginpage img-fluid" />
                        </div>
                       <div class="col-lg-6 p-0 pr-4 h-100">
                           <div className="second-col h-100">
                           <form onSubmit={this.handleSubmit}>
                              <div className="content-form">
                                <p className="required">Sign in</p> 
                              </div> 

                              <div class="signin-input-wrapper">
                                <img src={shape} className="input-icon" />
                                <input type="text" name="username" onChange={this.handleChange} value={this.state.input.userName} className="signin-input" id="username"  />
                              </div>

                              <div className="text-danger control">{this.state.errors.username}</div>

                              <div class="signin-input-wrapper">
                                <img src={password} className="input-icon" />
                                <input type="password" name="password" onChange={this.handleChange} value={this.state.input.password} className="signin-input" id="password"  />
                              </div>  

                              <div className="text-danger change">{this.state.errors.password}</div> 

                              <div>
                                <p className="forgot-password">Forgot Password?</p> 
                              </div>

                             <div class="form-group">
                               <button type="submit" value="submit" className="signin-button" >
							                  Login
						                    </button>
                             </div>

                             </form>
                           </div>
                        </div>
                    </div>
                </div>    
             );
           }
       }
export default signin;