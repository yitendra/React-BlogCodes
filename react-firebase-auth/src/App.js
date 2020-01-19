import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import  firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


const App = ({
      user,
      signOut,
      signInWithGoogle,
    }) =>{
    return (
      <div className="App">
        {
        user 
          ? <p>Hello, {user.displayName}</p>
          : <p>Please sign in.</p>
        }
        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }
      </div>
    )
  }


export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
