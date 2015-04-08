module.exports = function (grunt) {

  grunt.initConfig({
    less: {
      development: {
        files: {
          'public/compiled/style.min.css': 'public/less/viz.less'
        }
      }
    },
    watch: {
      less: {
        files: ['public/less/**/*.less'],
        tasks: ['less:development']
      }
    },
    shell: {
      runServer: {
        options: {
          async: true
        },
        command: 'node server/server.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');


  grunt.registerTask('default', ['less', 'watch']);

};
