import "./style.css";
import { Link } from "react-router-dom";

import React, { Component } from "react";
import Icon from "antd/lib/icon";
export default class ArticleListCell extends Component {
  render() {
    return (
      <div
        className="ac_container"
        onClick={() => {
          this.props.history.push(`/detail/${this.props.data._id}`, {
            id: this.props.data_id
          });
          // props.getArticleDetail(props.data_id)
        }}
      >
        <div className="content">
          <div className="title">
            <h2>
              {this.props.data.title} + {this.props.tags}
            </h2>
          </div>
          <p className="summary">感觉太麻烦了，就算了</p>
          <div>
            <div className="info">
              <div className="tag">
                <Icon className="icon" type="clock-circle" alt="发表日期" />
                <div> {this.props.data.time}</div>
              </div>
              <div className="tag">
                <Icon className="icon" type="read" alt="阅读" />
                <div> {this.props.data.viewCount}</div>
              </div>
              <div className="tag">
                <Icon className="icon" type="form" alt="评论" />
                <div> {this.props.data.commentCount}</div>
              </div>
            </div>
            <span className="lastSpan">Detail</span>
          </div>
        </div>
      </div>
    );
  }
}
