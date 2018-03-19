require('load-grunt-tasks')(grunt);
module.exports = function(grunt){
   grunt.initConfig({
      name: 'class',
      watch: {
         files: ['*.js', '*.css'],
         task: ['updated']
      },
      uglify: {
         build: {
            src: ['index.js', 'logger.js'],
            dest: 'dist/bundle.js'
         }
      },
      // esto lo he puesto yo
      babel: {
         options: {
            sourceMap: true,
            presets: ['@babel/preset-env']
         },
         dist: {
            files: {
               'dist/app.js': 'src/app.js'
            }
         }
      }
      // fin de lo mío
   });

   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-contrib-uglify');
// wow
   grunt.registerTask('updated', () => {
         grunt.log.writeln(`It updated again!`);
   });

   grunt.registerTask('default',['babel']);
   /* grunt.registerTask('default', () => {
      grunt.log.writeln(`Hello, ${grunt.config.get('name')}!`);
   });*/

};
