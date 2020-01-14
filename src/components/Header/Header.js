import React, { Component } from 'react';
import './style.css'
import logo from './setting.PNG'

class Header extends Component {
    
    render() { 
        return ( 
            <div className="header">
                <span className="log">
                    <img src={logo} />
                </span>
                <h1>ZP3`s Blog</h1>
                <p>Time is given to us, we earn it by giving it.</p>
            </div>
         );
    }
}
 
export default Header;
