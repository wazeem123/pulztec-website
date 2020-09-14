import React, { Component } from "react";
import axios from "axios";

import logo from "../assets/photo/pulztecLogo.png";
import worldmap from "../assets/photo/worldmap.PNG";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    if (e.target.id === "firstname") {
      this.setState({
        firstname: e.target.value,
      });
    }
    if (e.target.id === "lastname") {
      this.setState({
        lastname: e.target.value,
      });
    }
    if (e.target.id === "email") {
      this.setState({
        email: e.target.value,
      });
    }
    if (e.target.id === "phone") {
      this.setState({
        phone: e.target.value,
      });
    } else {
      this.setState({
        message: e.target.value,
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const dataToSubmit = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      message: this.state.message,
      email: this.state.email,
    };

    axios.post("http://localhost:5000/api/sendMail", dataToSubmit);
    alert("mail sent successfully!");
  }

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
                <li class="nav-item active">
                  <a
                    class="nav-link"
                    href="/Contacts"
                    style={{
                      color: "#008cff",
                    }}
                  >
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
              Contacts at Pulz technologies
            </h1>
          </div>
        </div>

        <div class=" p-5 " style={{ backgroundColor: "#faf6f5" }}>
          <div
            class="row"
            style={{
              fontSize: 19,
              fontFamily: "'Roboto Condensed', sans-serif",
            }}
          >
            <div class="col-6" style={{ position: "relative", left: 100 }}>
              <p style={{ textAlign: "left", fontSize: 35 }}>Contacts Us</p>
              <p style={{ textAlign: "left" }}>
                <span style={{ color: "#0a5cae" }}> USA OFFICE New York</span>
                <br />
                300 East 40th Street,
                <br /> 23B New York, NY 10016
                <br />
                USA
                <br /> Phone: +1 646 330 5025
                <br />
                <br />{" "}
                <span style={{ color: "#0a5cae" }}>
                  SRI LANKA OFFICE Colombo
                </span>
                <br /> 79/10 Kannangara Mawatha,
                <br /> Colombo 7 <br />
                Sri Lanka
                <br /> Phone: +94 11 266 5100
              </p>
            </div>
            <div class="col-6">
              <form onSubmit={this.handleSubmit} required>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">First_Name:</label>
                  <div class="col-sm-10">
                    <input
                      id="firstname"
                      class="form-control"
                      onChange={this.handleClick}
                      required
                    ></input>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Last_Name:</label>
                  <div class="col-sm-10">
                    <input
                      id="lastname"
                      class="form-control"
                      onChange={this.handleClick}
                      required
                    ></input>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Email:</label>
                  <div class="col-sm-10">
                    <input
                      id="email"
                      class="form-control"
                      onChange={this.handleClick}
                      required
                    ></input>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Phone:</label>
                  <div class="col-sm-10">
                    <input
                      id="phone"
                      class="form-control "
                      onChange={this.handleClick}
                      required
                    ></input>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-sm-2 col-form-label">Message:</label>
                  <div class="col-sm-10">
                    <textarea
                      id="message"
                      class="form-control"
                      rows="5"
                      onChange={this.handleClick}
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  style={{ position: "relative", left: 107 }}
                  type="submit"
                  class="btn btn-outline-success"
                >
                  Send email
                </button>
              </form>
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
