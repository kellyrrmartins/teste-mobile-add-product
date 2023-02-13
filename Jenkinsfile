pipeline {
    agent any

    stages {
        stage('setup') {
            steps {
                
                browserstack(credentialsId: '38a05942-c4ab-4dd9-8365-8043c9b94fbc') {
                    git 'https://github.com/kellyrrmartins/teste-mobile-add-product.git'
                
                }
            }
        }
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            
            }
        }
        stage('Executar testes') {
            steps {
             sh 'NO_COLOR=1 npm run wdio'
            }
        }
    }
}
