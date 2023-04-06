import React from 'react'
import Empty from '../../assets/empty_img.png'
import PaypalCheckoutBtn from '../../components/PaypalCheckoutBtn'
import { Button, IconButton, Radio, RadioGroup } from 'rsuite'
import GoogleIcon from '../../assets/svgs/GoogleSvg';
import {Icon} from '@rsuite/icons'
import { ValueType } from 'rsuite/esm/Radio'
import { PayPalMarks } from '@paypal/react-paypal-js'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';

interface IProps {}

const TestPage: React.FunctionComponent<IProps> = (props) => {
  const product = {
    name: 'Product1',
    price: 25.99,
    image: Empty
  }

  const loginWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider()).then((r) => console.log(r['user']))
  }


    return (
      <div className='w-100 h-100 text-center'>
        <div style={{margin: '100px auto', width: 300}}>
          <img src={product.image} alt={product.name} width={300} height={300} />
          <p className='mt-3'>{product.name}</p>
          <p className="small">{product.price}€</p>
          <IconButton
          onClick={loginWithGoogle}
          icon={<Icon as={GoogleIcon}/>}
          appearance='primary'
          color='green'>
            Sign in with Google
          </IconButton>
        </div>
      </div>
    )
}

export default TestPage;
