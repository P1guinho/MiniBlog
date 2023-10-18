import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtwjZ-76tPDatSMiDDjo8EJLkJU9PKUH0",
  authDomain: "miniblog-bc667.firebaseapp.com",
  projectId: "miniblog-bc667",
  storageBucket: "miniblog-bc667.appspot.com",
  messagingSenderId: "701827041176",
  appId: "1:701827041176:web:e254508c12725dd58e8ded",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
