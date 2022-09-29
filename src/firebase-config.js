import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDsy6V8EXZxO_uWnvFI7wQGZGMseBabMFY",
  authDomain: "burger-builder-c7f51.firebaseapp.com",
  projectId: "burger-builder-c7f51",
  storageBucket: "burger-builder-c7f51.appspot.com",
  messagingSenderId: "347393941531",
  appId: "1:347393941531:web:6ca8d7313acc57676e98be",
  measurementId: "G-FBS2RYSXPL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

