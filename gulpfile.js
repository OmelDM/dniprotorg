"use strict";

var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	concat = require('gulp-concat'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	del = require('del'),
	connect = require('gulp-connect');

var cssPaths = ['css/*.css', 'blocks/**/*.css'],
	jsPaths = ['js/*.js', 'blocks/**/*.js'];

gulp.task('clean', function() {
	return del('build');
});

gulp.task('connect', function() {
	connect.server({
		root: 'build',
		livereload: true
	});
});

gulp.task('html', function() {
	return gulp.src('*.html')
	.pipe(gulp.dest('build'))
	.pipe(connect.reload());
});

gulp.task('css', function () {
	return gulp.src(cssPaths)
	.pipe(concatCss("style.css"))
	.pipe(autoprefixer('last 2 versions', '> 1%'))
//    .pipe(cleanCSS())
//    .pipe(rename('style.min.css'))
	.pipe(gulp.dest('build/css'))
	.pipe(connect.reload());
});

gulp.task('img', function() {
	return gulp.src('images/*')
	.pipe(gulp.dest('build/images'))
	.pipe(connect.reload());
});

gulp.task('js', function() {
	return gulp.src(jsPaths)
	.pipe(concat('main.js'))
	.pipe(gulp.dest('build/js'))
	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch(cssPaths, ['css']);
	gulp.watch('*.html', ['html']);
	gulp.watch(jsPaths, ['js']);
	gulp.watch('images/*', ['img']);
});

gulp.task('default', ['connect', 'html', 'css', 'js', 'img', 'watch']);