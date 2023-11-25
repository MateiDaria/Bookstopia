// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAxykY-9OEWVmOR-Q4ON1g9ezV5kPwqhhA",
      authDomain: "book-3de54.firebaseapp.com",
      projectId: "book-3de54",
      storageBucket: "book-3de54.appspot.com",
      messagingSenderId: "855079062104",
      appId: "1:855079062104:web:4f245520f60b0c67f8d82d"
    };
    
    // Initialize Firebase

initializeApp(firebaseConfig);
export const auth = getAuth();