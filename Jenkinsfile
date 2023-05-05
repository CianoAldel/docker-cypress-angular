pipeline {
    agent any
  tools {
    nodejs 'NodeJs 16.18.0'
  }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install dependencies && cypress test') {
            steps {
                sh 'npm install
            }
        }
        stage('cypress test'){
          steps {
              sh 'npm run test'
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
