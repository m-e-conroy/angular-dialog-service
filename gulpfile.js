var gulp = require('gulp');
var minify = require('gulp-minify');
var minifyCSS = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var wrap = require('gulp-wrap');
var header = require('gulp-header');

gulp.task('lint',function(){
	return gulp.src('src/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
}); // end lint

gulp.task('concat-js',function(){
	return gulp.src(['src/translate-substitution.js','src/dialogs-controllers.js','src/dialogs-services.js','src/dialogs-main.js'])
		.pipe(concat('dialogs.js'))
		.pipe(wrap('(function(){\n"use strict";\n<%= contents %>\n})();'))
		.pipe(gulp.dest('src'));
}); // end concat-js

gulp.task('compress-js',['concat-js'],function(){
	var bower = require('./bower.json');
	var banner = ['/**',
		' * <%= bower.name %> - <%= bower.description %>',
		' * @version v<%= bower.version %>',
		' * @author <%= bower.authors[0].name %>, <%= bower.authors[0].email %>',
		' * @license <%= bower.licenses[0].type %>, <%= bower.licenses[0].url %>',
		' */',
		''].join('\n');

	gulp.src(['src/dialogs.js','src/dialogs-default-translations.js'])
		.pipe(header(banner, {bower : bower}))
		.pipe(gulp.dest('dist'))
		.pipe(minify({}))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'));
			
}); // end comrpess-js

gulp.task('compress-css',function(){
	gulp.src('src/*.css')
		.pipe(concat('dialogs.css'))
		.pipe(gulp.dest('dist'))
		.pipe(minifyCSS({}))
		.pipe(concat('dialogs.css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist'));
	
}); // end compress-css

gulp.task('default',['lint','compress-js','compress-css']);