import React from 'react'
import { mainColors } from '../inside-app/themes/colors'
import MainLayout from '../layouts/mainLayout'
import NOTFOUNDIMG from '../../assets/page-not-found-svgrepo-com.svg'
import MainBtn from '../inside-app/components/MainBtn'
import { Button, ButtonGroup, Tooltip, Whisper } from 'rsuite'
import { useNavigate } from 'react-router-dom'

interface IProps {
  isVisible: any,
  openModal: any,
  closeModal: any,
  en: boolean,
  setEn: any,
}
const PageNotFound: React.FunctionComponent<IProps> = (props) => {
  const {isVisible, openModal, closeModal, en, setEn} = props
  const navigate = useNavigate()
  return (
    <MainLayout dark={true} openModal={openModal} closeModal={closeModal} isVisible={isVisible} en={en} setEn={setEn}>
      <div style={styles.contentCon} className='flex-column'>
      <h1 style={styles.pageTitle}>Code 404</h1>
      <img src={NOTFOUNDIMG} alt="Sad html page" width={300} height={300} />
      <h2 style={styles.infoTitle}>Page does not exist</h2>
      <p style={styles.infoTxt} className='text-center'>
        No page was found at <span className='bold'>{location.href} </span> <br/>
        The page you were looking for does either not exist or is either under construction or an ongoing update. <br/>
        If you think this should not be the case. <span className='bold'>Please</span> contact our support.
      </p>
      <ButtonGroup style={styles.btnGroup}>
        <Whisper trigger='hover' placement='top'
        speaker={
          <Tooltip>
            Pressing this button will open up your mail program and start writing an email to info@redrum.de
          </Tooltip>
        }
        >
          <Button href='mailto:info@redrum.de' size='lg' color='blue' appearance='primary'>
            Contact support
          </Button>
        </Whisper>
        <Button size='lg' color='blue' appearance='ghost' onClick={() => navigate('/')}>
          Go to frontpage
        </Button>
      </ButtonGroup>
      </div>
    </MainLayout>
  )
}
const styles = {
  contentCon: {
    padding: '100px 5%',
    display: 'flex',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: 50,
    color: 'red',
  },
  infoTitle: {
    fontSize: 40.5,
    color: mainColors.dark,
  },
  infoTxt: {
    fontSize: 18.5,
    color: mainColors.dark,
    opacity: .9,
    marginTop: 25,
  },
  btnGroup: {
    marginTop: 25,
  }
}
export default PageNotFound
