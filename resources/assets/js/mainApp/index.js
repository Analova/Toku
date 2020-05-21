import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import LeftMenu from "./components/LeftMenu";
import Messenger from "./components/Messenger";
import SearchHeader from "./components/SearchHeader";
import Post from "./components/Post";
import LoadingComp from "./components/LoadingComp";
import ComposeSection from "./components/ComposeSection";

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
          <div className="content-area">
            <ComposeSection />
            <Post />
          </div>
        </section>
        <Messenger />
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
