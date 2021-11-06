import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  /*-------------
  google sign in
  ---------------*/
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        setError("");

        setUser(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);

        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };



  /*-------------
  sign up with email and password
  ---------------*/
  const handleSignUpWithEmailPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        setError("");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  /*-------------
  update user name 
  ---------------*/

  const handleSignInWithEmail = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        setError("");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setError(errorMessage);
      });
  };
  /*-------------
  update user name 
  ---------------*/

  const updateDisplayName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        // Profile updated!
        setError("");

        // ...
      })
      .catch((error) => {
        // An error occurred
        setError(error.message);
        // ...
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
        setError("");

        // ...
      } else {
        // User is signed out
        setError(error.message);
        // ...
      }
    });
  }, []);

  /*-------------
  sign out
  ---------------*/

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser({});
        setError("");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
        setError(error.message);
      });
  };

  return {
    user,
    error,
    googleSignIn,
    handleSignOut,
    handleSignUpWithEmailPassword,
    updateDisplayName,
    handleSignInWithEmail,
  };
};

export default useFirebase;
