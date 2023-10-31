import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
    apiKey: "AIzaSyBkCzwcC3lLJ7dxSadFF4yJ3EZDHLoNq5k",
    authDomain: "shosan-test-app.firebaseapp.com",
    projectId: "shosan-test-app",
    storageBucket: "shosan-test-app.appspot.com",
    messagingSenderId: "455065388807",
    appId: "1:455065388807:web:5cdade86a99c429f47e7a2",
    measurementId: "G-47H0CFLE0S"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// const analytics = getAnalytics(app);


