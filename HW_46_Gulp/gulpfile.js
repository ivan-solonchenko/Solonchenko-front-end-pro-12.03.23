const { src, dest, task, watch, series, parallel } = require('gulp');

const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');
const sass = require('gulp-sass')(require('sass'));

const paths = {
    styles: {
        src: 'static/sass/**/*.scss',
        dest: 'dist/css/'
    },
    scripts: {
        src: 'static/js/**/*.js',
        dest: 'dist/js/'
    }
};

const bundleJs = () => {
    return src(paths.scripts.src)
        .pipe(uglify())
        .pipe(concat('bundle.js'))
        .pipe(dest(paths.scripts.dest));
}

const lintJs = () => {
    return src([paths.scripts.src])
        .pipe(eslint({
            env: {
                node: true,
                es2021: true
            },
            rules: {
                'space-before-blocks': 'error'
            }
        }))
        .pipe(eslint.formatEach('compact', process.stderr))
}

const compileSass = () => {
    return src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.min.css'))
        .pipe(dest(paths.styles.dest));
}

task('bundle', bundleJs);
task('lint', lintJs);
task('sass', compileSass);

task('watch', () => {
    watch(paths.styles.src, compileSass);
    watch(paths.scripts.src, series(bundleJs, lintJs));
});

task('default', parallel(compileSass, bundleJs, lintJs, 'watch'));
