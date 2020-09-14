import React, { Component } from "react";
import { style } from "./style";
import logo from "../assets/photo/pulztecLogo.png";
import worldmap from "../assets/photo/worldmap.PNG";
import banking1 from "../assets/photo/banking1.jpg";
import banking2 from "../assets/photo/banking2.jpg";
import banking3 from "../assets/photo/banking3.jpg";
import banking4 from "../assets/photo/banking4.jpg";
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
                    <a
                      class="dropdown-item"
                      href="/Bank"
                      style={{
                        color: "#008cff",
                      }}
                    >
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
            <h1 style={{ color: "#f0f5f1", fontSize: 35 }}>
              Avatar Guided Banking
            </h1>
          </div>
        </div>

        <div class="container p-4">
          <h1 style={{ fontSize: 35 }}>
            Enable your “Smart Branch” with A.I. driven, conversation enabled,
            photorealistic digital tellers.
          </h1>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-6 p-3">
              <h4 style={style.h4}>
                Automated, self-service banking, with a human touch
              </h4>{" "}
              <p style={style.p}>
                Avatar Guided Banking from Pulz Technologies, delivers an
                engaging and conversational automated banking experience that
                customers will find ... almost human.
              </p>{" "}
              <p style={style.p}>
                Banking transactions are performed through interaction with an
                artificial intelligence supported, speech and voice driven,
                photo-realistic digital teller, who can engage in a very human
                way using casual conversation in real-time
              </p>
            </div>
            <div class="col-6 ">
              <img src={banking1} />
            </div>
          </div>

          <div class="row">
            <div class="col-6 ">
              <img style={{ width: 570 }} src={banking2} />
            </div>
            <div class="col-6 p-3">
              <h4 style={style.h4}>All you need to do is Tap-to-Talk</h4>{" "}
              <p style={style.p}>
                Powered by voice and conversational inteligence, Avatar Guided
                Banking makes even the more complex banking transactions quick
                and easy ... all you need to do is tap a button and talk.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-6 p-3">
              <h4 style={style.h4}>
                Guide your customer through basic and complex transactions
              </h4>{" "}
              <p style={style.p}>
                With the direction of the digital teller, guide your customer
                through banking tasks and information inquiries. Be it a simple
                ATM transaction or a more complex teller assisted inquiry,
                Avatar Guided Banking enables you to take your customer through
                a step-by-step, worry-free banking experience
              </p>
            </div>
            <div class="col-6 ">
              <img src={banking3} />
            </div>
          </div>

          <div class="row">
            <div class="col-6 ">
              <img style={{ width: 570 }} src={banking4} />
            </div>
            <div class="col-6 p-3">
              <h4 style={style.h4}>
                Interaction that layers on top of existing banking software
              </h4>
              <p style={style.p}>
                {" "}
                The Avatar Guided Banking inteface is designed to simply layer
                on top of your existing banking software, security and ATM
                switch.
              </p>
              <p style={style.p}>
                {" "}
                This technology is designed to integrate with your technology
                partners’ products, services and existing harware.
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
              Now Live at Sampath Bank, Sri Lanka
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
            >
              Pulztec's First Avatar Guided Robot Banking ATM Launched by
              Sampath Bank in Sri Lanka - Oct 2017
            </h4>
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
