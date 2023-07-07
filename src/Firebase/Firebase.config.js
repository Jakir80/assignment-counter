import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHW05kJUHVJ79FEN7bbUXSxT4eFUEe2To",
  authDomain: "intern-shala-assignment-reverr.firebaseapp.com",
  projectId: "intern-shala-assignment-reverr",
  storageBucket: "intern-shala-assignment-reverr.appspot.com",
  messagingSenderId: "230779415364",
  appId: "1:230779415364:web:3d5d72512888484aba0511"
};

const app = initializeApp(firebaseConfig);
export default app;