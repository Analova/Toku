import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class Messenger extends Component {
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
      <section id="messenger">
        <div className="messenger-header">
          <div className="messenger-icon">
            <i className="fas fa-comments" />
          </div>
          <div className="title">Messenger</div>
          <div className="dots-icon">
            <i className="fas fa-ellipsis-v" />
          </div>
        </div>
        <div className="users">
          <div className="users-container">
            <div className="user active">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  width: "30px",
                  height: "30px",
                  background:
                    'url("https://randomuser.me/api/portraits/men/78.jpg")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                }}
              />
              <div className="username">James Bond</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <input type="text" placeholder="search" />
        </div>
      </section>
    );
  }
}
