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
        },
        watch: {
            dev: {
                files: [
                    'src/public/js/reactComponents/**/*.js'
                ],
                tasks: ['babel'],
                options: {
                    debounceDelay: 500
                }
            },
            react: {
                files: [
                    'src/public/js/reactComponents/**/*.js'
                ],
                tasks: ['babel'],
                options: {
                    debounceDelay: 500
                }
            }
        },
        babel:{
            "babel":{
                options:{
                    sourceMap: false
                },
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    grunt.registerTask('build', ['react', 'eslint']);
};