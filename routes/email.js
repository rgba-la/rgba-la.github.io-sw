const env = require('@danmasta/env');
const config = require('@danmasta/config');
const _ = require('lodash');
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');
const log = require('../lib/log');

// you can use any service here including gmail and mailchimp
// just check the nodemailer docs: https://nodemailer.com/about/
// and update the auth with your apikey or credentials
// https://nodemailer.com/smtp/well-known/
const transport = nodemailer.createTransport(({
    service: 'SendGrid',
    requireTLS: true,
    pool: true,
    auth: {
      user: process.env.SENDGRID_USERNAME,
      pass: process.env.SENDGRID_PASSWORD
   },
   debug: true
}));


const defaults = {
    from: 'swcontact <contact@shaunwhite.com>',
    to: 'sw <customerservice@shaunwhiteenterprises.com>',
    subject: 'SW Contact Request',
    text: null,
    html: null,
    replyTo: null
};

// update this email address to test in development
if(env('DEV')){
    defaults.to = 'sw <customerservice@shaunwhiteenterprises.com>';
}

// best practice would be to sanitze user input, but
// since we are not sending to a database it might be ok for now
module.exports = function (req, res, next) {

    let msg = _.defaults({
      from: 'swcontact <contact@shaunwhite.com>',
     text: `${req.body.name} ${req.body.email} ${req.body.message}`,
     html: `${req.body.name} ${req.body.email} ${req.body.message}`,
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
