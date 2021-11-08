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
  const googleSignIn = (history,redirect_uri) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
    .then((result) => {
      const user = result.user;
      setError("");
      setUser(user);
      history.push(redirect_uri);
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    })
    .finally(() => {
      setIsLoading(false);
    });
  };

  /*-------------
  sign up with email and password
  ---------------*/
  const handleSignUpWithEmailPassword = (name, email, password, history,redirect_uri) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        updateDisplayName(name);
        history.push(redirect_uri);
        setError("");
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

  const handleSignInWithEmail = (email, password,history,redirect_uri) => {
     signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      const user = userCredential.user;
      setUser(user);
      history.push(redirect_uri);

      setError("");
    })
    .catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage);
    });
  };

  /*----------------------
  update display name 
  ------------------------*/

  const updateDisplayName = (name) => {
    setIsLoading(true);
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((userCredential) => {
        setUser(userCredential.user);
      })
      .catch(() => {
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
    signOut(auth)
      .then(() => {
        setUser({});
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    setUser,
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
