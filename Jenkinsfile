pipeline {
    agent any
    stages {
        stage('git pull') {
            steps {
                git credentialsId: 'global-key', url: 'https://github.com/CianoAldel/docker-cypress-angular.git', branch: 'main',
                echo 'you checkout success'
            }
        }
        stage('cypress test') {
            steps {
                echo 'test docker-cypress-angular project'
            }
        }
        stage('build') {
            steps {
                echo 'build docker-cypress-angular project'
            }
        }
        stage('deploy') {
            steps {
                echo 'build docker-cypress-angular  project'
            }
        }
    }
}