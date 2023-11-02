// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { DataSnapshot, get, getDatabase, onValue, ref, remove, set, update } from 'firebase/database';
import { EventHandler, useEffect, useState } from "react";
import { getRealAge } from "./misc/custom-hooks";
import { FirebaseBundle, FirebaseInvestment, FirebaseMovie, FirebaseNotification, FirebasePromo, FirebaseShare, FirebaseUser } from "./database/Objects";
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

// User functions
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

export function getAllUserIds(setCodes: any) {
  let data: string[] = []
  const reference = ref(database, 'users/')
  onValue(reference, (snap) => {
    snap.forEach((user) =>  {
      data.push(user.val().id)
    })
    setCodes(data)
  })
}

export function createAccount (
  userId: string, userName: string, email: string, dmsId: number, profileCompletion: number, image?: string, phone_number?: string,
  ) {
  const reference = ref(database, 'users/' + userId)
  set(reference, {
    id: userId,
    dms_id: dmsId,
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
    role: 'Redrum Pro Member',
    zip_code: '',
    city: '',
    street: '',
    house_number: '',
    address_extra_1: '',
    address_extra_2: ''
  })
}

export function newUpdateAccount (user: FirebaseUser, userId: string, title: string, full_name: string,
  birth_date: string, email: string, country: string, 
  zip_code: string, city: string, street: string, house_number: string,
  address_extra_1: string, address_extra_2: string,
  phone_number: string, 
  then: ((value: void) => void | PromiseLike<void>) | null | undefined,
  error: ErrorCallback, end: () => void,
  company: boolean, companyRole?: string | undefined,
  companyName?: string | undefined, companyAddress?: string | undefined, companyWebsite?: string | undefined
  ) {
    const reference = ref(database, 'users/' + userId)
    let updates: any = {}
    updates['title'] = title; updates['full_name'] = full_name;
    updates['birth_date'] = birth_date; updates['email'] = email;
    updates['country'] = country; updates['zip_code'] = zip_code;
    updates['city'] = city; updates['street'] = street;
    updates['house_number'] = house_number; updates['address_extra_1'] = address_extra_1;
    updates['address_extra_2'] = address_extra_2;
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
    if (companyWebsite !== undefined) {
      updates['website'] = companyWebsite
    }
    if  ((title !== "" || user.title !== "") && (full_name !== "" || user.full_name !== "") && (birth_date !== "" || user.birth_date !== "") &&
    (country !== "" || user.country !== "") && ((zip_code !== '' || user.zip_code !== "") && (city !== '' || user.city !== "") && 
    (street !== '' || user.street !== "") && (house_number !== '' || user.house_number !=="")) && (phone_number !== "" || user.phone_number !== "")) {
      const age = user.birth_date !== "" ? getRealAge(new Date(user.birth_date)) : getRealAge(new Date(birth_date))
      if (age < 18) updates["completion"] = 90
      else updates["completion"] = 100
    }
    update(reference, updates).then(then).catch(error)
    .finally(end)
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

export function addUserMoney(userId: string, addition: number) {
  const reference = ref(database, 'users/' + userId)
  get(reference).then((snap) => {
    let updates: any = {}
    updates['money_available'] = snap.val().money_available + addition
    update(reference, updates)
  })
}

export function userRefOnValue (userId?: string) {
  const reference = ref(database, `users/${userId}`);
  let data = 0;
  onValue(reference, (snap) => {
    data += snap.val().money_available
  })
  return data;
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

export function getUserLenght(setCount: any) {
  let data: FirebaseUser[] = []
  const reference = ref(database, 'users/')
  get(reference).then((snap) => {
    snap.forEach((user) => {
      data.push(user.val())
    })
  }).finally(() => setCount(data.length + 1))
}

// Backend functions
export function writeMovieData(
    movieId: string,
    title: string,
    intro: string,
    description: string,
    releaseDate: Date,
    genres: string,
    imageUrl: string,
    trailerUrl: string
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
        trailer_url: trailerUrl
    })
}

export function writeProjectData(
    projectId: number,
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
    galleryUrls: string[] | [],
    pitchVideo: string,
    files: {name: string, url: string}[] | [],
    hasClosure: boolean,
    closure: String
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
        image_gallery_urls: galleryUrls,
        pitch_video: pitchVideo,
        files: files,
        closure: hasClosure ? closure : ""
    })
}

export function updateProjectFiles(projectId: number, files: {name: string, url: string}[], then: any) {
  const reference = ref(database, 'projects/' + projectId)
  let updates: any = {}
  updates['files'] = files;
  update(reference, updates).then(then)
}

export function updateProjectContract(projectId: number, contractUrl: string, then: any, ifErr: any, end: any) {
  const reference = ref(database, 'projects/' + projectId)
  let updates: any = {}
  updates['contract'] = contractUrl;
  update(reference, updates).then(then).catch(ifErr).finally(end)
}

export function updateProjectGermanContract(projectId: number, contractUrl: string, then: any, ifErr: any, end: any) {
  const reference = ref(database, 'projects/' + projectId)
  let updates: any = {}
  updates['contract_german'] = contractUrl;
  update(reference, updates).then(then).catch(ifErr).finally(end)
}

export async function updateProjectGallery(projectId: number, galleryImageUrls: string[]) {
  const reference = ref(database, 'projects/' + projectId);
  const imgRef = ref(database, `projects/${projectId}/image_gallery_urls`);

  // Retrieve the existing gallery image URLs
  const snap = await get(imgRef);
  const existingUrls = snap.val() || [];

  // Create a Set to store unique URLs
  const uniqueUrls = new Set(existingUrls);

  // Add the new gallery image URLs to the Set
  galleryImageUrls.forEach((url) => uniqueUrls.add(url));

  // Convert the Set back to an array
  const updatedUrls = Array.from(uniqueUrls);

  // Create an update object with the updated URLs
  const updates: any = {
    'image_gallery_urls': updatedUrls,
  };

  // Update the reference with the combined list
  await update(reference, updates);
}

// Movies

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

export function getMovieTrailers(MovieIds: number[], setTrailers: any, setLoading: any) {
  setLoading(true);
  let data: string[] = [];

  const reference = ref(database, 'movies/');
  get(reference).then((snap) => {
    snap.forEach((movie) => {
      if (MovieIds.includes(movie.val().id)){
        data.push(movie.val().trailer_url);
      }})
  }).catch((err) => {
    console.error(err);
  }).finally(() => {
    setTrailers(data);
    setLoading(false);
  })
}

export function getSpecificMovies(MovieIds: number[], setMovies: any, setLoading: any) {
  setLoading(true);
  let data: FirebaseMovie[] = [];
  const reference = ref(database, 'movies/');
  get(reference).then((snap) => {
    snap.forEach((movie) => {
      if (MovieIds.includes(movie.val().id)){
        data.push(movie.val());
      }})
    }).catch((err) => {
    console.error(err);
  }).finally(() => {
    setMovies(data);
    setLoading(false);
  })
}

// Projects

export function getSpecificProject(projectId: string, setState: any, setLoading?: any) {
  if (setLoading !== undefined) { setLoading(true); }
  const reference = ref(database, 'projects/' + projectId);
  get(reference).then((snap) => setState(snap.val())).catch((err) => console.log(err))
  .finally(() => {
    if (setLoading !== undefined) {setLoading(false);}
  })
}

export function getProjectCountWithProjects(setAll: any, ProjectsInvestedIn: FirebaseBundle[], setProjects: any, setLoading: any) {
  setLoading(true)
  let count = 0
  let projects: FirebaseBundle[] = []
  const reference = ref(database, 'projects/')
  get(reference).then((snap) => {
    snap.forEach((project) => {
      if (ProjectsInvestedIn.some((elem) => elem.id === project.val().id)) {
        count += 1
        projects.push(project.val())
      }
    })
  }).finally(() => {
    setAll(count); setProjects(projects)
    setLoading(false)
  })
}

export function getProjectCount(setCount: any) {
  let data: FirebaseBundle[] = []
  const reference = ref(database, 'projects/')
  get(reference).then((snap) => {
    snap.forEach((project) => {
      data.push(project.val())
    })
  }).finally(() => setCount(data.length + 1))
}


// Investments
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

export function getAllInvestedInProjects(setState: any) {
  const reference = ref(database, "projects");
  let data = 0
  onValue(reference, (snap) => {
    snap.forEach((project) => {
      data += project.val().currentlyInvested
    })
    setState(data)
  })
}


// Withdrawal
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


// Notifications

export function notifyUser(
  userId: string, titleEN: string, titleDE: string, contentEN: string[], contentDE: string[]
  ) {
    const todayDT = Date.now()
    const today = new Date(todayDT)
    const reference = ref(database, 'notifications/' + todayDT)
    set(reference, {
      id: todayDT,
      created_at: today.toJSON(),
      read: false,
      user_id: userId,
      title_en: titleEN,
      title_de: titleDE,
      content_en: contentEN,
      content_de: contentDE,
      notification_type: 'response'
    })
}

export function createAccountSuccessNotification(userId: string) {
  const todayDT = Date.now()
  const today = new Date(todayDT)
  const reference = ref(database, 'notifications/' + todayDT)
  set(reference, {
    id: todayDT,
    created_at: today.toJSON(),
    read: false,
    user_id: userId,
    title_en: 'Welcome to Redrum Pro!',
    title_de: 'Willkommen bei RedrumPro!',
    content_en: [
      'Dear Redrum Producer,',

      'Welcome to RedrumPro! With your registration, you`re able now to purchase shares ' +
      'in your dream projects starting at 1€ - quickly and conveniently like never before. ' +
      'Participate in the value development of unique entertainment projects. ',

      'Have fun!',

      'Best regards',

      'Lisa from your Redrum Pro Team'
    ],
    content_de: [
      'Hallo Redrum Producer,',

      'Willkommen bei RedrumPro! Mit deiner Anmeldung kannst du nun ab 1 Euro Anteile ' +
      'an deinen Traumprojekten erwerben, und das so schnell und bequem wie nie. ' +
      'Partizipiere an der Wertentwicklung von einzigartigen Unterhaltungsprojekten.',

      'Viel Spaß!',

      'Liebe Grüße',

      'Lisa vom RedrumPro Team',
    ],
    notification_type: 'account',
  })
}

export function createInvestmentNotification(userId: string, projectName: string) {
  const todayDT = Date.now()
  const today = new Date(todayDT)
  const reference = ref(database, 'notifications/' + todayDT)
  set(reference, {
    id: todayDT,
    created_at: today.toJSON(),
    read: false,
    user_id: userId,
    title_en: `Investment received! - ${projectName}`,
    title_de: `Investition erhalten! - ${projectName}`,
    content_en: [
      'Congratulations and welcome to the team!',

      `You are now an official producer of ${projectName} and you can benefit ` +
      'from the increase in the value of your shares!',

      'Here you will find your production contract and the corresponding invoice. ' +
      'Don`t worry, both documents are also available in the "Producer Database" ' +
      'and can be downloaded easily at any time.',

      'Our team is always ready to assist you with any questions or concerns. ' +
      'Do not hesitate to contact us if you need support.',

      'Thank you for being part of RedrumPro!',

      'All the best',

      'Michael Merhi'
    ],
    content_de: [
      'Herzlichen Glückwunsch &amp; willkommen im Team!',

      `Du bist nun offizieller Producer von ${projectName} ` +
      'und kannst von den Wertsteigerungen deiner Anteile profitieren!',

      'Hier findest du deinen Produktionsvertrag und die dazugehörige Rechnung. ' +
      'Keine Sorge, beide Dokumente findest du auch in der "Producer Datenbank" ' +
      'und kannst sie jederzeit problemlos herunterladen.',

      'Unser Team ist stets bereit, dir bei Fragen zu helfen. Wenn du Unterstützung ' +
      'benötigst oder mehr über unsere Projekte erfahren möchtest, dann zögere nicht, uns ' +
      'zu kontaktieren.',

      'Vielen Dank, dass du Teil von RedrumPro bist!',

      'Beste Grüße',

      'Michael Merhi'
    ],
    notification_type: 'investment',
  })
}

export function createDepositNotification(userId: string) {
  const todayDT = Date.now()
  const today = new Date(todayDT)
  const reference = ref(database, 'notifications/' + todayDT)
  set(reference, {
    id: todayDT,
    created_at: today.toJSON(),
    read: false,
    user_id: userId,
    title_en: 'You are now ready to go!',
    title_de: 'Du bist jetzt startklar!',
    content_en: [
      'You have successfully topped up your balance in the RedrumPro App! ' +
      'Now you can invest in unique entertainment projects and join us in making film history. ',

      'Our team is always ready to assist you with any questions. ' +
      'Do not hesitate to contact us if you need support or want to learn more about our projects.',

      'Thank you for being part of RedrumPro! ',

      'Best regards',

      'Khaled'
    ],
    content_de: [
      'Du hast erfolgreich dein Guthaben in der RedrumPro App aufgeladen! ' +
      'Nun kannst du in einzigartige Unterhaltungsprojekte investieren und gemeinsam mit uns Filmgeschichte schreiben. ',

      'Unser Team ist stets bereit, dir bei Fragen zu helfen. ' +
      'Wenn du Unterstützung benötigst oder mehr über unsere Projekte erfahren möchtest, dann zögere nicht, ' +
      'uns zu kontaktieren. ',

      'Vielen Dank, dass du Teil von RedrumPro bist!',

      'Beste Grüße',

      'Khaled',
    ],
    notification_type: 'deposit',
  })
}

export function createWithdrawalNotification(userId: string) {
  const todayDT = Date.now()
  const today = new Date(todayDT)
  const reference = ref(database, 'notifications/' + todayDT)
  set(reference, {
    id: todayDT,
    created_at: today.toJSON(),
    read: false,
    user_id: userId,
    title_en: 'Withdrawal request received!',
    title_de: 'Auszahlungsanforderung erhalten!',
    content_en: [
      'Dear Redrum Producer,',

      'We hereby confirm that your withdrawal request has been successfully received and ' +
      'the money is on its way to your specified account. ' +
      'This may take up to 2-3 business days.',

      'Our team is always ready to assist you with any questions or concerns. ' +
      'Do not hesitate to contact us if you need support.',

      'Thank you for your trust! See you soon.',

      'Best regards',

      'Khaled'
    ],
    content_de: [
      'Lieber Redrum Producer, ',

      'Wir bestätigen hiermit, dass deine Auszahlungsanfrage erfolgreich bei uns ' +
      'eingegangen ist und das Geld auf dem Weg zu deinem angegebenen Konto ist. ' +
      'kann bis zu 2-3 Werktage in Anspruch nehmen.',

      'Unser Team ist stets bereit, dir bei Fragen zu helfen. Wenn du Unterstützung ' +
      'benötigst oder mehr über unsere Projekte erfahren möchtest, dann zögere nicht, ' +
      'uns zu kontaktieren.',

      'Vielen Dank für dein Vertrauen! Bis bald.',

      'Liebe Grüße',

      'Khaled',
    ],
    notification_type: 'withdrawal',
  })
}

export function createPromoNotification(userId: string, investor: FirebaseUser, project: FirebaseBundle, invested: number) {
  const todayDT = Date.now()
  const today = new Date(todayDT)
  const reference = ref(database, 'notifications/' + todayDT)
  set(reference, {
    id: todayDT,
    created_at: today.toJSON(),
    read: false,
    user_id: userId,
    title_en: `${investor.username} has used your promo code!`,
    title_de: `${investor.username} hat Deinen Promo-Code verwendet!`,
    content_en: [
      'Dear Redrum Producer,',

      'We would like to inform you that another user has recently used your promo code ' +
      `for our Project "${project.name}". This means that you will be credited with ${invested * 0.1}€ to ` +
      'your RedrumPro account in 14 days.',

      'Congratulations on this success!',

      'Best regards',

      'Khaled'
    ],
    content_de: [
      'Lieber Redrum Producer, ',
      'Wir möchten Dir mitteilen, dass ein anderer Benutzer kürzlich Ihren Promo-Code für ' +
      `unser Projekt "${project.name}" verwendet hat. Das bedeutet, dass Du in 14 Tagen ` +
      `${invested * 0.1}€ auf Dein RedrumPro Konto gutgeschrieben bekommen wirst.` ,

      'Herzlichen Glückwunsch zu diesem Erfolg!',

      'Liebe Grüße',

      'Khaled'
    ],
    notification_type: 'promotion',
  })
}

export function notifyRedrumOfPromotion(investor: FirebaseUser, receiver: string, project: FirebaseBundle, invested: number, bonus: number) {
  const todayDT = Date.now()
  const today = new Date(todayDT)
  const userRef = ref(database, 'users/' + receiver)
  get(userRef).then((snap) => {
    const reference = ref(database, 'notifications/' + todayDT)
    set(reference, {
      id: todayDT,
      created_at: today.toJSON(),
      read: false,
      user_id: 'fjjXuazMFhNFLhVVSwrzPYaGwOd2',
      title_en: `${investor.username} used a promo code!`,
      title_de: `${investor.username} hat ein Promo-Code verwendet!`,
      content_en: [
        'Dear Redrum Team,',

        `a user's promo code was recently used for the ${project.name} bundle, ` +
        `which means the investor (${investor.email}) have bought share worth ${invested + bonus} in the movies included in the bundle. ` +
        `Additionally the sender of the promocode: (${snap.val().email}) has gained ${invested * 0.1} extra to their account balance. `,

        'Please note that the investor has already received an invoice and framework agreement for their  ' +
        'participation in our referral program.',

        'Best regards',

        'The Redrum Pro App'
      ],
      content_de: [
        'Lieber Redrum Team, ',

        `ein Benutzer hat kürzlich den Promo-Code für das Bundle ${project.name} verwendet, was ` +
        `bedeutet, dass der Investor (${investor.email}) Anteile im Wert von ${invested + bonus} in ` +
        'den inbegriffenen Filmen erworben hat. Zusätzlich hat der Absender des Promo-Codes ' +
        `(${snap.val().email}) ${invested * 0.1} in sein guthaben.`,

        'Bitte beachten Sie, dass die investor bereits eine Rechnung und einen Rahmenvertrag ' +
        'für ihre Teilnahme an unserem Empfehlungsprogramm erhalten haben.',

        'Beste Grüße',

        'Die Redrum Pro App',
      ],
      notification_type: 'promotion',
    })
    const newDT = today.getTime() + 1
    const newDate = new Date(newDT)
    set(reference, {
      id: newDT,
      created_at: newDate.toJSON(),
      read: false,
      user_id: 'M4lai7LDnBapuSUilGxqPb08jFi1',
      title_en: `${investor.username} used a promo code!`,
      title_de: `${investor.username} hat ein Promo-Code verwendet!`,
      content_en: [
        'Dear Redrum Team,',

        `a user's promo code was recently used for the ${project.name} bundle, ` +
        `which means the investor (${investor.email}) have bought share worth ${invested + bonus} in the movies included in the bundle. ` +
        `Additionally the sender of the promocode: (${snap.val().email}) has gained ${invested * 0.1} extra to their account balance. `,

        'Please note that the investor has already received an invoice and framework agreement for their  ' +
        'participation in our referral program.',

        'Best regards',

        'The Redrum Pro App'
      ],
      content_de: [
        'Lieber Redrum Team, ',

        `ein Benutzer hat kürzlich den Promo-Code für das Bundle ${project.name} verwendet, was ` +
        `bedeutet, dass der Investor (${investor.email}) Anteile im Wert von ${invested + bonus} in ` +
        'den inbegriffenen Filmen erworben hat. Zusätzlich hat der Absender des Promo-Codes ' +
        `(${snap.val().email}) ${invested * 0.1} in sein guthaben.`,

        'Bitte beachten Sie, dass die investor bereits eine Rechnung und einen Rahmenvertrag ' +
        'für ihre Teilnahme an unserem Empfehlungsprogramm erhalten haben.',

        'Beste Grüße',

        'Die Redrum Pro App',
      ],
      notification_type: 'promotion',
    })
  })
}

export function markNotificationAsRead(notification: FirebaseNotification) {
  if (notification.read === false) {
    const reference = ref(database, 'notifications/' + notification.id)
    const updates: any = {}
    updates['read'] = true;
    update(reference, updates)
  }
}
export function getNotificationValues(setState: any, userId?: string) {
  if (userId !== null) {

    // List of values of weather each notification is read or not
    let data: any[] = []

    const reference = ref(database, 'notifications')
    onValue(reference, (snap) => {
      snap.forEach((notification) => {
        if (notification.val().user_id === userId && notification.val().read === false) {
          data.push(notification.val().read)
        }
      })
      setState(data)
    })
  }
}

export function getUserNotificationCount(userId: string, setState: any, setLoading: any) {
  setLoading(true)
  // Notification count
  let count = 0

  const reference = ref(database, 'notifications')
  get(reference).then((snap) => {
    snap.forEach((notification) => {
      if (notification.val().user_id === userId && notification.val().read === false) {
        count += 1
      }
    })
    setState(count)
  }).catch((err) => {
    console.log(err)
  }).finally(() => setLoading(false))
}

export function deleteNotification(notificationId: number, then: (value: void) => void | PromiseLike<void>) {
  const reference = ref(database, 'notifications/' + notificationId)
  remove(reference).then(then)
}


// Invoices

export function createInvoice(id: number, project: FirebaseBundle, user: FirebaseUser, investment: FirebaseInvestment) {
  const reference = ref(database, 'invoices/' + id)
  const todayDT = Date.now()
  const today = new Date(todayDT)
  set(reference, {
    id: id,
    created_at: today.toJSON(),
    investor_email: user.email,
    user_id: user.id,
    investment_id: investment.id,
    bundle_id: project.id,
    project_ids: project.movies,
  }).catch((err) => console.log(err))
}

export function getInvoiceCount(setCount: any) {
  const data: any[] = []
  const reference = ref(database, 'invoices/')
  onValue(reference, (snap) => {
    snap.forEach((invoice) => {
      data.push(invoice.val())
    })
    setCount(data.length + 1)
  })
}

export function getRelevantInvoice(invoiceId: number, setInvoice: any, setLoading: any) {
  setLoading(true)
  const reference = ref(database, 'invoices/' + invoiceId)
  get(reference).then((snap) => {
    setInvoice(snap.val())
  }).finally(() => {
    setLoading(false)
  })
}


// Shares

export function getUserShares(userId: string, projectId: number, setShares: any, setSum: any) {
  let data: FirebaseShare[] = []
  let finalData: FirebaseShare[] = []
  let sum = 0
  let index = 0
  const reference = ref(database, 'shares')
  get(reference).then((snap) => {
    snap.forEach((share) => {
      if (share.val().owner === auth.currentUser?.uid && projectId === share.val().project) {
        data.push(share.val())
      }
    })
    data.forEach((share, index) => {
      if (index === 0 || data.includes(share)) {
        sum += share.amount
      }
      if (index == 0 || data.some(x => x.movie !== share.movie)) {
        console.log(share)
        finalData.push(share)
      }
    })
    index += 1
    setShares(finalData)
    setSum(sum)
  })
}

// PromoCodes

export function createPromoRequest (id: number, invested: number,
  promotionGain: number,
  investorId: string,
  promoterId: string,
  createdAt: string) {
    const reference = ref(database, 'promo-usages/' + id)
    set(reference, {
      id: id,
      invested: invested,
      promotion_gain: promotionGain,
      investor_id: investorId,
      promoter_id: promoterId,
      created_at: createdAt
    })
  }

export function getPromoCount(setCount: any) {
  const data: any[] = []
  const reference = ref(database, 'promo-usages/')
  onValue(reference, (snap) => {
    snap.forEach((promo) => {
      data.push(promo.val())
    })
    setCount(data.length + 1)
  })
}

export function getPromoUsages(setPromos: any, setLoading: any) {
  setLoading(true);
  let data: any[] = []
  const reference = ref(database, 'promo-usages/');
  get(reference).then((snap) => {
    snap.forEach((promo) => {
      data.push(promo.val())
    })
  }).catch((err) => {
    console.error(err.message)
  }).finally(() => {
    setPromos(data)
    setLoading(false);
  })
}

export function getPromoUsers(promo: FirebasePromo, setInvestor: any, setPromoter: any, setLoading: any) {
  setLoading(true);
  const investorRef = ref(database, 'users/' + promo.investor_id);
  const promoterRef = ref(database, 'users/' + promo.promoter_id);

  get(investorRef).then((snap) => {
    setInvestor(snap.val())
  }).catch((err) => console.error(err.message))
  .finally(() => {
    get(promoterRef).then((snap) => {
      setPromoter(snap.val())
    }).catch((err) => console.error(err.message))
    .finally(() => setLoading(false))
  })
}

export function deletePromo(id: number) {
  const reference = ref(database, 'promo-usages/' + id)
  remove(reference);
}

export function overWriteProjects() {
  const projects = [1676120027435, 1683292371321, 1683800875122]
  projects.forEach((projectId, index) => {
    const getReference = ref(database, `projects/${projectId}`)
    get(getReference).then((snap) => {
      const setReference = ref(database, `projects/${index + 1}`)
      set(setReference, snap.val())
    })
  })
}

export function overwriteShares() {
  let shareIds: string[] = [];
  const getReference = ref(database, 'shares/')
  get(getReference).then((snap) => {
    snap.forEach((share) => {
      shareIds.push(share.val().id)
    });
  }).finally(() => {
    shareIds.forEach((id) => {
      let updates: any = {};
      updates['project'] = "1";
      const setReference = ref(database, `shares/${id}`)
      update(setReference, updates)
    })
  })
}
