// Karma configuration
// Generated on Tue Apr 29 2014 13:15:49 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'js',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['qunit'],


    // list of files / patterns to load in the browser
    files: [
        "lib/jquery.js",
        "lib/bootstrap.min.js",
        "lib/handlebars.js",
        "lib/ember.js",
        "lib/ember-data.js",
        "lib/moment.js",
        "http://cdn.leafletjs.com/leaflet-0.7.2/leaflet.js",

        "app.js",
        "store.js",
        "router.js",
        "models/rsvp.js",
        "routes/rsvpsRoute.js",
        "controllers/rsvpsController.js",
        "controllers/addController.js",
        "routes/addRoute.js",
        "controllers/applicationController.js",
        "routes/indexRoute.js",
        "views/views.js",
        "controllers/follow_us.js",

        "components/leafletMapComponent.js",
        "../tests/**/*.js"
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
