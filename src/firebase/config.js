import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCEP3PnPMwz86dzJTT18y0BlDFXoRGdsaU",
  authDomain: "firegram-cfe22.firebaseapp.com",
  projectId: "firegram-cfe22",
  storageBucket: "firegram-cfe22.appspot.com",
  messagingSenderId: "520201254843",
  appId: "1:520201254843:web:2016780ff37507a04b369e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
