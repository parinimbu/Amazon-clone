import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2jozyFiJZYMdIdEsq0mze1pX8d8rn5Qg",
    authDomain: "clone-3d08a.firebaseapp.com",
    databaseURL: "https://clone-3d08a.firebaseio.com",
    projectId: "clone-3d08a",
    storageBucket: "clone-3d08a.appspot.com",
    messagingSenderId: "816741731989",
    appId: "1:816741731989:web:fd5e8e70ef895ba4ab559c",
    measurementId: "G-NN6FZWFK7P"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };