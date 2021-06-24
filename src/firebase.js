import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA_dVdKzwEwGFTaR1lFdCxibEp-mzWoz5w",
    authDomain: "netflix-clone-bfac4.firebaseapp.com",
    projectId: "netflix-clone-bfac4",
    storageBucket: "netflix-clone-bfac4.appspot.com",
    messagingSenderId: "404149998512",
    appId: "1:404149998512:web:d572a3d1859ccbd217bc75"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

export {auth};
export default db;