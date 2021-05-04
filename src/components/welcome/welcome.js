import React, { Component } from 'react';
import './welcome.css';
import logo from '../../assets/logo.svg'

class Welcome extends Component {
    render() {
        return (
             <div class="container">
                <div class="text-center mt-5">
                       <img src={logo} className="img_welcomelogo"/> 
                       <div class="mt-5">
                         <h1>Welcome to TVS Supply Chain Solutions</h1>
                       </div>       
                </div>
                
             </div>
            
        )
    }
}

export default Welcome;