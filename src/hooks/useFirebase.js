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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  /*-------------
  google sign in
  ---------------*/
  const googleSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  /*-------------
  sign up with email and password
  ---------------*/
  const handleSignUpWithEmailPassword = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        updateDisplayName(name);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  /*-------------
  update user name 
  ---------------*/

  const handleSignInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  /*-------------
  update user name 
  ---------------*/

  const updateDisplayName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setError("");

        // ...
      }
      setIsLoading(false);
    });
  }, []);

  /*-------------
  sign out
  ---------------*/

  const handleSignOut = () => {
    setIsLoading(true);
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
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    isLoading,
    setIsLoading,
    error,
    setError,
    googleSignIn,
    handleSignOut,
    handleSignUpWithEmailPassword,
    handleSignInWithEmail,
  };
};

export default useFirebase;
