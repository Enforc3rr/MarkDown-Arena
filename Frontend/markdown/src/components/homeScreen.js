import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function HomeScreen() {
  return (
    <div
      className="container-md"
      style={{
        height: "100%",
      }}
    >
      <div className="row">
        <div className="col text-center">
          <h3 className="display-2">
            <u>Markdown Arena</u>
          </h3>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-8" style={{ border: "2px solid black" }}>
          <div className="d-flex flex-row justify-content-center align-items-center">
            <h4 className="display-4">
              <u>Most Liked Posts</u>
            </h4>
          </div>
          <div className="col-12 mb-3 mt-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Title Goes Here</h5>
                <p className="card-text">Description goes here</p>
                <a
                  href="https://github.com/enforc3rr"
                  alt="GitHub"
                  className="card-link"
                >
                  Click Here
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Title Goes Here</h5>
                <p className="card-text">Description goes here</p>
                <a
                  href="https://github.com/enforc3rr"
                  alt="GitHub"
                  className="card-link"
                >
                  Click Here
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Title Goes Here</h5>
                <p className="card-text">Description goes here</p>
                <a
                  href="https://github.com/enforc3rr"
                  alt="GitHub"
                  className="card-link"
                >
                  Click Here
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex flex-row justify-content-center align-items-center">
          <div className="row">
            <div className="col-12 text-center">
              <h5 className="display-5 mt-3 mb-5">
                <u>Most Recent Post</u>
              </h5>
            </div>
            <div className="col-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Title Goes Here</h5>
                  <p className="card-text">Description goes here</p>
                  <a
                    href="https://github.com/enforc3rr"
                    alt="GitHub"
                    className="card-link"
                  >
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
