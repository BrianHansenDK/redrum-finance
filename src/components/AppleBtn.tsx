import { Button } from 'rsuite'
import {Icon} from '@rsuite/icons'
import AppleSvg from '../assets/svgs/AppleSvg'

interface IProps {en: boolean}

const AppleBtn = (props: IProps) => {
  const {en} = props
  return (
    <Button className='app-btn' appearance='primary'>
      <div className='inner'>
        <div className='icon-con'>
          <Icon as={AppleSvg} width="2.5em" height="2.5em" />
        </div>
        <div className="txt-con">
          <p className='small'>
            {en ? 'Coming soon in' : 'Kommt bald rein'}
          </p>
          <p className="brand">
            App Store
          </p>
        </div>
      </div>
    </Button>
  )
}

export default AppleBtn
