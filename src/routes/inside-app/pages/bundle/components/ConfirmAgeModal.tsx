import React, { Component } from 'react'
import { Button, ButtonToolbar, Modal } from 'rsuite';
import MainBtn from '../../../components/MainBtn';
import PLUS from '../../../../../assets/18_above_img.svg'
import { mainColors } from '../../../themes/colors';
import bundleStrings from '../../../../../library/string/Bundle';
import { useNavigate } from 'react-router-dom';
import { FirebaseUser } from '../../../../../database/Objects';

interface IProps {
    visible: boolean,
    close: any,
    openInvestModal: any,
    en: boolean,
    age: number,
    user: FirebaseUser
}

const ConfirmAgeModal = (props: IProps) => {
    const {visible, close, openInvestModal, en, age, user} = props;
    const navigate = useNavigate()
        return (
            <Modal open={visible} onClose={close} >
                <Modal.Header>
                    <Modal.Title style={styles.title} className='text-center'>
                      {age == 0 ? (
                        <>
                          {en ? 'Age not provided yet.' : 'Alter noch nicht angegeben.'}
                        </>
                      ) : (
                        <>
                          {en ? 'Not old enough to invest.' : 'Nicht alt genug, um zu investieren.'}
                        </>
                      ) }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div style={styles.contentWrap} className='flex-column'>
                        <img style={styles.image} src={PLUS} alt="You have to be minimum 18 years old" />
                        <p style={styles.txt}>
                        {en ?
                        'You must be 18 years of age or older to participate in the Redrum Pro Projects.' :
                         'Sie müssen mindestens 18 Jahre alt sein, um an den Redrum Pro-Projekten teilnehmen zu können.'} <br />
                        {age > 0 ?
                        en ? 'You will not be able to invest as long as you are under 18 years old.' :
                         'Sie können nicht investieren, solange Sie unter 18 Jahre alt sind.' :
                         en ? 'Please register your age as well as your other information to be able to invest.' :
                        'Bitte registrieren Sie Ihr Alter sowie Ihre anderen Informationen, um investieren zu können.'}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer style={styles.btnCon}>
                        <Button className='r-btn r-main-btn'
                            onClick={() => {
                              if (age > 0) {
                                close();
                              } else {
                                navigate(`/app/profile/${user.id}`)
                              }
                            } }
                            style={styles.mainBtn}
                            appearance={'primary'}
                            size={'lg'}>
                              {age > 0 ? en ? 'Close' : 'Zurück' : en ? 'Go to profile' : 'Zum Profil gehen'}
                            </Button>
                </Modal.Footer>
            </Modal>
        );

}

const styles = {
    title: {
        fontSize: 22.5,
        color: mainColors.dark
    },
    contentWrap: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 25,
    },
    image: {
        widht: 250,
        height: 250,
    },
    txt: {
        fontSize: 15.5,
        color: mainColors.dark,
        opacity: .9,
    },
    btnCon: {
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    },
    mainBtn: {
      display: 'inline-block',
      margin: 'auto',
      width: 300,
    }
}

export default ConfirmAgeModal;
