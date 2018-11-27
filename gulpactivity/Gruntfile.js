module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    name: 'class',
    watch: {
      files: ['*.js','*.css'],
      task: ['updated']
    },
    uglify: {
      build: {
        src: ['indexOld.js'],
        dest: 'index.js'
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: {
          'indexOld.js': 'indexJS6.JS',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('updated',()=> {
    grunt.log.writeln(`It updated again!`);
  });

// wow changing the file now
  grunt.registerTask('default',()=> {
    grunt.log.writeln(`Hello, ${grunt.config.get('name')}!`);
  });
};
