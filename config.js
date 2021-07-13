import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAevMxAXxgzupMkSRynbVZiY5Io9RTuAeo",
  authDomain: "barter-system-179b3.firebaseapp.com",
  projectId: "barter-system-179b3",
  storageBucket: "barter-system-179b3.appspot.com",
  messagingSenderId: "731909450112",
  appId: "1:731909450112:web:8a963a4c11020a8b6f7965"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
