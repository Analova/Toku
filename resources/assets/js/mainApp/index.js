import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Home from "./components/Home";
import Profile from "./components/Profile";
import LeftMenu from "./components/LeftMenu";
import Messenger from "./components/Messenger";
import SearchHeader from "./components/SearchHeader";
import Post from "./components/Post";
import LoadingComp from "./components/LoadingComp";
import ComposeSection from "./components/ComposeSection";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "Bob",
    };
  }

  async componentWillMount() {
    const self = this;
    const getInitialData = async function () {
      try {
        const initialData = await axios.get("/api/initialApp");

        self.setState(
          {
            initialData: initialData.data,
          },
          () => {
            console.log(self.state);
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    getInitialData();
  }

  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <Router>
        <div className="app-container home-page">
          <LoadingComp
            initialData={
              this.state.initialData === undefined
                ? "loading"
                : this.state.initialData
            }
          />
          <LeftMenu
            initialData={
              this.state.initialData === undefined
                ? "loading"
                : this.state.initialData
            }
          />
          <section id="content-container">
            <SearchHeader />
            <Route
              exact
              path="/"
              component={(props) => (
                <Home
                  routeProps={props}
                  initialData={
                    this.state.initialData == undefined
                      ? "loading"
                      : this.state.initialData
                  }
                />
              )}
            />
            <Route
              exact
              path="/profile/:id"
              component={(props) => (
                <Profile
                  routeProps={props}
                  initialData={
                    this.state.initialData == undefined
                      ? "loading"
                      : this.state.initialData
                  }
                />
              )}
            />
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
          </section>
          <Messenger />
        </div>
      </Router>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
