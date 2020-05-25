import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Post from "./Post";
import ComposeSection from "./ComposeSection";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Home extends Component {
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

  clickedBtn = () => {
    console.log("swag");
  };

  render() {
    return (
      <div className="content-area">
        <ComposeSection
          initialData={
            this.state.initialData === undefined
              ? "loading"
              : this.state.initialData
          }
        />
        <Post
          initialData={
            this.state.initialData === undefined
              ? "loading"
              : this.state.initialData
          }
        />
      </div>
    );
  }
}
