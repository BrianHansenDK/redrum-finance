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
    profileCompletion: number) {
    const reference = ref(database, 'users/' + userId)
    set(reference, {
        username: name,
        email: email,
        completion: profileCompletion,
    })
}

export function writeMovieData(
    movieId: string,
    title: string,
    intro: string,
    description: string,
    releaseDate: Date,
    genres: string,
    imageUrl: string,
) {
    const reference = ref(database, 'movies/' + movieId)
    set(reference, {
        id: movieId,
        title: title,
        intro: intro,
        description: description,
        releaseDate: releaseDate.toDateString(),
        genres: genres,
        image: imageUrl,
    })
}

export function writeProjectData(
    projectId: string,
    name: string,
    intro: string,
    description: string,
    startDate: string,
    endDate: string,
    publication: string,
    goal: number,
    currentlyInvested: number,
    guaranteedReturn: number,
    value: number,
    movies: Array<any>,
    avatarUrl: string,
    imageUrl: string,
    overviewUrl: string,
    presentationUrl: string,
) {
    const reference = ref(database, 'projects/' + projectId)
    set(reference, {
        id: projectId,
        name: name,
        intro: intro,
        description: description,
        startDate: startDate,
        endDate: endDate,
        publication: publication,
        goal: goal,
        currentlyInvested: currentlyInvested,
        guaranteedReturn: guaranteedReturn,
        value: value,
        movies: movies,
        smallImage: avatarUrl,
        banner: imageUrl,
        overviewImage: overviewUrl,
        presentationImage: presentationUrl,
    })
}

export function getMovies(movieState: any, loaderState: any) {
    const reference = ref(database, 'movies/')
    onValue(reference, (snap) => {
      loaderState(true)
      let data: any[] = []
        snap.forEach((movie) => {
            data.push(movie.val())
        })
        movieState(data)
        loaderState(false)
    })
}

export const getCurrentUser = (userId: any, obj: any, state: any ) => {
  const reference = ref(database, 'users/')
  onValue(reference, (snap) => {
    snap.forEach((user) => {
      if (user.key?.toString() == userId.toString()) {
        obj.setState((_prev: any) => ({
          state: snap.val()
        }))
      }
    })
  })
}

export const getCurrentUserFunction = (userId: any, state: any) => {
  const reference = ref(database, 'users/' + userId)
  onValue(reference, (snap) => {
    state(snap.val())
  })
}

export const userRef = (userId: any, query: string, state: any) => {
    onValue(ref(database, 'users/' + userId + query), (snap) => {
        const data = snap.val()
        state(data)
    })
}

export function getAllUserObjectsInfo(state: any) {
const reference = ref(database, 'users/')
let data: any[] = []
onValue(reference, (snap) => {
  snap.forEach((info) => {
    data.push(info.val())
  })
  state(data)
})
}

export function getUsers(arr: any[], keyArr: any[], state: any, keyState: any) {
    const reference = ref(database, 'users/')
    onValue(reference, (snap) => {
        snap.forEach((user) => {
            arr.push(user.val())
            keyArr.push(user.key)
        })
        state(arr)
        keyState(keyArr)
    }, { onlyOnce: true })
}

export function getInvestments(setInvestments: any) {
  const reference = ref(database, 'investments/')
  let data: any[] = []
  onValue(reference, (list) => {
    list.forEach((investment) => {
      data.push(investment.val())
    })
    setInvestments(data)
  })
}

export const getUserInvestments = (userId: any, state: any) => {
  const reference = ref(database, 'investments/')
  onValue(reference, (snap) => {
    const data: any[] = []
    snap.forEach((investment) => {
      if (investment.val().creator == userId) {
        data.push(investment.val())
      }
    })
    state(data)
  })
}

export function createWithdrawalRequest(requestId: number, userId: any, amount: number, createdAt: number) {
  const reference = ref(database, 'requests/' + requestId)
  set(reference, {
    id: requestId,
    creator: userId,
    amount: amount,
    created_at: createdAt,
    seen: false,
    state: 'new',
  })
}

export function notifyUser(
  notification_id: number,
  created_at: string,
  notification_title: string,
  content: string,
  user_id: string,
  ) {
    const reference = ref(database, 'notifications/' + notification_id)
    set(reference, {
      id: notification_id,
      created_at: created_at,
      read: false,
      title: notification_title,
      content: content,
      user_id: user_id,
    })
  }
