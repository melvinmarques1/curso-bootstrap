// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "./node_modules/firebase/app";
import "./node_modules/firebase/analytics";
import "./node_modules/firebase/auth";
import "./node_modules/firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAOcQnoQLB1rEC6erMj6O5VxqK5AfL97U",
    authDomain: "globesystems-f34be.firebaseapp.com",
    projectId: "globesystems-f34be",
    storageBucket: "globesystems-f34be.appspot.com",
    messagingSenderId: "627497636817",
    appId: "1:627497636817:web:9d993a3f5447444710c6f0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Referenciar mensagens coletadas
var menssagensRef = firebase.database().ref('menssagens');

//Capiturar o que foi enviado no submit
document.getElementById('contatoForm').addEventListener('submit', submitForm);

//Enviado do form
function submitForm(e){
    e.preventDefault();

    //pegando valores
    var nome = getInputVal('nome');
    var celular = getInputVal('celular');
    var email = getInputVal('email');
    var menssagem = getInputVal('menssagem');

    // Salvando a mensagem
    saveMessage(nome, celular, email, menssagem);
    

}

// Função para pegar os valores do formulário
function getInputVal(id){
    return document.getElementById(id).value;
}

// Salvando a menssagem para o firebase
function saveMessage(nome, celular, email, menssagem){
    var newMenssagensRef = menssagensRef.push();
    newMenssagensRef.set({
        nome: nome,
        celular: celular,
        email: email,
        menssagem: menssagem
    });
}