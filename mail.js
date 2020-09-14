const mailer = require("nodemailer");

const getEmailData = (
  to,
  firstname,
  template,
  lastname,
  phone,
  email,
  message
) => {
  let data = null;

  switch (template) {
    case "hello":
      data = {
        from: "Pulztec <pulztech1@gmail.com",
        to,
        subject: `  contact details of ${firstname}`,
        text: `First name : ${firstname}  
               Last name : ${lastname}  
               Phone No : ${phone} 
               Email : ${email} 
               Message : ${message}`,
      };
      break;

    default:
      data;
  }
  return data;
};

const sendEmail = (to, firstname, type, lastname, phone, email, message) => {
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      user: "pulztech1@gmail.com",
      pass: "pulztech@123",
    },
  });

  const mail = getEmailData(
    to,
    firstname,
    type,
    lastname,
    phone,
    email,
    message
  );

  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(" email sent successfully");
    }
    smtpTransport.close();
  });
};

module.exports = { sendEmail };
