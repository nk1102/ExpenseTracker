  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBYd1MQtG5Jk9S2x2UGhb9Aoo1gDCutJ2w",
    authDomain: "expense-tracker-cea34.firebaseapp.com",
    projectId: "expense-tracker-cea34",
    storageBucket: "expense-tracker-cea34.appspot.com",
    messagingSenderId: "1042561871276",
    appId: "1:1042561871276:web:ccd28981f37888638dde09",
    measurementId: "G-YCGM4VLW55"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
