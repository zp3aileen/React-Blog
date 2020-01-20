import React, { Component } from "react";
import "./style.css";
import "antd/dist/antd.css";
import { Menu } from "antd";

const categories = ["首页", "iOS", "Android", "Python", "React"];

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: categories[0]
    };
  }

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        className="menucontainer"
      >
        {categories.map((item, index) => (
          <Menu.Item key={item}>{item}</Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default Menus;
