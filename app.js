const env = require('@danmasta/env');
const config = require('@danmasta/config');
if(process.env.NODE_ENV === 'production'){
    const newrelic = require ('newrelic');
}
const express = require('express');
const _ = require('lodash');
const bodyparser = require('body-parser');
const helmet = require('helmet');
const path = require('path');
const dotenv = require('dotenv');

const log = require('./lib/log');
const pkg = require('./package');

const routeIndex = require('./routes/index');
const routeMedia = require('./routes/media');
const routePartnerships = require('./routes/partnerships');
const routeBio = require('./routes/bio');
const routeEmail = require('./routes/email');

const app = express();

dotenv.config();

// express settings
_.assign(app.settings, config.express);

// add view helpers
app.locals.env = env();
app.locals.config = config;
app.locals.log = log;
app.locals.version = pkg.version;

// security headers
app.use(helmet());

// parse request bodies
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.use('/_fonts', express.static('_fonts'));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));
app.use('/js', express.static('js'));
app.use('/videos', express.static('videos'));
app.use('/loaderio-9c086537d969d5ed5cd850c357e7db3e.html', express.static('loaderio-9c086537d969d5ed5cd850c357e7db3e.html'));

// set route handlers
app.get('/', routeIndex);
app.get('/media', routeMedia);
app.get('/partnerships', routePartnerships);
app.get('/bio', routeBio);

app.post('/api/email', routeEmail);

// start server
app.listen(env('PORT'), function(err){

    let address = this.address();

    if (err) {
        log.error(err, 'Failed to start app: %s', err.message);
    } else {
        process.send && process.send('ready');
        log.info('[%s] listening on http://%s:%d', env('NODE_ENV'), address.address, address.port);
    }

}).on('error', function (err) {

    log.error(err, 'Server error: %s', err.message);

});

// handle graceful shutdown, close db connections, etc
process.on('SIGINT', function () {

    log.info('SIGINT, process shutting down');
    process.exit(0);

});
