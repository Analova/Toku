import React, { Component } from "react";
import ReactDOM from "react-dom";
import Post from "./Post";
import ComposeSection from "./ComposeSection";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "Bob",
    };
  }

  async componentWillMount() {
    this.setState(
      {
        initialData: this.props.initialData,
      },
      () => {
        console.log(this.props);
      }
    );
  }

  render() {
    return (
      <div className="content-area profile-page">
        <div className="user-img" src="">
          <img src="" alt="" />
        </div>
        <div className="info">
          <h1>Jane Doe</h1>
          <div className="follow-btn">Follow</div>
        </div>
      </div>
    );
  }
}
