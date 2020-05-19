import React, { Component } from "react";
import ReactDOM from "react-dom";
import LeftMenu from "./components/LeftMenu";
import Messenger from "./components/Messenger";
import SearchHeader from "./components/SearchHeader";
import Post from "./components/Post";
import ComposeSection from "./components/ComposeSection";

class Layout extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <div className="home">
        <div className="app-container home-page">
          {/* left menu */}
          <LeftMenu />
          <section id="content-container">
            <SearchHeader />
            <div className="content-area">
              {/* START */}
              <ComposeSection />
              <Post />
              {/* END */}
            </div>
          </section>

          <Messenger />
        </div>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
