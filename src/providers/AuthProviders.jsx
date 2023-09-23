import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current User : ", currentUser);
      setLoading(false);
      if (currentUser && currentUser.email) {
        const loggedUser = { email: currentUser.email };
        fetch(
          `https://car-doctor-server-aqmau35c6-nayan-suters-projects.vercel.app/jwt`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(loggedUser),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt Response", data);
            //! set token in localStorage which is not best practice
            localStorage.setItem("car-doctor-token", data.token);
            // navigate(from, { replace: true });
          });
      } else {
        localStorage.removeItem("car-doctor-token");
      }
    });
    return () => {
      return unsubscribed();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
