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


function functionon(){
    document.getElementById('chatbot').style.display = "block";
    document.getElementById('analytics').style.display = "none";
    document.getElementById("anchor1").className = "active";
    document.getElementById("ana").className = "";
 
    
 

}

firebase.auth().onAuthStateChanged((user) => {
    if (user){
        const dbRef = firebase.database().ref();
dbRef.child("Users/" + user.uid ).get().then((snapshot) => {
  if (snapshot.exists()) {

    var childData = snapshot.val().Name;
    var childData1 = snapshot.val().TotalIncome;
    var childData2 = snapshot.val().TotalSpent;
    var childData3 = childData1- childData2;
   

    // console.log(moneyadded)
    document.getElementById('name').innerHTML = childData;
    document.getElementById('totalincome1').innerHTML = childData1;
    document.getElementById('totalincome2').innerHTML = childData1;
    document.getElementById('spentIncome1').innerHTML = childData2;
    document.getElementById('savedIncome1').innerHTML = childData3;
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});

        

    } else {
      // User is signed out
      // ...
    }
  });
function incomesubmit(event){
    event.preventDefault()
    var userincome = document.getElementById('input1').value
    const dbRef = firebase.database().ref();
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
          
        }
    
    dbRef.child("Users/" + user.uid ).get().then((snapshot) => {
      if (snapshot.exists()) {
        var income = snapshot.val().TotalIncome;
     
        var update = {
            TotalIncome : userincome
        }
        firebase.database().ref("Users/" + user.uid).update(update)
          alert('Total Income entered Successfully')
          document.getElementById("incomesubmitform").reset();
         var element= document.getElementById('totalincome1').innerHTML = income;
      }

     
      
      else {
        console.log("No data available");
      }

     
          
      
      
      
    }).catch((error) => {
      console.error(error);
    });
});
   
  
}


function moneyspent(event){
  event.preventDefault()
  // console.log('error')
  
  const dbRef = firebase.database().ref();

  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      // console.log(user)

    }
      var userspent = document.getElementById('input2').value

      firebase.database().ref("Users/" + user.uid).get().then((snapshot) =>{
        if(snapshot.exists()){
          
          // console.log(userspent)
  
           var update = {
            TotalSpent : userspent
          }
          firebase.database().ref("Users/" + user.uid).update(update)
          alert('spent money has been entered successfully')
          document.getElementById("spentsubmitform").reset();
         
        }
     
      })
      

   
     
    
  
  })

}

//  logout function 
function logout(){
    firebase.auth().signOut().then(function() {
        alert("Logout Successfull")
        location.replace("login.html")
      }, function(error) {
        console.log(error)
      });
      
}
function chatbotfunction(){
  alert('this section will be updated later')
}

