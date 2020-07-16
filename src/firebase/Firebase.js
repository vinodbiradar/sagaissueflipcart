import app from "firebase/app";
import "firebase/auth";

var config = {
  apiKey: "AIzaSyDeP_zsToFmB5NbIe4eJT4ZCnAMt22u3SE",
  authDomain: "flipcart-6d78e.firebaseapp.com",
  databaseURL: "https://flipcart-6d78e.firebaseio.com",
  projectId: "flipcart-6d78e",
  storageBucket: "flipcart-6d78e.appspot.com",
  messagingSenderId: "789607186397",
  appId: "1:789607186397:web:bffcca8bfddfa581610034",
  measurementId: "G-8P35W297W7",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    console.log(this.auth);
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();
}

export default Firebase;
