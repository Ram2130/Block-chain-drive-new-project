// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
  export const firebaseConfig = {
    apiKey: "AIzaSyCS-RxMv_erOXCn-gJNf4oTOXxni0n4zko",
    authDomain: "file-storage-system-7d654.firebaseapp.com",
    projectId: "file-storage-system-7d654",
    storageBucket: "file-storage-system-7d654.appspot.com",
    messagingSenderId: "587853766900",
    appId: "1:587853766900:web:a2bbc7fec3ba4830d37ea1",
    measurementId: "G-0L8SMKPGQ9"
  };
  
  // Initialize Firebase
export  const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);

 

 
 