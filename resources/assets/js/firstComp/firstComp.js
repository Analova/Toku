import React, { Component } from "react";
import ReactDOM from "react-dom";

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
          <section id="left-menu">
            <div className="account-dropdown">
              <div className="logo">
                <i className="fab fa-typo3" />
              </div>
              <div className="name">Merry Jane</div>
              <div className="icon">
                <i className="fas fa-chevron-down" />
              </div>
            </div>
            <div className="groups">
              <div className="group">
                <div className="title">Title</div>
                <ul>
                  <li>
                    <a href="/logout">Logout</a>
                  </li>
                  <li>link</li>
                  <li>link</li>
                </ul>
              </div>
            </div>
          </section>
          <section id="content-container">
            <div className="search-header">
              <div className="search-box">
                <input type="text" name defaultValue />
                <div className="icon-section">
                  <div className="noti">
                    <i className="fas fa-bell" />
                    <div className="noti-number active">3</div>
                  </div>
                  <div className="comment">
                    <i className="fas fa-comment" />
                    <div className="noti-number active">3</div>
                  </div>
                  <div className="user">
                    <i className="fas fa-user" />
                    <div className="noti-number active">3</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-area">
              {/* START */}
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
                  <div className="button send-btn">
                    <i className="fas fa-paper-plane" />
                  </div>
                </div>
              </section>
              <section id="updates">
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
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt ut labore et dolore
                          magna aliquyam erat, sed diam voluptua. At vero eos et
                          accusam et justo duo dolores et ea rebum. Stet clita
                          kasd gubergren, no sea takimata sanctus est Lorem
                          ipsum dolor sit amet.
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
                        <textarea
                          name
                          id
                          cols={80}
                          rows={10}
                          defaultValue={""}
                        />
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
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua. At vero eos et accusam et justo duo dolores
                          et ea rebum. Stet clita kasd gubergren, no sea
                          takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                          ipsum dolor sit amet, consetetur sadipscing elitr, sed
                          diam nonumy eirmod tempor invidunt ut labore et dolore
                          magna aliquyam erat, sed diam voluptua. At vero eos et
                          accusam et justo duo dolores et ea rebum. Stet clita
                          kasd gubergren, no sea takimata sanctus est Lorem
                          ipsum dolor sit amet.
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
                        <textarea
                          name
                          id
                          cols={80}
                          rows={10}
                          defaultValue={""}
                        />
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
              {/* END */}
            </div>
          </section>
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
        </div>
      </div>
    );
  }
}

const app = document.getElementById("app");

ReactDOM.render(<Layout />, app);
