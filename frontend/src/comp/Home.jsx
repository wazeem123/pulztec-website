import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/photo/pulztecLogo.png";
import Aibanking from "../assets/photo/Aibanking.jpg";
import Aismartform from "../assets/photo/AiSmartForm.jpg";
import Aismartformlink from "../assets/photo/AiSmartForm-link.jpg";
import mainmenulink from "../assets/photo/mainmenu-link.jpg";
import mainmenu from "../assets/photo/mainmenu.jpg";
import medialink from "../assets/photo/media-link.jpg";
import newslink from "../assets/photo/news-link.jpg";
import avatar from "../assets/photo/avatar.jpg";
import worldmap from "../assets/photo/worldmap.PNG";

export default class Home extends Component {
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
                <li class="nav-item active">
                  <a
                    class="nav-link"
                    href="/"
                    style={{
                      color: "#008cff",
                    }}
                  >
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

          <Link to="/media#video2">
            <img src={Aibanking} />
          </Link>

          <div class="row">
            <div class="col-6">
              <img src={Aismartform} />
            </div>
            <div class="col-6 ">
              <a href="https://www.aismartform.com/">
                <img src={Aismartformlink} />
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-6 ">
              <a href="/Bank">
                <img src={mainmenulink} />
              </a>
            </div>
            <div class="col-6">
              <img src={mainmenu} />
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <img src={avatar} />
            </div>
            <div class="col-6 ">
              <a href="/tele-avatar">
                <img src={Aismartformlink} />
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <a href="/media">
                <img src={medialink} style={{ width: "110%", height: "89%" }} />
              </a>
            </div>
            <div class="col-6 ">
              <a href="/news">
                <img src={newslink} style={{ width: "110%", height: "89%" }} />
              </a>
            </div>
          </div>

          <div class="row">
            <div class="col-6">
              <h6>Locations:</h6>
              <p>
                79/10 C W W Kannangara Mawatha, Colombo 00700, Sri Lanka
                <br />
                Phone: +94 11 266 5100 300
              </p>

              <p>
                East 40th Street, Suite 23B, New York, NY 10016, USA.
                <br />
                Phone:+1646 330 5025
              </p>

              <p>
                <h6>Connect:</h6>
                <span>
                  <a href="https://mail.google.com/" target="_blank">
                    info@pulztec.com
                  </a>
                </span>
              </p>
            </div>
            <div class="col-6 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8228347318545!2d79.86326157372976!3d6.911775595790063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259705cbb4b9d%3A0xa73cc09ae7d5147c!2sPulz+Technologies!5e0!3m2!1sen!2slk!4v1509611066818"
                style={{ height: 300, width: 594, marginTop: -33 }}
              ></iframe>
            </div>
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
            <div class="  d-flex justify-content-center">
              <h1 style={{ color: "#f0f5f1" }}>
                SEE PULZTEC SOLUTIONS IN ACTION
              </h1>
            </div>
            <div class="  d-flex justify-content-center">
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
