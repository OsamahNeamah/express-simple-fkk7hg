const mailController = async (req, res) => {
    console.log(req.body)
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  service: 'gmail',
  auth: {
    user: 'oneamah@gmail.com',
    pass: 'aask dpdy iyek qnky'
  }
});

var mailOptions = {
  to: 'oneamah@gmail.com ',
  from:req.body.email,
  subject:req.body.subject,
  text: req.body.message
};

var mailOptions2 = {
    to:req.body.email,
    from: 'oneamah@gmail.com ',
    subject:"Response From Sam",
    text:"I Recived your email and will contact you shortly"
  };

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})

transporter.sendMail(mailOptions2, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })

    res.send("hi");
}
module.exports={
    mailController
}
