// User
export interface FirebaseUser {
  birth_date: string,
  completion: number,
  country: string,
  email: string,
  id: string,
  money_available: number,
  username: string,
  image?: string,
  role: string,
  badge?: string,
  address: string,
  company_account: boolean,
  company_name?: string,
  contact_partner?: string,
  company_address?: string,
  full_name: string,
  phone_number: string,
  state: string,
  payment_method: string,
  paypal_account: string,
  withdrawal_method: string,
  bank_information: string,
  title?: string,
  website?: string,
}

// Movie object
export interface FirebaseMovie {
description: string,
genres: string, // But works as a list, because all the genres are seperated by a comma ','
id: string,
image: string, // Url
intro: string,
releaseDate: string, // Can be used as a date
title: string,
}

// Bundle/Project object
export interface FirebaseBundle {
banner?: string,
currentlyInvested?: number,
description?: string,
endDate?: string,
goal?: number,
guaranteedReturn?: number,
id?: string,
intro?: string,
movies?: Array<FirebaseMovie>,
name?: string,
overviewImage?: string,
presentationImage?: string,
publication?: string,
smallImage?: string,
startDate?: string,
value?: number,
}

// Request object
export interface FirebaseRequest {
  id: number,
  creator: any,
  amount: number,
  created_at: number,
  state: string,
  seen: boolean,
}

// Notification object
export interface FirebaseNotification {
  id: number,
  created_at: string,
  read: boolean,
  user_id: string,
  title: string,
  content: string,
}

// Share object
export interface FirebaseShare {
amount: number,
id : string
investment: number
movie: string,
owner: string,
project: string
}
