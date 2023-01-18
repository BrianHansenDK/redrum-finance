// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, ref, set } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAcfZUCp3ZxypYvVMutvopwUkpOKPwL38E",
    authDomain: "redrum-finance.firebaseapp.com",
    databaseURL: "https://redrum-finance-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "redrum-finance",
    storageBucket: "redrum-finance.appspot.com",
    messagingSenderId: "218650221731",
    appId: "1:218650221731:web:eb1fb0a6e723f9a8413316",
    measurementId: "G-J0YXF6TLHY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const database = getDatabase(app);

export function writeUserData(
    userId: string,
    name: string,
    email: string,
    image: string | undefined,
    profileCompletion: number) {
    const reference = ref(database, 'users/' + userId)
    set(reference, {
        username: name,
        email: email,
        image: image,
        completion: profileCompletion,
    })
    const investmentRef = ref(database, 'investments/')
    set(investmentRef, {
        userId: {
            amount: 0,
            projects: null,
        }
    })
}

export const userRef = (userId: any, query: string, state: any) => {
    onValue(ref(database, 'users/' + userId + query), (snap) => {
        const data = snap.val()
        state(data)
    })
}