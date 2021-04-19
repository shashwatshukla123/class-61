import firebase from 'firebase'
// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCm3DJo6EdQbgB_Bgb4BrXtWwRBsHxl5RA",
    authDomain: "quiz-buzzer-app-7e2f6.firebaseapp.com",
    databaseURL: "https://quiz-buzzer-app-7e2f6-default-rtdb.firebaseio.com",
    projectId: "quiz-buzzer-app-7e2f6",
    storageBucket: "quiz-buzzer-app-7e2f6.appspot.com",
    messagingSenderId: "114780562258",
    appId: "1:114780562258:web:33ef3d4b338ff1152c508b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database()