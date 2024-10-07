import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../Firebase/Firebase";
import { setDoc, doc } from "firebase/firestore";

const UserAuthContext = createContext();

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogedIn, setIsLogedIn] = useState(false);

  const logIn = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(auth, email, password);
    setIsLogedIn(true);
    return userCredentials;
  };

  const signUp = async (email, password, username = "") => {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    await setDoc(doc(db, "Users", user.uid), {
      email: user.email,
      username: username,
    });
    return userCredentials;
  };

  const logOut = () => {
    setIsLogedIn(false);
    return signOut(auth);
  };

  const googleSignIn = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    const userCredentials = await signInWithPopup(auth, googleAuthProvider);
    setIsLogedIn(true);
    const user = userCredentials.user;
    await setDoc(doc(db, "Users", user.uid), {
      email: user.email,
      username: user.displayName,
    })
    return userCredentials;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn, isLogedIn }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};
