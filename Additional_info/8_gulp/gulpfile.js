const { src, dest, task, watch, series } = require('gulp');

const minfyJs = require('gulp-uglify');
const concat = require('gulp-concat');
const eslint = require('gulp-eslint');

const bundleJs = () => {
    return src('./static/**/*.js')
        .pipe(minfyJs())
        .pipe(concat('bundle.js'))
        .pipe(dest('./dist'));
}

const lintJs = () => {
    return src(['./static/**/*.js'])
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

task('bundle', bundleJs);
task('lint', lintJs);

task('watch', function () {
    watch(['./static/**/*.js'], series('bundle'))
})