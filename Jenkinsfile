pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
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
