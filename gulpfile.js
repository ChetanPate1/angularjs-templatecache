const { src, dest, watch, series, task } = require('gulp');
const templateCache = require('gulp-angular-templatecache');
const concat = require('gulp-concat');

const PATHS = {
    scripts: [
        './node_modules/angular/angular.min.js', 
        './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js', 
        'src/**/*.js',
        'components/**/*.js',
        'dist/templateCache.js'
    ],
    html: [
        './**/*.html',
        '!index.html',
        '!node_modules/**/*.html'
    ]
}

function javascript(cb) {
    return src(PATHS.scripts)
        .pipe(concat('app.js'))
        .pipe(dest('dist/src'));
}

function templates(cb) {
    return src(PATHS.html)
        .pipe(templateCache('templateCache.js', { 
            module: 'templateCache',
            standalone: true,
            transformUrl: function(url) {
                return url.replace(/^\/+/, '');
            }
        }))
        .pipe(dest('dist'));
}

const watcher = watch(['src/**/*.js', 'components/**/*.js', 'components/**/*.html']);

watcher.on('change', series(templates, javascript));

task('dev', series(templates, javascript));