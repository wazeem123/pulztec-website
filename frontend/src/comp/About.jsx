import React, { Component } from "react";
import logo from "../assets/photo/pulztecLogo.png";
import worldmap from "../assets/photo/worldmap.PNG";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
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
                <li class="nav-item active">
                  <a
                    class="nav-link"
                    href="/about"
                    style={{
                      color: "#008cff",
                    }}
                  >
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
          class=" justify-content-center p-4"
          style={{
            backgroundImage: `url(${worldmap})`,
            backgroundRepeat: "repeat-x ",
          }}
        >
          <div class=" container d-flex justify-content-center">
            <h1 style={{ color: "#f0f5f1", fontSize: 35 }}>
              About Pulz technologies
            </h1>
          </div>
        </div>

        <div
          class=" container justify-content-center p-4"
          style={{
            position: "relative",
            left: 100,
            top: 25,

            marginBottom: 25,
          }}
        >
          <div class="row">
            <div
              class="col-10"
              style={{
                fontSize: 19,
                fontFamily: "'Roboto Condensed', sans-serif",
              }}
            >
              <p style={{ textAlign: "center" }}>
                Pulztec is a technology innovation firm that specializes in
                application development and device engineering.
              </p>
              <p style={{ textAlign: "center" }}>
                We collaborate with businesses of all sizes to develop
                innovative, market-ready applications and devices that serve as
                cost effective solutions to industry specific problems and
                needs.
              </p>{" "}
              <p style={{ textAlign: "center" }}>
                Our creative team offers deep expertise in device engineering
                and software application development for a range of industries
                including consumer products, health and wellbeing, financial
                services, retail, communications and non-profit organizations.
              </p>
              <p style={{ textAlign: "center" }}>
                {" "}
                We believe in the power of people, their creativity and their
                ability to take action and bring about extraordinary changes.
              </p>
              <p style={{ textAlign: "center" }}>
                {" "}
                We initiate each project with in-depth conversations that
                explore your needs and goals, working in constant collaboration
                from concept through implementation.
              </p>{" "}
              <p style={{ textAlign: "center" }}>
                Pulztec was founded by Kumar Navaratnam.
              </p>
            </div>
          </div>
        </div>

        <div class=" p-5" style={{ backgroundColor: "#e8e3e3" }}>
          <div class="row justify-content-center ">
            <div
              class="col-10"
              style={{
                fontSize: 19,
                fontFamily: "'Roboto Condensed', sans-serif",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Pulztec offices</h2>
              <br />
              <h5 style={{ textAlign: "center" }}>
                Our administrative offices are located in New York, USA and our
                innovation Laboratory and Technology Center in Colombo, Sri
                Lanka
              </h5>
              <br />

              <div class="row ">
                <div class="col-6">
                  <h2 style={{ textAlign: "center", padding: 20 }}>New York</h2>
                  <h4 style={{ textAlign: "center" }}>Pulztec USA</h4>
                  <h5 style={{ textAlign: "center" }}>
                    300 East 40th Street,23B
                    <br /> New York,NY 10016
                    <br /> USA
                  </h5>
                </div>
                <div class="col-6">
                  <h2 style={{ textAlign: "center", padding: 20 }}>
                    Sri Lanka
                  </h2>
                  <h4 style={{ textAlign: "center" }}>Pulztec Sri Lanka</h4>
                  <h5 style={{ textAlign: "center" }}>
                    79/10 Kannangara Mawatha,
                    <br />
                    Colombo 7,
                    <br />
                    Sri Lanka
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class=" row justify-content-center p-5">
          <div
            class="col-10"
            style={{
              textAlign: "center",
              fontSize: 19,
              fontFamily: "'Roboto Condensed', sans-serif",
            }}
          >
            <h2>Contact Us</h2>
            <br />
            <p
              style={{
                textAlign: "center",
                fontSize: 19,
                fontFamily: "'Roboto Condensed', sans-serif",
              }}
            >
              Please contact our offices with your inquiries about new product
              development and to learn how our existing solutions can be
              integrated into your products and business processes.
              <br />
              <br /> General Inquiry Email: <a href="#">info@pulztec.com</a>
              <br />
              <br /> US Telephone: +1 646 330 5025
              <br /> Sri Lanka Telephone: +94 11 226 5100
            </p>
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
      </React.Fragment>
    );
  }
}
