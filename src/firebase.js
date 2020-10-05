import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmxBMf59ywNgctrKImsvjKBQOl-tgusDg",
  authDomain: "facebook-messenger-c2a68.firebaseapp.com",
  databaseURL: "https://facebook-messenger-c2a68.firebaseio.com",
  projectId: "facebook-messenger-c2a68",
  storageBucket: "facebook-messenger-c2a68.appspot.com",
  messagingSenderId: "860439426690",
  appId: "1:860439426690:web:6dee54fe2098211672669b",
  measurementId: "G-SJHW3LWX9M",
});

const db = firebaseApp.firestore();

export default db;
