// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyyG8ELDWDzWfyxhZBggRoIQ4taDIO-nk",
  authDomain: "danielo-s-project-524d0.firebaseapp.com",
  projectId: "danielo-s-project-524d0",
  storageBucket: "danielo-s-project-524d0.firebasestorage.app",
  messagingSenderId: "728041872480",
  appId: "1:728041872480:web:49fbba681bb32aa22eb705",
  measurementId: "G-FF4GP5L2Z0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize and Export Database
export const db = getFirestore(app);
