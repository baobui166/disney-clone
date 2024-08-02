import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-3yF9nszp4NMv8N1ctkJl1QS_CDf8uac",
  authDomain: "disney-plus-32128.firebaseapp.com",
  projectId: "disney-plus-32128",
  storageBucket: "disney-plus-32128.appspot.com",
  messagingSenderId: "622176596137",
  appId: "1:622176596137:web:57e6638361f3e7acf879b8",
  measurementId: "G-QQ7P53C0MQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
