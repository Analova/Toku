import React, { Component } from "react";
import ReactDOM from "react-dom";
import Post from "./Post";
import axios from "axios";
import ComposeSection from "./ComposeSection";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "Bob",
    };
  }

  componentWillMount() {
    const { match, location, history } = this.props.routeProps;
    const self = this;

    const getUser = async function () {
      const userProfile = await axios.get(`/api/user/${match.params.id}`);
      try {
        self.setState(
          {
            initialData: self.props.initialData,
            userProfile: userProfile.data[0],
          },
          () => {
            console.log(self.state);
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }

  render() {
    if (this.state.userProfile !== undefined) {
      const { first_name, last_name, profile_img } = this.state.userProfile;
      return (
        <div className="content-area profile-page">
          <div className="user-img" src="">
            <img src={`${profile_img}`} alt="" />
          </div>
          <div className="info">
            <h1>{`${first_name} ${last_name}`}</h1>
            <div className="follow-btn">Follow</div>
          </div>
        </div>
      );
    } else {
      return <div className="content-area profile-page">Loading</div>;
    }
  }
}
