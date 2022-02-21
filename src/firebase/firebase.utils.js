import firebase from "firebase/compat/app";

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import {
  firebaseApiKey,
  firebaseAppID,
  firebaseMessagingSenderID,
  firebaseMeasurementID,
} from "./firebase.data";

// Fire base configuration object with private info about the db
const config = {
  apiKey: firebaseApiKey,
  authDomain: "crwn-clothing-db-53c3f.firebaseapp.com",
  projectId: "crwn-clothing-db-53c3f",
  storageBucket: "crwn-clothing-db-53c3f.appspot.com",
  messagingSenderId: firebaseMessagingSenderID,
  appId: firebaseAppID,
  measurementId: firebaseMeasurementID,
};

// Initialize application with config settings
export const firebaseApp = initializeApp(config);

// Create an instance of authentication object using our firebaseApp
export const authentication = getAuth(firebaseApp);

// Create an instance of Google Provider Object
export const provider = new GoogleAuthProvider();

// Create function that signs in with google, takes authentication and provider as arguments
export const signInWithGoogle = () =>
  signInWithPopup(authentication, provider)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));

// Initialize fireStore service to connect to fireStore Database
export const firestoreDB = getFirestore(firebaseApp);

// Get all users in an array
export const getUserCollection = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = collection(firestoreDB, "users");
  const snapShot = getDocs(userRef)
    .then((snapshot) => {
      // console.log(snapshot.docs)
      let users = [];
      snapshot.docs.forEach((doc) => users.push({ ...doc.data(), id: doc.id }));
      console.log(users);
    })
    .catch((error) => console.log(error));
  // console.log(userRef, snapShot);
};

// Checks if a snapshot of this user currently exists within the database, if not it will create a user with their google auth ID
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestoreDB, `users/${userAuth.uid}`);
  const userSnapshot = getDoc(userRef)
    .then((snapshot) => {
      // console.log(snapshot);
      if (!snapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
          setDoc(userRef, {
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error) {
          console.log(error);
        }
      }
    })
    .catch((err) => console.log(err));
  return userRef;
};

// Export firebase as default
export default firebase;
