import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBiHOIothN_9jLcuUbCmyC-UswXWtXAbX4",
    authDomain: "todolist-f6938.firebaseapp.com",
    projectId: "todolist-f6938",
    storageBucket: "todolist-f6938.appspot.com",
    messagingSenderId: "298546977650",
    appId: "1:298546977650:web:1c67302cf4917622ff5beb",
    measurementId: "G-C7PJ588NWK"

});

const db = firebaseApp.firestore();

export default db;