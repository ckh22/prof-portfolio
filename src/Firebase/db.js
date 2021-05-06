import firebase from 'firebase/app'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBE8joS_sjDh7phFXgpfVvZNyuvPR7V25w",
    authDomain: "portfolio-5b546.firebaseapp.com",
    databaseURL: "https://portfolio-5b546-default-rtdb.firebaseio.com",
    projectId: "portfolio-5b546",
    storageBucket: "portfolio-5b546.appspot.com",
    messagingSenderId: "115736849557",
    appId: "1:115736849557:web:701a161dd9f8ffdd853f9c",
    measurementId: "G-2M88MSQ927"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();