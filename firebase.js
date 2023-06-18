// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8AGqBvhIsccAZZUuM6EjU8X4Ruvy6D1A",
  authDomain: "fir-auth-e2369.firebaseapp.com",
  projectId: "fir-auth-e2369",
  storageBucket: "fir-auth-e2369.appspot.com",
  messagingSenderId: "239934860981",
  appId: "1:239934860981:web:31f2154c9eefad102c18fc",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = getAuth(app);

export { auth };
