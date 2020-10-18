import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB1amwqHxKBXmNarf5dsQrrdBtb5S-tDNc",
  authDomain: "fir-ae0b0.firebaseapp.com",
  databaseURL: "https://fir-ae0b0.firebaseio.com",
  projectId: "fir-ae0b0",
  storageBucket: "fir-ae0b0.appspot.com",
  messagingSenderId: "198844149213",
  appId: "1:198844149213:web:a3d38fe21fdb3b6c2b9a34",
  measurementId: "G-LK77LCSYDQ",
});

var db = firebaseApp.firestore();
var auth = firebase.auth();
export { db, auth };
