// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// VITE_APIKEY=AIzaSyA00lgYnia02BYHPdiyMTf9eu0BQeF2KR4
// VITE_AUTHDOMAIN=practice-3-90a02.firebaseapp.com
// VITE_PROJECTID=practice-3-90a02
// VITE_STORAGEBUCKET=practice-3-90a02.appspot.com
// VITE_MESSAGINGSENDERID=193618426037
// VITE_APPID=1:193618426037:web:a22e460082fdc142bae6fc

// Initialize Firebase
export const app = initializeApp(firebaseConfig);