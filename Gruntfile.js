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
        monitor:{
            default:{
                options:{
                    script: 'src/server.js',
                    timeout: 2,
                    ignoreLogs: 0,
                    logsPerConnect: 1,
                    nodes: 1,
                    environmentVariables: '', //ie 'ENVIRONMENT=production',
                    nodeArgs: '', //ie '--harmony --debug'
                    scriptArgs: ''
                }
            }
        },
        watch: {
            dev: {
                files: [
                    'src/public/js/reactComponents/**/*.js'
                ],
                tasks: ['fire'],
                options: {
                    debounceDelay: 500
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-server-monitor');

    grunt.registerTask('build', ['react', 'eslint']);
    grunt.registerTask('fire', ['react', 'monitor']);
};