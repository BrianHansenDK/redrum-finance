export interface FirebaseMovie {
description: string,
genres: string, // But works as a list, because all the genres are seperated by a comma ','
id: string,
image: string, // Url
intro: string,
releaseDate: string, // Can be used as a date
title: string,
}

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
