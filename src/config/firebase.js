import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCj2MyK2_Dl2dIsZiPG8uCl3SankREQvtI",
  authDomain: "firestoretest-95f3e.firebaseapp.com",
  projectId: "firestoretest-95f3e",
  storageBucket: "firestoretest-95f3e.appspot.com",
  messagingSenderId: "703555646370",
  appId: "1:703555646370:web:abc1597d030303f78478fb",
  measurementId: "G-D29LSY77HY"
};
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export const auth = getAuth(app);
