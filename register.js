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

  firebase.initializeApp(firebaseConfig);
  
  function register(event){

   document.getElementById('loadingscreen').style.display = "block";
    event.preventDefault()
    name = document.getElementById('name').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    TotalIncome = ""
    firebase.auth().createUserWithEmailAndPassword(email, password)
    
  .then((userCredential) => { 
    var user1 = userCredential.user;
    console.log(user1)
    document.getElementById('loadingscreen').style.display = "none";
    console.log('Account created successfully')
    alert('Account created Successfully')
    document.getElementById("registerform").reset();
    
    firebase.database().ref('Users/' + user1.uid).set({
      UserId: user1.uid,
      Name : name,
       Email: email,
       TotalIncome : TotalIncome
       
  
    })
   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  
  });
  

  
  }

 