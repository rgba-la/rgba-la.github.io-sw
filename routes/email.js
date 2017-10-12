const env = require('@danmasta/env');
const config = require('@danmasta/config');
const _ = require('lodash');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
// const smtpTransport = require('nodemailer-smtp-transport');
// const sesTransport = require('nodemailer-ses-transport');
const log = require('../lib/log');

// you can use any service here including gmail and mailchimp
// just check the nodemailer docs: https://nodemailer.com/about/
// and update the auth with your apikey or credentials
// https://nodemailer.com/smtp/well-known/
const transport = nodemailer.createTransport(({
    service: 'SendGrid',
   //  host: 'email-smtp.us-east-1.amazonaws.com',
   //  port: 465,
   //  secure: true,
    requireTLS: true,
    pool: true,
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD
   },
   debug: true
}));

console.log(process.env.SENDGRID_USERNAME);
console.log('----------------------');
console.log(process.env.SENDGRID_PASSWORD);


const defaults = {
   //  from: 'sw <info@shaunwhiteenterprises.com>',
   //  to: 'sw <info@shaunwhiteenterprises.com>',
   from: 'gm <geraldine.morales02@gmail.com>',
   to: 'gm <geraldine.morales02@gmail.com>',
    subject: 'SW Contact Request',
    text: null,
    html: null,
    replyTo: null
};

// update this email address to test in development
if(env('DEV')){
   //  defaults.to = 'andrea <andrea@rgba.la>';
    defaults.to = 'gigi <geraldine.morales02@gmail.com>';

}

// best practice would be to sanitze user input, but
// since we are not sending to a database it might be ok for now
module.exports = function (req, res, next) {

    let msg = _.defaults({
        from: `${req.body.name} <${req.body.email}>`,
        text: req.body.message,
        html: req.body.message,
        replyTo: req.body.email
    }, defaults);

    transport.sendMail(msg, function(err, info){

        // handle email send errors
        if(err){
            log.error(err, 'Failed to send email: %s', err.message);
            res.json({ err: 'Failed to send message, please try again later', res: null });

        // handle success
        } else {
            res.json({ err: null, res: 'Success' });
        }

    });

};
