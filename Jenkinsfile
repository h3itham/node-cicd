pipeline {
    agent any 
   
    environment {
            DOCKERHUB_CREDENTIALS = credentials('dockerhub_id')
        }
    
    stages{
        stage('Code'){
            steps{
                git url: 'https://github.com/h3itham/node-cicd.git', branch: 'master' 
            }
        }
        stage('Build and Test'){
            steps{
                sh 'docker build . -t h3itham/node-cicd:latest'
            }
        }
       
        stage('Login') {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
                 }
            }     
        stage('Push'){
            steps{
                withCredentials([usernamePassword(credentialsId: 'dockerhub_id', passwordVariable: 'dockerHubPassword', usernameVariable: 'dockerHubUser')]) {
        	     sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPassword}"
                 sh 'docker push h3itham/node-cicd:latest'
                }
            }
        }
        stage('Deploy'){
            steps{
                sh "docker compose down && docker compose up -d"
            }
        }
    }
}
