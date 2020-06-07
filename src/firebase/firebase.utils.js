import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBQGIZ_2kyd7QhpMIODG4_CeDC8ukvpqcs",
    authDomain: "crown-clothing-1bf68.firebaseapp.com",
    databaseURL: "https://crown-clothing-1bf68.firebaseio.com",
    projectId: "crown-clothing-1bf68",
    storageBucket: "crown-clothing-1bf68.appspot.com",
    messagingSenderId: "606188692259",
    appId: "1:606188692259:web:c81dfd1913c7a8d740a296",
    measurementId: "G-DXTNNG0LWP"
  };
   
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;