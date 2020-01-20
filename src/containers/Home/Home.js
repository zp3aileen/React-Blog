import React, { Component } from "react";
import "./style.css";
import Header from "../../components/Header/Header";
import Menus from "../../components/Menus/Menus";
import ArticleList from "../../components/ArticleList/ArticleList";
import { Redirect } from "react-router-dom";

class Home extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div className="h_container">
        <Header />
        <div className="nva">
          <Menus history={this.props.history} />
        </div>
        <div className="main">
          <ArticleList history={this.props.history} tags={tags} />
        </div>
      </div>
    );
  }
}

export default Home;
