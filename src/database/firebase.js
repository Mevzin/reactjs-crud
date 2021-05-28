import firebase from 'firebase'
  const firebaseConfig = {
    apiKey: "AIzaSyArdezxMUGwvoQJDEL4e1PtT0rew4ugZ48",
    authDomain: "crudbackend-f0acf.firebaseapp.com",
    projectId: "crudbackend-f0acf",
    storageBucket: "crudbackend-f0acf.appspot.com",
    messagingSenderId: "460733504525",
    appId: "1:460733504525:web:0d177a43acfbb3cffe8944",
    measurementId: "G-RW6L0XGZRJ"
  };
  
  let fireDb = firebase.initializeApp(firebaseConfig);
  
 export default fireDb.database().ref();