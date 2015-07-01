var dest = './build',
    src = './src';

module.exports = {
    browserSync: {
        server: {
            // We're serving the src folder as well
            // for sass sourcemap linking
            baseDir: [dest]
        },
        files: [
            dest + '/**'
        ],
        // https://github.com/expressjs/serve-static
        // https://github.com/BrowserSync/browser-sync/issues/514
        // middleware: require("serve-static")("./src/assets")
    },
    markup: {
        src: [
            src + "/app/**/*",
            src + "/assets/**/*",
        ],
        dest: dest,
        // https://medium.com/@mattdesl/gulp-and-browserify-shim-f1c587cb56b9 
    },
    watch: {
        src: [
            src + "/www/**",
            src + "/app/**"
        ]
    },
    browserify: {
        // Enable source maps
        debug: true,
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/app/main.js',
            dest: dest,
            outputName: 'app.js'
        }]
    },
    sass: {
        dest: dest,
        src: [
            src + "/sass/*.scss",
        ],
        settings: {outputStyle: 'compressed'}
    },
    handlebars: {
        dest: dest,
        src: [
            src + "/www/*.handlebars",
        ],
        partials: [src + "/www/partials"]
    },
    cssSrc: dest + '/main.css', // minifyCss task
    url: 'http://www.iojs-vi.com:3000'
};