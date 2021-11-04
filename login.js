var firebaseConfig = {
    apiKey: "AIzaSyBYd1MQtG5Jk9S2x2UGhb9Aoo1gDCutJ2w",
    authDomain: "expense-tracker-cea34.firebaseapp.com",
    databaseURL: "https://expense-tracker-cea34-default-rtdb.firebaseio.com",
    projectId: "expense-tracker-cea34",
    storageBucket: "expense-tracker-cea34.appspot.com",
    messagingSenderId: "1042561871276",
    appId: "1:1042561871276:web:ccd28981f37888638dde09",
    measurementId: "G-YCGM4VLW55"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function login(event){
    event.preventDefault()
    document.getElementById('loadingscreen').style.display = "block";
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential) => { 
      var user1 = userCredential.user;
      document.getElementById('loadingscreen').style.display = "none";
      console.log('login successfull')
      document.getElementById("loginform").reset();
      firebase.auth().onAuthStateChanged(user => {
        if(user) {
          window.location = 'dashboard.html'; 
        }
      });
     
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
      
      document.getElementById('loadingscreen').style.display = "none";
      
      document.getElementById("loginform").reset()
    });
  }