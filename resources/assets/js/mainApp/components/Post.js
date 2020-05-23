import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  showLatestPost = () => {
    if (this.props.initialData.latestPosts != undefined) {
      return this.props.initialData.latestPosts.map((post) => {
        return (
          <div className="update-container">
            <div className="author-info">
              <a
                href="#"
                className="user-img"
                style={{
                  backgroundImage: `url('${post.profile_img}')`,
                }}
              />
              <div className="info">
                <a href="/profile">{`${post.first_name} ${post.last_name}`}</a>
                shared a{" "}
                <a href=""> {post.type === "text" ? "story" : "image"}</a>
                <a href="#" />
              </div>
            </div>
            <div className="media">
              <div
                //className="image"
                className={`${post.type === "text" ? "story" : "image"}`}
                style={{
                  background:
                    'url("http://www.lovethispic.com/uploaded_images/158130-Be-Your-Own-Inspiration.jpg")',
                }}
              />
            </div>
            <div className="padding-container">
              <div className="grey-container">
                <div className="update-info">
                  <h3>How to become a developer</h3>
                  <p>{post.content}</p>
                </div>
                <div className="update-stats">
                  <div className="icon-section">
                    <div className="like-circle">
                      <i className="fas fa-thumbs-up" />
                    </div>
                  </div>
                  <div className="other-users">
                    Sarah Brown and 23 others liked update
                  </div>
                  <div className="comments-stats">4 comments</div>
                </div>
                <div className="compose-comment">
                  <textarea name id cols={80} rows={10} defaultValue={""} />
                  <div className="buttons">
                    <div className="repost-btn">
                      <i className="fas fa-redo" />
                    </div>
                    <div className="like-btn">
                      <i className="fas fa-thumbs-up" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <section id="posts">
        {/* single update */}
        {this.showLatestPost()}
        {/* single update */}
      </section>
    );
  }
}
