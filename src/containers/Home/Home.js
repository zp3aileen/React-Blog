import React, { Component } from "react";
import style from "./style.css";
import Header from "../../components/Header/Header"
import Menus from "../../components/Menus/Menus"

class Home extends Component {
    
    render() { 
        return ( 
            <div className="container">
                <Header />
                <div className="nva">
                    <Menus />
                </div>
                <div className="main">
                    文章列表
                </div>
            </div>
         );
    }
}
 
export default Home;