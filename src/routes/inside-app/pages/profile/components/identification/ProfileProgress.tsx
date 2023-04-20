import React from 'react'
import { Badge, Button, Popover, Progress, Whisper } from 'rsuite'
import { mainColors } from '../../../../themes/colors'
import InfoIcon from '@rsuite/icons/InfoRound'
import { Link } from 'react-router-dom'
import { useMediaQuery } from '../../../../../../misc/custom-hooks'

interface IProps {
    userId: any,
    completion: number,
    isMobile: boolean,
    openModal: any,
    visible: boolean,
}

const ProfileProgress: React.FunctionComponent<IProps> = (props) => {
    const { completion, userId, isMobile, openModal, visible } = props
    const isPhone = useMediaQuery('(max-width: 768px)')
    const speaker = (
        <Popover title="Account not complete">
            <p>Your account is {completion}% complete however it is optimal to have 100% completion. </p>
            <p>Your account has to be 100% complete to invest in projects.</p>
            <p>
                <Button appearance='link' onClick={openModal}>Complete account</Button>
            </p>
        </Popover>
    );
    const successSpeaker = (
        <Popover title="Account 100% complete">
            <p>Your account is {completion}% complete thus you are able to invest. </p>
        </Popover>
    )
    const styles = {
        wrap: {
            display: 'flex',
            alignItems: 'center',
            margin: isMobile ? '20px auto 40px' : '40px auto 0',
            minWidth: 200,
            width: '100%',
            maxWidth: isPhone ? '100%' : isMobile ? 768 : '100%'
        },
        title: {
            fontSize: isMobile ? 14 : 22.5,
            color: mainColors.dark,
            fontWeight: '700',
        },
        badge: {
            fontSize: isMobile ? 8 : 15,
            top: -5,
            right: 0,
            color: completion < 40 ? mainColors.warning : completion < 100 ? mainColors.main : mainColors.success,
        },
        pc: {
            fontSize: isMobile ? 14 : 22.5,
            fontWeight: '700',
            color: completion < 40 ? mainColors.warning : completion < 100 ? mainColors.main : mainColors.success
        }
    }
    return (
      <>
      {visible ? (
        <div style={styles.wrap} className={isMobile ? 'flex-column' : ''}>
        {
          isPhone ? null : (
            <p style={styles.title} className='position-relative'>
              {completion < 100 ? <InfoIcon className='position-absolute' style={styles.badge} /> : ''}
              Completion:
          </p>
          )
        }
          <Progress
              showInfo={false}
              percent={completion}
              strokeColor={`${completion < 40 ? mainColors.warning
                  : completion < 100 && completion >= 40 ? mainColors.main : mainColors.success}`}
              status={completion == 100 ? 'success' : 'success'}
              strokeWidth={isPhone ? 5 : isMobile ? 7.5 : 10}
          />
          <p style={styles.pc}>
              {completion}%
          </p>
      </div>
      ) : (
        <Whisper
        placement='top'
        speaker={completion == 100 ? successSpeaker : speaker}
        trigger={isMobile ? 'click' : 'hover'}
        enterable
        >
            <div style={styles.wrap} className={isMobile ? 'flex-column' : ''}>
              {
                isPhone ? null : (
                  <p style={styles.title} className='position-relative'>
                    {completion < 100 ? <InfoIcon className='position-absolute' style={styles.badge} /> : ''}
                    Completion:
                </p>
                )
              }
                <Progress
                    showInfo={false}
                    percent={completion}
                    strokeColor={`${completion < 40 ? mainColors.warning
                        : completion < 100 && completion >= 40 ? mainColors.main : mainColors.success}`}
                    status={completion == 100 ? 'success' : 'success'}
                    strokeWidth={isPhone ? 5 : isMobile ? 7.5 : 10}
                />
                <p style={styles.pc}>
                    {completion}%
                </p>
            </div>
        </Whisper>
      )}

    </>
    )
}

export default ProfileProgress
