module.exports = function(grunt) {
  // Do grunt-related things in here

  // Project configuration.
	grunt.initConfig({
	  autoprefixer: {
	    options: {
	      // Task-specific options go here. 
	    },
	    build: {
	      // Target-specific file lists and/or options go here.
	      src: 'css/style.css',
	      dest: 'build/css/style.prefixed.css' 
	    },
	  },
	  uglify: {
	    build: {
	      src: 'build/css/style.prefixed.css',
	      dest: 'build/css/style.min.css'
	    }
	  }
	})

	// Load all plugins for your task.
  	grunt.loadNpmTasks('grunt-contrib-uglify');
  	grunt.loadNpmTasks('grunt-autoprefixer');


  	//set up some tasks
  	// this would be run by typing "grunt test" on the command line
	grunt.registerTask('autoprefixit', ['autoprefixer']);
  	// Default task(s).
  	grunt.registerTask('default', ['autoprefixer' , 'uglify']);


};