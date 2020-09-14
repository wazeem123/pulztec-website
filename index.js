const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const cors = require("cors");
const nodemailer = require("nodemailer");
var path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "images")));

var firstname;
var lastname;
var phone;
var email;
var message;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    let date = new Date();
    cb(
      null,
      date.getDate() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getFullYear() +
        "-file.pdf"
    );
  },
});
var upload = multer({ storage: storage }).single("file");

app.post("/api/form", function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("Something went wrong!");
    } else {
      firstname = req.body.firstname;
      lastname = req.body.lastname;
      phone = req.body.phone;
      email = req.body.email;
      message = req.body.message;

      let date = new Date();
      filename =
        date.getDate() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getFullYear() +
        "-file.pdf";

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        service: "gmail",
        port: 587,
        secure: false, // true for 465, false for other ports
        requireTLS: true,
        auth: {
          user: "pulztech1@gmail.com", // generated ethereal user
          pass: "pulztech@123", // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: "pulztech1@gmail.com", // sender address
        to: "kumar.navaratnam@pulztec.com", // list of receivers
        subject: `Details of ${firstname}`, // Subject line
        text: `First name : ${firstname}  
        Last name : ${lastname}  
        Phone No : ${phone} 
        Email : ${email} 
        Message : ${message}`, // plain text body

        attachments: [
          {
            filename: filename,
            path: path.join(__dirname, "images", filename),
          },
        ],
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        // res.render('main', {msg:'Thank you, your email has been sent successfully!'});
      });
    }
  });
});

const { sendEmail } = require("./mail");

app.post("/api/sendMail", (req, res) => {
  console.log(req.body);

  sendEmail(
    "kumar.navaratnam@pulztec.com",
    req.body.firstname,
    "hello",
    req.body.lastname,
    req.body.phone,
    req.body.email,
    req.body.message
  );
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.listen(process.env.PORT || 5000, () => {
  console.log("Server Running at 5000 ");
});
