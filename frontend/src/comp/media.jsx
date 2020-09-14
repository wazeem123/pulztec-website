import React, { Component } from "react";

import logo from "../assets/photo/pulztecLogo.png";
import worldmap from "../assets/photo/worldmap.PNG";

export default class Banking extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light bg-white ">
            <a class="navbar-brand" href="/">
              <img style={{ width: 150, height: 50 }} src={logo} />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
              <ul
                class="navbar-nav"
                style={{ position: "relative", left: 570 }}
              >
                <li class="nav-item ">
                  <a class="nav-link" href="/">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    solutions
                  </a>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a
                      class="dropdown-item"
                      href="https://www.aismartform.com/"
                    >
                      Aismartform
                    </a>
                    <a class="dropdown-item" href="/Bank">
                      Avatar banking
                    </a>
                    <a class="dropdown-item" href="/tele-avatar">
                      Tele avatar
                    </a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">
                    About Us
                  </a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link" href="/Careers">
                    Careers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/Contacts">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div
          class="p-4"
          style={{
            backgroundImage: `url(${worldmap})`,
            backgroundRepeat: "repeat-x ",
          }}
        >
          <div class=" d-flex justify-content-center">
            <h1 style={{ color: "#f0f5f1", fontSize: 35 }}>Media</h1>
          </div>
        </div>

        <div class="p-4" style={{ backgroundColor: "#e8e3e3" }}>
          <div class="d-flex justify-content-center">
            <h4
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
              }}
            >
              First Public Demo of Pulztec's Avatar Guided Robot Banking
              Technology at Eastlink ATM Expo in Sri Lanka - Jan 2017
            </h4>
          </div>
          <iframe
            src="https://player.vimeo.com/video/242293313?title=0&byline=0&portrait=0"
            width="100%"
            height="366"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
          <div class="d-flex justify-content-center">
            <h4
              style={{
                color: "#0a5cae",
                fontFamily: "'Roboto Condensed', sans-serif",
              }}
            ></h4>
          </div>
        </div>

        <div class="p-4" style={{ backgroundColor: "#e8e3e3" }}>
          <div class="d-flex justify-content-center">
            <h4
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
              }}
            >
              Pulztec’s First Avatar Guided Robot Banking ATM Launched by
              Sampath Bank in Sri Lanka - Oct 2017.
            </h4>
          </div>
          <iframe
            id="video2"
            src="https://player.vimeo.com/video/242293313?title=0&byline=0&portrait=0"
            width="100%"
            height="366"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
          <div class="d-flex justify-content-center">
            <h4
              style={{
                color: "#0a5cae",
                fontFamily: "'Roboto Condensed', sans-serif",
              }}
            ></h4>
          </div>
        </div>

        <footer class="page-footer ">
          <div
            class=" justify-content-center p-5"
            style={{
              backgroundImage: `url(${worldmap})`,
              backgroundRepeat: "repeat-x ",
            }}
          >
            <div class=" container d-flex justify-content-center">
              <h1 style={{ color: "#f0f5f1" }}>
                SEE PULZTEC SOLUTIONS IN ACTION
              </h1>
            </div>
            <div class=" container d-flex justify-content-center">
              <a
                href="/media"
                class="btn btn-success"
                role="button"
                style={{ borderColor: "white", borderWidth: "4px" }}
              >
                View Demos
              </a>
            </div>
          </div>

          <div
            class="container  p-5"
            style={{ position: "relative", right: 30 }}
          >
            <a href="/" style={{ color: "black" }}>
              Home |{" "}
            </a>
            <a href="/Bank" style={{ color: "black" }}>
              {" "}
              Avatar banking |{" "}
            </a>
            <a href="/tele-avatar" style={{ color: "black" }}>
              {" "}
              Tele avatar |{" "}
            </a>
            <a href="/about" style={{ color: "black" }}>
              {" "}
              About |{" "}
            </a>
            <a href="/Careers" style={{ color: "black" }}>
              {" "}
              Careers |{" "}
            </a>
            <a href="/Contacts" style={{ color: "black" }}>
              {" "}
              Contact
            </a>
            <br />
            <p>© 2020 Pulztec Solutions.</p>
          </div>
        </footer>
      </div>
    );
  }
}
