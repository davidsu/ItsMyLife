'use strict';

module.exports = function (grunt) {

    grunt.config.init({
        eslint: {
            target: ['src**/*.js', '!reactComponents**/*.js']
        },
        react: {
            dynamic_mappings: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/public/js/reactComponents',
                        src: ['**/*.js'],
                        dest: 'src/public/js/reactBuilt',
                        ext: '.js'
                    }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-react');

    grunt.registerTask('build', ['react', 'eslint']);
};