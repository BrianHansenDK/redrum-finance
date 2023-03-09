import React from 'react'
import { Button } from 'rsuite'
import {Icon} from '@rsuite/icons'
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem'
import AppleSvg from './svgs/AppleSvg'
import GoogleSvg from './svgs/GoogleSvg'
import AppleBtn from '../AppleBtn'
import GoogleBtn from '../GoogleBtn'

interface IProps {en: boolean, colspan: any}

const FooterAppBtns: React.FunctionComponent<IProps> = (props) => {
  const {en, colspan} = props
  return (
    <FlexboxGridItem colspan={colspan} className='app-btns-con'>
      <AppleBtn en={en}/>
      <GoogleBtn en={en}/>
    </FlexboxGridItem>
  )
}

export default FooterAppBtns
