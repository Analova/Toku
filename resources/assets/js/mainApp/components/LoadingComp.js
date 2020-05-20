import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

export default class LoadingComp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section id="loading-comp">
        <div className="loading-icon">
          <div className="loadingio-spinner-dual-ring-urzdhp50lym">
            <div className="ldio-50xsozkchu6">
              <div></div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="loading-text">Loading</div>
      </section>
    );
  }
}
