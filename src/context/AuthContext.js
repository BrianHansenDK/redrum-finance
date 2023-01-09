import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { redirect } from "react-router-dom";

const userContext = createContext()
const auth = getAuth()

// Create account
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
        // Signed in
        const user = userCredentials.user
    })
    .catch((err) => {
        const errorCode = err.code
        const errorMessage = err.message
    })

// Sign in
signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
    // Signed in
    const user = userCredentials.user
}).catch((err) => {
    const errorCode = err.code
    const errorMessage = err.message
})

// Observe if signed in
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Signed in
        const username = user.displayName
        const email = user.email

        const uid = user.uid

        // Get provide data 
        user.providerData.forEach((profile) => {
            console.log("Sign-in provider: " + profile.providerId);
            console.log("  Provider-specific UID: " + profile.uid);
            console.log("  Name: " + profile.displayName);
            console.log("  Email: " + profile.email);
        });
    } else {
        // Signed out
    }
})



export const AuthContextProvider = ({ children }) => {
    return (
        <userContext.Provider value={ }>
            {children}
        </userContext.Provider>
    )
}

export const UserAuth = () => {
    return userContext(userContext)
}