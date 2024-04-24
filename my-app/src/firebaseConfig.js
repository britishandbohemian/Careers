// Import only the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwrs_DCI9C8hnE5sd_VoU1UlhFgmYwebk",
  authDomain: "careersite-2c2e4.firebaseapp.com",
  projectId: "careersite-2c2e4",
  storageBucket: "careersite-2c2e4.appspot.com",
  messagingSenderId: "915364434378",
  appId: "1:915364434378:web:6b21104d01c5fda6d43f33",
  measurementId: "G-DT3WE1CD2V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Create an instance of Firestore

// Export db to be used in your CRUD operations
export { db };
