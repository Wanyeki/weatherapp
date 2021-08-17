
import firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyBnTdbA70LBf2FiQchk5B-X8F4BI6R_las",
  authDomain: "weatherfs.firebaseapp.com",
  projectId: "weatherfs",
  storageBucket: "weatherfs.appspot.com",
  messagingSenderId: "260894720720",
  appId: "1:260894720720:web:04bdc40d8ebc4bd6b9d4d5",
  measurementId: "G-4FZQ0BV96L"
};

const myApp =firebase.initializeApp(firebaseConfig);
export const storage=firebase.storage();
export const firestore=firebase.firestore();
export const auth = myApp.auth();
export const fireb=firebase
export let timestamp=firebase.firestore.FieldValue.serverTimestamp();
firestore.enablePersistence().catch(
  e=>{console.log('failed');}
)