var express = require('express');
var config = require('config');     // containing config data (default.json etc)
/*
 *  {moment}:
 *      similar to Joda Time though (functions)
 *      http://momentjs.com/docs/#/displaying/
 */
var moment = require('moment');

//var initObj = require('./middlewares/init');
//var routesObj = require('./middlewares/routes');

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = null;

var fs = require('fs');
//var fileUtil = require('./util/FileUtil');

var app = express();
var router = express.Router();

var logger = null;


// ** setup static file folder(s)
(function(app, express, config) {
    //var filesArr = config['server']['static-file-folders'];

    //for (var idx=0; idx<filesArr.length; idx++) {
    //    app.use(express.static(filesArr[idx]));
    //}
    // add body parser
    //app.use(bodyParser.json({limit: '50mb'}));
    //app.use(bodyParser.urlencoded({
    //  limit: '50mb',
    //  extended: true,
    //  parameterLimit:50000
    //}));

    // setup multer
    var dStorage = multer.diskStorage({
      destination: function (req, file, cb) {
        // create the required folder first
        if (!fs.existsSync('uploads/'+req.body.uuid)) {
          fs.mkdirSync('uploads/'+req.body.uuid);
        }
        cb(null, 'uploads/'+req.body.uuid);
      },
      filename: function (req, file, cb) {
        // get extension
        //var ext = fileUtil.getExtension(file.originalname);
        // file.fieldname
        //cb(null, file.originalname + '---' + Date.now());
        cb(null, file.originalname);
      }
    });
    // dest: 'uploads/{uuid}'
    upload = multer({ storage: dStorage });  // the uploads folder will have all required uploaded file(s)


})(app, express, config);

// ** setup logger
logger = (function(config) {
    var winston = require('winston');

    return new (winston.Logger)({
        // nearly log out all the things...
        level: 'debug',
        // sort of like "channels" for logging
        transports: [
            /*
             *  https://www.npmjs.com/package/winston#using-the-default-logger
             */
            new (winston.transports.Console)({
                // settings specific to this channel
                formatter: function(opts) {
                    return '['+moment().format()+']['+opts.level+']: '+opts.message;
                }
            }),
            /*
             *  https://www.npmjs.com/package/winston-daily-rotate-file
             */
            new (require('winston-daily-rotate-file'))({
                // settings specific to this channel
                formatter: function(opts) {
                    return '['+moment().format()+']['+opts.level+']: '+opts.message;
                },
                datePattern: 'yyyy-MM-dd',
                prepend: false,
                filename: config['logging']['folder']+'/'+config['logging']['logfile-name']
            })
        ]
    });
    // return the logger
})(config);


// *************************** //
// **   setup middlewares   ** //
// *************************** //

//initObj.init(app, config);
//routesObj.setRoutes(router, app, config, logger, moment, upload);


// ******************************* //
// **   kick start the server   ** //
// ******************************* //

app.listen(config.server.port, function() {
    var host = this.address().address;
    var port = this.address().port;

    logger.log("info", "** listening at %s:%s", host, port);

    // directly logging to console
    // * https://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script

    //console.log("** listening at \x1b[36mhttp://%s:%s", host, port);
    //console.log("\x1b[0m"); // reset back to the original text color
});
