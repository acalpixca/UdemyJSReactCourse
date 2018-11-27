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
        src: ['dist/indexOld.js', 'dist/loggerOld.js'],
        dest: 'dist/bundle.js'
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      dist: {
        files: {
          'dist/indexOld.js': 'index.js',
          'dist/loggerOld.js': 'logger.js'
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
