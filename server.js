const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
// const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;


//
// //view engine setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');
//
// //statsic folder
// app.use('/public', express.static(path.join(__dirname, 'public')));
//
// //Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//front page
app.get('/', function(req, res){
   res.render('index.html');
   console.log('NodeMailer reading console log...' + req.url);
});

//sending mail function
app.post('/send', function(req, res){
   if(req.body.email === "" || req.body.message === "" || req.body.name === "") {
      res.send("Error: Please fill in empty fields");
      return false;
   }
});

//Sending emails with SMTP, configuration useing SMTP settings
const smtpTransport = nodemailer.createTransport("SMTP", {
   host: "smtp.gmail.com",
   secureConnection: true,
   port: 465, //Port for secure SMTP
      auth: {
         user: 'geraldine.morales02@gmail.com',
         pass: ''
      }
});

const mailOptions = {
   from: req.body.email,
   to: "geraldine.morales02@gmail.com",
   text:"Name: " + req.body.name + " " + "Email: " + " " + req.body.email + " "
            + "Message: " + " " + req.body.message
};
smtpTransport.sendMail(mailOptions, function(res, err) {
   if(err) {
      res.send("Message could not be sent due to error: " + err);
   }else {
      res.send("Message has been sent!");
   }
});

const server = http.createServer(app).listen(port, function(){
   console.log("server is listening on port:" + port);
});

// app.post('/send', function(req, res){
//    console.log(req.body);
// });
//
// app.listen(3000, function(){
//    console.log('Server started...');
// });
