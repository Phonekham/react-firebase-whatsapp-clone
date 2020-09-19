import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBiVkiCB_ux5Aikkd8Xp0YCqGl2iBCTcdw",
  authDomain: "react-firebase-whatsapp-clone.firebaseapp.com",
  databaseURL: "https://react-firebase-whatsapp-clone.firebaseio.com",
  projectId: "react-firebase-whatsapp-clone",
  storageBucket: "react-firebase-whatsapp-clone.appspot.com",
  messagingSenderId: "436684738444",
  appId: "1:436684738444:web:5acb15ff794ce625b010a9",
  measurementId: "G-B7D489943P",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
