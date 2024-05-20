import { initializeApp } from 'firebase/app';

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBAtA_Mu_Gdkks2tV3wsZ8NpSWXUr72FbA",
    authDomain: "sprint2rm551821.firebaseapp.com",
    projectId: "sprint2rm551821",
    storageBucket: "sprint2rm551821.appspot.com",
    messagingSenderId: "903861413266",
    appId: "1:903861413266:web:f3bf7ea2385c7787410d4b",
    measurementId: "G-L7K3KW4G11"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { firebaseApp as Firebase, db, auth };



