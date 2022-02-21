import firebase from "firebase/compat/app";

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { firebaseApiKey, firebaseAppID, firebaseMessagingSenderID, firebaseMeasurementID } from "./firebase.data";

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
const firebaseApp = initializeApp(config);

// Create an instance of authentication object using our firebaseApp
export const authentication = getAuth(firebaseApp);

// Create an instance of Google Provider Object
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

// Create function that signs in with google, takes authentication and provider as arguments
export const signInWithGoogle = () =>
  signInWithPopup(authentication, provider)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));


export const firestore = getFirestore(firebaseApp);

// Export firebase as default
export default firebase;
