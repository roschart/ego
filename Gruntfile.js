// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function(grunt) {
 
// Load Grunt tasks declared in the package.json file
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
// Configure Grunt
grunt.initConfig({
 
// grunt-express will serve the files from the folders listed in `bases`
// on specified `port` and `hostname`
express: {
all: {
options: {
port: 9000,
hostname: "0.0.0.0",
livereload:true,
bases: ['public'] // Replace with the directory you want the files served from
// Make sure you don't use `.` or `..` in the path as Express
// is likely to return 403 Forbidden responses if you do
// http://stackoverflow.com/questions/14594121/express-res-sendfile-throwing-forbidden-error
}
}
},

 watch: {
all: {
// Replace with whatever file you want to trigger the update from
// Either as a String for a single entry
// or an Array of String for multiple entries
// You can use globing patterns like `css/**/*.css`
// See https://github.com/gruntjs/grunt-contrib-watch#files
files: 'public/**',
options: {
livereload: true
}
}
}
 
});
 
// Creates the `server` task
grunt.registerTask('default', [
'express',
'watch'
]);
}; 
