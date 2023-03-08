import { getDownloadURL, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react'
import { Avatar, Button, Input, Loader, Message, Uploader, useToaster } from 'rsuite';
import PDFContractComponent from '../../components/ContractComponent';
import { auth } from '../../firebase';
import { storage, storageRef } from '../../firebaseStorage';
import SignInForm from '../auth/components/signInForm';
import { mainColors } from '../inside-app/themes/colors';
import mainShadows from '../inside-app/themes/shadows';

const TestPage = () => {
  const date = new Date(Date.now())
    return (
      <div className='w-100 h-100'>
        {
          auth.currentUser!.uid ? (
            <PDFContractComponent
            name={'Brian Hansen'}
            address={'Ejler Billes Allé 43, 2300 Copenhagen S'}
            date={date}
            en={false}/>
          ) : (
            <SignInForm en={true}/>
          )
        }
      </div>
    )
}

export default TestPage;
