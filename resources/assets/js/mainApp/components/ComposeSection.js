import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

export default class ComposeSection extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  submitForm = async () => {
    try {
      const post = await axios.post("/api/post", {
        content: "Hey I just went to starbucks",
        user_id: 1,
        type: "text",
      });
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <section className="compose-section">
        <textarea name id cols={80} rows={10} defaultValue={""} />
        <div className="user-img" />
        <div className="buttons">
          <div className="button photo-btn">
            <i className="fas fa-camera-retro" />
          </div>
          <div className="button video-btn">
            <i className="fas fa-video" />
          </div>
          <div className="button send-btn" onClick={this.submitForm}>
            <i className="fas fa-paper-plane" />
          </div>
        </div>
      </section>
    );
  }
}
