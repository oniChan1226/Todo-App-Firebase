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
import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { useCallback } from 'react'

const UserAuthContext = createContext();

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const logIn = async (email, password) => {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
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
    return signOut(auth);
  };

  const googleSignIn = async () => {
    const googleAuthProvider = new GoogleAuthProvider();
    const userCredentials = await signInWithPopup(auth, googleAuthProvider);
    const user = userCredentials.user;
    await setDoc(doc(db, "Users", user.uid), {
      email: user.email,
      username: user.displayName,
    });
    return userCredentials;
  };

  const updateDocument = async (todos) => {
    const userRef = doc(db, "Users", user.uid);
    await updateDoc(userRef, {
      todosList: todos,
    });
  }

  const fetchUser = useCallback(async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "Users", uid));
      if (userDoc.exists()) return userDoc.data();
      return null;
    } catch (error) {
      console.log(`Error in UserAuthContext:: fetchUser:: ${error}`);
      return null;
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserAuthContext.Provider
      value={{ user, logIn, signUp, logOut, googleSignIn, fetchUser, updateDocument }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};
