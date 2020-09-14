import React, { Component } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import logo from "../assets/photo/pulztecLogo.png";
import worldmap from "../assets/photo/worldmap.PNG";

export default class Career extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      message: "",
      cv: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeCv = this.onChangeCv.bind(this);
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

  onChangeCv(e) {
    this.setState({
      cv: e.target.files[0],
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const cv = new FormData();
    cv.append("file", this.state.cv);
    cv.append("firstname", this.state.firstname);
    cv.append("lastname", this.state.lastname);
    cv.append("phone", this.state.phone);
    cv.append("message", this.state.message);
    cv.append("email", this.state.email);

    const dataToSubmit = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phone: this.state.phone,
      message: this.state.message,
      email: this.state.email,
    };

    axios
      .post("http://localhost:5000/api/form", cv)
      .then((res) => {
        // then print response status
        console.log(res.data);
        alert("mail sent successfully!");
      })
      .catch((err) => console.log(err));

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
                <li class="nav-item active">
                  <a
                    class="nav-link"
                    href="/Careers"
                    style={{
                      color: "#008cff",
                    }}
                  >
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
              Careers at Pulz technologies
            </h1>
          </div>
        </div>

        <div class="p-5" style={{ backgroundColor: "#faf6f5" }}>
          <div
            class="row"
            style={{
              fontSize: 19,
              fontFamily: "'Roboto Condensed', sans-serif",
            }}
          >
            <div class="col-6 p-3">
              <h1
                style={{
                  position: "relative",
                  left: "10%",
                }}
              >
                Careers
              </h1>
              <p
                style={{
                  position: "absolute",
                  left: "12%",
                  right: "7%",
                  marginTop: 10,
                }}
              >
                Pulztec has a strong software and electronic engineering focus,
                deep domain expertise and a passion to apply innovation to
                solving business challenges. We are committed to providing
                technology solutions to make a measurable impact in our client’s
                businesses. The key to our strength is our people and we value
                the initiative, experience and expertise of our staff. Join us.
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
                      class="form-control"
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
                <div
                  class="form-group"
                  style={{ position: "relative", left: 107 }}
                >
                  <label for="exampleFormControlFile1">
                    <p> Upload your CV in PDF format</p>
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="file"
                    onChange={this.onChangeCv}
                    required
                  ></input>
                </div>

                <button
                  style={{ position: "relative", left: 107 }}
                  type="submit"
                  class="btn btn-outline-success"
                >
                  Submit
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
