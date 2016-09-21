var gulp = require('gulp');
var minify = require('gulp-minify');
var minifyCSS = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var wrap = require('gulp-wrap');
var header = require('gulp-header');
var bump = require('gulp-bump');
var util = require('gulp-util');
var connect = require('gulp-connect');

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
		.pipe(gulp.dest('temp'));
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

	gulp.src(['temp/dialogs.js','src/dialogs-default-translations.js'])
		.pipe(header(banner, {bower : bower}))
		.pipe(gulp.dest('dist'))
		.pipe(gulp.dest('example/js'))
		.pipe(minify({ ext: '.min.js' }))
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

gulp.task('connect', function(){
	connect.server({
    root: './example',
    port: 8000
  });
});

gulp.task('watch_files', function(){
	gulp.watch(['src/*.js'], ['lint', 'compress-js']);
	gulp.watch(['src/*.css'], ['compress-css']);
});

gulp.task('default',['lint','compress-js','compress-css']);

gulp.task('watch', ['default', 'connect', 'watch_files']);

/***********************************************************************************************************************
 * VERSIONING - Bump Versions
 **********************************************************************************************************************/

/**
 * Bumps project version based on given command line type.
 */
gulp.task('bump',function(){
    util.log('Starting bump task.');

    // gulp bump --type [major|minor|patch]
    var type = util.env.type;
    if((type === 'major') || (type === 'minor') || (type === 'patch')) {
        util.log('Bumping ' + type + ' Version');
        return gulp.src(['./bower.json', './package.json'])
            .pipe(bump({
                type: type
            }))
            .pipe(gulp.dest('./'));
    }

    return;
}); // end bump
