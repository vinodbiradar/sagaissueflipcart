import app from "firebase/app";
import "firebase/auth";

class Firebase {
  constructor() {
    // app.initializeApp(config);
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
