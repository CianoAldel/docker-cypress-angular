pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies && cypress test') {
            steps {
                sg 'npm version'
                sh 'npm install'
                sh 'npm test'
                echo 'test docker-cypress-angular project success'
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
