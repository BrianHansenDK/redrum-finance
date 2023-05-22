// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { DataSnapshot, get, getDatabase, onValue, ref, remove, set, update } from 'firebase/database';
import { EventHandler, useEffect, useState } from "react";
import { getRealAge } from "./misc/custom-hooks";
import { FirebaseBundle, FirebaseInvestment, FirebaseMovie, FirebaseNotification, FirebaseShare, FirebaseUser } from "./database/Objects";
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

export function newUpdateAccount (userId: string, title: string, full_name: string,
  birth_date: Date, email: string, country: string, address: string, phone_number: string,
  then: ((value: void) => void | PromiseLike<void>) | null | undefined,
  error: ErrorCallback, end: () => void,
  company: boolean, companyRole?: string | undefined,
  companyName?: string | undefined, companyAddress?: string | undefined, companyWebsite?: string | undefined
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
    if (companyWebsite !== undefined) {
      updates['website'] = companyWebsite
    }
    if  (title !== "" && full_name !== "" && birth_date !== new  Date() &&
    country !== "" && address.split(",").length > 1 && phone_number !== "") {
      const age = getRealAge(new Date(birth_date))
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
    galleryUrls: string[],
    pitchVideo: string,
    files: {name: string, url: string}[],
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

export function updateProjectGallery(projectId: number, galleryImageUrls: string[]) {
  const reference = ref(database, 'projects/' + projectId)
  let updates: any = {}
  updates['image_gallery_urls'] = galleryImageUrls
  update(reference, updates)
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
    title_en: `${investor.username} used your promo code!`,
    title_de: `${investor.username} hat Ihren Promo-Code verwendet!`,
    content_en: [
      'Dear Redrum Producer,',

      'We wanted to let you know that another user has recently used your promo code for our ' +
      `${project.name} - bundle, which means you have earned ${invested * 0.1}€ to your balance. ` +
      'Congratulations on this achievement!',

      'Additionally, we wanted to remind you that you have already received an invoice and ' +
      'framework agreement for your participation in our referral program. ' +
      'If you have any questions or concerns about your earnings or the program in general, ' +
      "please don't hesitate to reach out to us.",

      'Thanks again for being a part of our community and for your contributions to our success!',

      'Best regards',

      'Khaled'
    ],
    content_de: [
      'Lieber Redrum Producer, ',

      'Wir möchten Ihnen mitteilen, dass ein anderer Benutzer kürzlich Ihren Promo-Code für unser ' +
      `${project.name} - Bundle verwendet hat. Das bedeutet, dass Sie ${invested * 0.1} € auf Ihr Konto gutgeschrieben bekommen haben. ` +
      'Herzlichen Glückwunsch zu diesem Erfolg!',

      'Wir möchten Sie außerdem daran erinnern, dass Sie bereits eine Rechnung und einen Rahmenvertrag ' +
      'für Ihre Teilnahme an unserem Empfehlungsprogramm erhalten haben. Wenn Sie Fragen oder Bedenken zu Ihren Einnahmen oder ' +
      'zum Programm im Allgemeinen haben, zögern Sie bitte nicht, uns zu kontaktieren.',

      'Vielen Dank, dass Sie ein Teil unserer Community sind und zu unserem Erfolg beitragen!',

      'Mit freundlichen Grüßen',

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
