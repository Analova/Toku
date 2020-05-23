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
        content: this.state.post_content,
        user_id: this.props.initialData.userInfo.id,
        type: "text",
      });
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    return (
      <section className="compose-section">
        <textarea
          name="post_content"
          id
          cols={80}
          rows={10}
          defaultValue={""}
          value={this.state.post_content}
          onChange={this.handleChange}
        />
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
