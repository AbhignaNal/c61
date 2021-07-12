import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB3DYP5extnaJbytW9Q8ZF0MIeUlO3Xhk8",
    authDomain: "school-attendance-e7053.firebaseapp.com",
    projectId: "school-attendance-e7053",
    storageBucket: "school-attendance-e7053.appspot.com",
    messagingSenderId: "312245794911",
    appId: "1:312245794911:web:1e19052e5644a09f24c3ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.database();