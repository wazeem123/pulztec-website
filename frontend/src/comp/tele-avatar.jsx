import React, { Component } from "react";
import { style } from "./style";
import logo from "../assets/photo/pulztecLogo.png";
import worldmap from "../assets/photo/worldmap.PNG";
import avatar1 from "../assets/photo/avatar1.jpg";
import avatar2 from "../assets/photo/avatar2.jpg";
import avatar3 from "../assets/photo/avatar3.jpg";

export default class Teleavatar extends Component {
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
                    <a
                      class="dropdown-item"
                      href="/tele-avatar"
                      style={{
                        color: "#008cff",
                      }}
                    >
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
            <h1 style={{ color: "#f0f5f1", fontSize: 35 }}>
              TeleAvatar Technology
            </h1>
          </div>
        </div>

        <div class=" container p-2">
          <div style={{ textAlign: "center" }}>
            <p style={style.h4}>Making the pixel come alive</p>{" "}
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={style.p}>
              Pulztec’s patented TeleAvatar technology uses 20 mins of video
              footage, of any person, and transforms them into a photorealistic,
              A.I. driven, conversational digital being.
            </p>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-6 ">
              <img style={{ width: 570 }} src={avatar1} />
            </div>
            <div class="col-6">
              <p style={style.h4}>Conversational & Intelligent</p>
              <p style={style.p}>
                {" "}
                Driven by an Artificial Intelligence engine, the TeleAvatar, is
                capable of understanding and responding to conversational speech
                using physical gestures to accentuate context.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <p style={style.h4}>Photorealistic</p>{" "}
              <p style={style.p}>
                Most digital avatars look like animated cartoon versions of
                people. Not the TeleAvatar.
              </p>
              <p style={style.p}>
                {" "}
                TeleAvatar technology uses 20 mins of video footage of a live
                person, and transforms it into a talking, gesturing, intelligent
                photorealistic digital version of themselves.
              </p>
            </div>
            <div class="col-6 ">
              <img src={avatar2} />
            </div>
          </div>

          <div class="row">
            <div class="col-6 ">
              <img style={{ width: 570 }} src={avatar3} />
            </div>
            <div class="col-6">
              <p style={style.h4}>Application Friendly</p>{" "}
              <p style={style.p}>
                A TeleAvatar can easily work in conjunction with other
                applications, software and hardware.
              </p>{" "}
              <p style={style.p}>
                He or she can be powered by most, if not all, A.I. engines in
                addition to speech, voice and virtual assistant software, and in
                turn integrate with other applications.
              </p>
            </div>
          </div>
        </div>

        <div class="p-4" style={{ backgroundColor: "#e8e3e3" }}>
          <div class="d-flex justify-content-center">
            <h4
              style={{
                color: "#0a5cae",
                fontFamily: "'Roboto Condensed', sans-serif",
              }}
            >
              Deliver an engaging humanised digital user experience
            </h4>
          </div>
          <iframe
            src="https://player.vimeo.com/video/234517327?title=0&byline=0&portrait=0"
            width="100%"
            height="366"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          ></iframe>
        </div>
        <div></div>

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
