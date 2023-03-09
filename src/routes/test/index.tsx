import React from 'react'
import PDFContractComponent from '../../components/ContractComponent';
import { auth } from '../../firebase';
import SignInForm from '../auth/components/signInForm';

interface IProps {}

const TestPage: React.FunctionComponent<IProps> = (props) => {
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
