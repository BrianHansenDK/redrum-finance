// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { DataSnapshot, getDatabase, onValue, ref, set } from 'firebase/database';
import { useEffect, useState } from "react";
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
            moneyInvested: 0,
        }
    })
}

export function writeMovieData(
    movieId: string,
    title: string,
    intro: string,
    description: string,
    releaseDate: Date,
    genres: string) {
    const reference = ref(database, 'movies/' + movieId)
    set(reference, {
        id: movieId,
        title: title,
        intro: intro,
        description: description,
        releaseDate: releaseDate.toDateString(),
        genres: genres,
    })
}

export function writeProjectData(
    projectId: string,
    name: string,
    intro: string,
    description: string,
    startDate: string,
    endDate: string,
    goal: number,
    currentlyInvested: number,
    guaranteedReturn: number,
    value: number,
    movies: Array<any>,
) {
    const reference = ref(database, 'projects/' + projectId)
    set(reference, {
        id: projectId,
        name: name,
        intro: intro,
        description: description,
        startDate: startDate,
        endDate: endDate,
        goal: goal,
        currentlyInvested: currentlyInvested,
        guaranteedReturn: guaranteedReturn,
        value: value,
        movies: movies,
    })
}

function getMovies() {
    const reference = ref(database, 'movies/')
    onValue(reference, (snap) => {
        let data: any[] = []
        snap.forEach((movie) => {
            data.push(movie.val())
        })
        return data
    })
}

export const userRef = (userId: any, query: string, state: any) => {
    onValue(ref(database, 'users/' + userId + query), (snap) => {
        const data = snap.val()
        state(data)
    })
}