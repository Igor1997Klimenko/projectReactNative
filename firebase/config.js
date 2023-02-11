import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import "firebase/storage";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_YesX1wPz4Y-Mm9TnK3XqWlGh5u4skHQ",
  authDomain: "test-b7149.firebaseapp.com",
  projectId: "test-b7149",
  storageBucket: "test-b7149.appspot.com",
  messagingSenderId: "87410470564",
  appId: "1:87410470564:web:7de3ad3040189711248031",
  measurementId: "G-KXD264VTMX"
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app)

export { authentication, storage, db }