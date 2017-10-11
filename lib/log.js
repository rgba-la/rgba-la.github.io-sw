const env = require('@danmasta/env');
const config = require('@danmasta/config');
const bunyan = require('bunyan');

const log = bunyan.createLogger({
    name: config.appname,
    serializers: {
        req: bunyan.stdSerializers.req,
        err: bunyan.stdSerializers.err,
        res: bunyan.stdSerializers.res
    }
});

module.exports = log;