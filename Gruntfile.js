module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    exec: {
      serve: "python -m SimpleHTTPServer 3001",
      rmTmp: "rm -r .tmp"
    },

    useminPrepare: {
      html: "src/index.html",
      options: {
        dest: "release"
      }
    },

    usemin: {
      html: "release/index.html"
    },

    clean: {
      release: ["release/**/*"]
    },

    copy: {
      assets: {
        expand: true,
        cwd: "src/",
        src: "common/assets/**/*",
        dest: "release/"
      },
      html: {
        expand: true,
        cwd: "src/",
        src: "**/*.html",
        dest: "release/"
      }
    },

    htmlmin: {
      release: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          "release/index.html": "release/index.html",
          "release/home-page/home.html": "release/home-page/home.html"
        }
      }
    },

    replace: {
      htmlHead: {
        options: {
          patterns: [{
            match: /common\/bower-components\/bootstrap\/dist\/css\/bootstrap.css/,
            replacement: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          }, {
            match: /common\/bower-components\/angular\/angular.js/,
            replacement: "https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"
          }]
        },
        files: [{
          src: "release/index.html",
          dest: "release/index.html"
        }]
      }
    },

    compress: {
      archive: {
        options: {
          archive: "archive.zip"
        },
        expand: true,
        src: "release/**/*",
        dest: ""
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-compress");
  grunt.loadNpmTasks("grunt-usemin");
  grunt.loadNpmTasks("grunt-replace");
  grunt.loadNpmTasks("grunt-exec");

  grunt.registerTask("serve", ["exec:serve"]);
  grunt.registerTask("release", [
    "clean",
    "copy",
    "useminPrepare",
    "concat:generated",
    "uglify:generated",
    "cssmin:generated",
    "usemin",
    "exec:rmTmp",
    "replace:htmlHead",
    "htmlmin:release",
    "compress:archive"
  ]);
};
