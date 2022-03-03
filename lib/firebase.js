import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBhfvUNlOPw7E86CE_maryvpS2B8C168VI",
  authDomain: "blog-platform-b3916.firebaseapp.com",
  projectId: "blog-platform-b3916",
  storageBucket: "blog-platform-b3916.appspot.com",
  messagingSenderId: "901217533574",
  appId: "1:901217533574:web:24d3d50a34236bdd5b5b07",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

/// helper functions
/**`
 *  Gets a users/{uid} document with username
 * @param {string} username
 */

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 *  Gets a users/{uid} document with username
 * @param {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data;
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}
