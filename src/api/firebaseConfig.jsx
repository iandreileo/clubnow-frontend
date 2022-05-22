import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const firebaseConfig = {
  apiKey: "AIzaSyCy8DjSteCjsXxdw52uKn2SkGjaGI3PREo",

  authDomain: "clubnow-2f488.firebaseapp.com",

  projectId: "clubnow-2f488",

  storageBucket: "clubnow-2f488.appspot.com",

  messagingSenderId: "132050914827",

  appId: "1:132050914827:web:71e4d5cce673ac0125010e",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const logInWithEmailAndPassword = async ({ email, password }) => {
  console.log(email, password);
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    toast.error(err.message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};

export const registerWithEmailAndPassword = async ({ email, password }) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    console.log(user);
  } catch (err) {
    console.error(err);
    toast.error(err.message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};

export const forgotPasswordWithEmail = async (email) => {
  try {
    const res = await auth.sendPasswordResetEmail(email).then(function () {
      toast.success("Va rugam sa va verificati email-ul!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    });
  } catch (err) {
    console.error(err);
    toast.error(err.message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};

export default firebase;
