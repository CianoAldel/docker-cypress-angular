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
                sh 'apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb'
                sh 'npm install && npm install cypress --save-dev'
            }
        }
        stage('cypress test'){
          steps {
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
