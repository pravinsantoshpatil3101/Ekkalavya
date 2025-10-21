pipeline {
    agent any

    environment {
        APP_NAME = "todo-app"
        DOCKER_USER = "Pravin3101"
        DOCKER_PASS = "Pravin@3101"
        IMAGE_NAME = "${DOCKER_USER}/${APP_NAME}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/pravinsantoshpatil3101/Ekkalavya.git'

            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "🛠️ Building Docker image..."
                    sh "docker build -t ${IMAGE_NAME}:latest ."
                }
            }
        }

        stage('Push Image to DockerHub') {
            steps {
                script {
                    echo "📦 Pushing image to DockerHub..."
                    withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                        sh "docker push ${IMAGE_NAME}:latest"
                    }
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    echo "🚀 Deploying container..."
                    sh '''
                        docker stop todo-app || true
                        docker rm todo-app || true
                        docker run -d -p 3000:3000 --name todo-app ${IMAGE_NAME}:latest
                    '''
                }
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful!"
        }
        failure {
            echo "❌ Build or deploy failed!"
        }
    }
}