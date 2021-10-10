import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBhfvUNlOPw7E86CE_maryvpS2B8C168VI",
  authDomain: "blog-platform-b3916.firebaseapp.com",
  projectId: "blog-platform-b3916",
  storageBucket: "blog-platform-b3916.appspot.com",
  messagingSenderId: "901217533574",
  appId: "1:901217533574:web:24d3d50a34236bdd5b5b07"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();