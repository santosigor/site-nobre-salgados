module.exports = function(grunt) {

	const sass = require('node-sass');

	// Config
	grunt.initConfig({

		sass: {
      options: {
        implementation: sass
      },
      dist: {
        files: {
          'src/css/main.css': 'src/scss/main.scss'
        }
      }
    },

    concat: {
			js: {
				src: ['src/js/lib/jquery.min.js', 
							'src/js/lib/owl.carousel.min.js',
							'src/js/main.js'
						],
				dest: 'dist/js/nbs.min.js'
			},
			css: {
				src: ['src/css/lib/*.css',
							'src/css/main.css'
						],
				dest: 'dist/css/nbs.min.css'
			}
		},

    uglify: {
	    my_target: {
	      files: {
	        'dist/js/nbs.min.js': ['dist/js/nbs.min.js']
	      }
	    }
	  },

	  cssmin: {
		  options: {
		    mergeIntoShorthands: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      'dist/css/nbs.min.css': ['dist/css/nbs.min.css']
		    }
		  }
		},

		connect: {
			sever: {
				options: {
					hostname: 'localhost',
					port: 3000,
					livereload: true
				}
			}
		},

		watch: {
			options: {
				livereload: true,
				dateFormat: function(time) {
					grunt.log.writeln('The watch finished in ' + time + 'ms at' + (new Date()).toString());
					grunt.log.writeln('Waiting for more changes...');
				}
			},
			sass: {
	      files: ['src/scss/**/*.scss'],
	      tasks: ['sass', 'concat:css', 'cssmin']
	    },
	    scripts: {
	      files: ['src/js/**/*.js'],
	      tasks: ['concat:js', 'uglify']
	    },
	    html: {
        files: ['*.html']
    	}
		}

	});

	// Load plugins
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register tasks
	grunt.registerTask('default', ['connect', 'watch']);

};