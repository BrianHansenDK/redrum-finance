import { Button } from 'rsuite'
import {Icon} from '@rsuite/icons'
import GoogleSvg from '../assets/svgs/GoogleSvg'

interface IProps {en: boolean}

const GoogleBtn = (props: IProps) => {
  const {en} = props
  return (
    <Button className='app-btn' appearance='primary'>
      <div className='inner'>
        <div className='icon-con'>
          <Icon as={GoogleSvg} width="2.5em" height="2.5em" />
        </div>
        <div className="txt-con">
          <p className='small'>
            {en ? 'Soon available on' : ' Bald verfügbar bei'}
          </p>
          <p style={{fontSize: 18}} className="brand">
            Google Play
          </p>
        </div>
      </div>
    </Button>
  )
}

export default GoogleBtn
