pipeline {
    agent any
  tools {
    nodejs 'NodeJs 16.18.0'
  }
    stages {
        stage('Git pull') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm install'
                sh 'npm install -g cypress'
            }
        }
        stage('Cypress test'){
          steps {
              sh 'npm run test'
              echo 'test docker-cypress-angular project success'
          }
        }
        stage('Build') {
            steps {
                echo 'build docker-cypress-angular project'
            }
        }
        stage('Deploy') {
            steps {
                echo 'build docker-cypress-angular  project'
            }
        }
    }
}
