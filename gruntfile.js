module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ["dist"],
    ngmin: {
      build: {
        src: ['dialogs.js'],
        dest: 'dist/dialogs.min.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: [{
          src: 'dist/dialogs.min.js',
          dest: 'dist/dialogs.min.js'
        }]
      }
    },
    jshint: {
      files: ['gruntfile.js' /*, 'app/js/*.js' */ ],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }

    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/* minified css files */'
        },
        files: {
          'dist/dialogs.min.css': ['dialogs.css']
        }
      }
    },
    watch: {
      files: ['dialogs.js', 'dialogs.css'],
      tasks: ['clean', 'jshint', 'ngmin', 'uglify', 'cssmin']
    }
  });

  // Libraries
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default Tasks
  grunt.registerTask('default', ['clean', 'jshint', 'ngmin', 'uglify', 'cssmin']);

};