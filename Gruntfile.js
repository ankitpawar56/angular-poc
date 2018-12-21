module.exports = function (grunt) {
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    clean: ["dist",],


    copy: {
         main: {
            expand: true,
            cwd: 'app/',
            src: ['**'],
            dest: 'dist/'
        }
    },
    
    useminPrepare: {
        html: 'app/index.html'
    },
    
    usemin: {
        html: ['dist/index.html']
    },
    concat: {
        options: {
          separator: ';'
        },
        dist: {
          src: [ 'app/*.js', 'tmp/*.js' ],
          dest: 'dist/app.js'
        }
      },

    uglify: {
        files: {
            'dist/ls/app.min.js': [ 'app/*.js' ]
          },
        options: {
            report: 'min',
            mangle: false
        }
    },
    cssmin: {
        options: {
          banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
        },
        build: {
          files: {
            'dist/css/style.min.css': 'app/assets/main.css'
          }
        }
      },
    
    cachebreaker: {
        dev: {
        options: {
           match: ['dist/assets/js/customerapp.min.js', 'dist/assets/customerapp.min.css']
        },
        files: {src: ['dist/index.html']}
     }
    }
});

grunt.loadNpmTasks('grunt-contrib-clean');

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-usemin');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-cache-breaker');

grunt.registerTask('default', [
    'useminPrepare', 'copy', 'concat', 'uglify', 'cssmin', 'usemin','cachebreaker']);
    
};