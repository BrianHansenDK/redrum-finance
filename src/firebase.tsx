// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { DataSnapshot, get, getDatabase, onValue, ref, set, update } from 'firebase/database';
import { EventHandler, useEffect, useState } from "react";
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
        id: userId,
        username: name,
        email: email,
        completion: profileCompletion,
    })
}

export function createAccount (
  userId: string, userName: string, email: string, profileCompletion: number, image?: string, phone_number?: string,
  ) {
  const reference = ref(database, 'users/' + userId)
  set(reference, {
    id: userId,
    username: userName,
    image: image !== undefined ? image : "",
    full_name: "",
    email: email,
    completion: profileCompletion,
    address: "",
    bank_information: "",
    birth_date: "",
    company_account: false,
    country: "",
    money_available: 0,
    payment_method: "PayPal",
    paypal_account: "",
    phone_number: phone_number !== undefined ? phone_number : "",
    state: "",
    withdrawal_method: "PayPal",
    role: 'Redrum Pro Member'
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

export const getCurrentUserFunction = (userId: any, state: any, setLoading: any | undefined) => {
  if (setLoading !== null || setLoading !== undefined) {
    setLoading(true)
  }
  const reference = ref(database, 'users/' + userId)
  get(reference).then((snap) => {
    state(snap.val())
  }).finally(() => {
    if (setLoading !== null || setLoading !== undefined) {
      setLoading(false)
    }
  })
}

export const getCurrentUserOnValue = async (userId: string, state: any) => {
  const reference = ref(database, 'users/' + userId);
  await onValue(reference, (snap) => state(snap.val()));
}

export const userRef = (userId: any, query: string, state: any) => {
    get(ref(database, 'users/' + userId + query)).then((snap) => {
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

export function newUpdateAccount (userId: string, title: string, full_name: string,
  birth_date: Date, email: string, country: string, address: string, phone_number: string,
  then: ((value: void) => void | PromiseLike<void>) | null | undefined,
  error: ErrorCallback, end: () => void,
  company: boolean, companyRole?: string | undefined,
  companyName?: string | undefined, companyAddress?: string | undefined
  ) {
    const reference = ref(database, 'users/' + userId)
    let updates: any = {}
    updates['title'] = title; updates['full_name'] = full_name;
    updates['birth_date'] = birth_date; updates['email'] = email;
    updates['country'] = country; updates['address'] = address;
    updates['phone_number'] = phone_number; updates['company_account'] = company;
    if (companyRole !== undefined) {
      updates['role'] = companyRole
    }
    if (companyName !== undefined) {
      updates['company_name'] = companyName
    }
    if (companyAddress !== undefined) {
      updates['company_address'] = companyAddress
    }
    update(reference, updates).then(then).catch(error)
    .finally(end)
  }

  export function getUserInvestmentsNew(userId: string, setState: any, setLoading?: any) {
    if (setLoading !== undefined) {
      setLoading(true);
    }
    const reference = ref(database, 'investments')
    let data: any[] = []
    get(reference).then((snap) => {
      snap.forEach((inv) => {
        if (inv.val().creator === userId) {
          data.push(inv.val())
        }
      })
      setState(data);
    }).catch((err) => console.log(err)).finally(() => {
      if (setLoading !== undefined) {
        setLoading(false);
      }
    })
  }
