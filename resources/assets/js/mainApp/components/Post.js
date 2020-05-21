import React, { Component } from "react";
import ReactDOM from "react-dom";


export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

 

  render() {
    return (
      <section id="posts">
        <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img" />
            <div className="info">
              <a href="#">James Doe</a>
              shared a story
              <a href="#" />
            </div>
          </div>
          <div className="media">
            <div
              className="image"
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
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
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
        <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img" />
            <div className="info">
              <a href="#">James Doe</a>
              shared a story
              <a href="#" />
            </div>
          </div>
          <div className="media">
            <div
              className="image"
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
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
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
      </section>
    );
  }
}
