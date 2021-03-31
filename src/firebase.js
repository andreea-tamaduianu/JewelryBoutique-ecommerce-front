import firebase from "firebase/app";
import "firebase/auth";
  
  const firebaseConfig = {
    apiKey: "AIzaSyAq-uGuhIs2FSCQBKvT0shsznPSsrVbIzY",
    authDomain: "ecommerce-site-d541d.firebaseapp.com",
    projectId: "ecommerce-site-d541d",
    storageBucket: "ecommerce-site-d541d.appspot.com",
    messagingSenderId: "3180743312",
    appId: "1:3180743312:web:07331723650788cf612615"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();