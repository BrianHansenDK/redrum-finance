import React from 'react'
import { Badge, Popover, Progress, Whisper } from 'rsuite'
import { mainColors } from '../../../themes/colors'
import InfoIcon from '@rsuite/icons/InfoRound'
import { Link } from 'react-router-dom'

interface IProps {
    userId: any,
    completion: number
}

const ProfileProgress: React.FunctionComponent<IProps> = (props) => {
    const { completion, userId } = props
    const speaker = (
        <Popover title="Account not complete">
            <p>Your account is {completion}% complete however it is optimal to have 100% completion. </p>
            <p>This may affect your ability to invest in projects.</p>
            <p>
                <Link to={`/app/profile/${userId}`}>Complete account</Link>
            </p>
        </Popover>
    );
    const styles = {
        wrap: {
            display: 'flex',
            alignItems: 'center',
            marginTop: 40,
            minWidth: 300,
        },
        title: {
            fontSize: 22.5,
            color: mainColors.dark,
            fontWeight: '700',
        },
        badge: {
            fontSize: 15,
            top: -5,
            right: 0,
            color: completion < 40 ? mainColors.warning : completion < 100 ? mainColors.active : mainColors.success,
        },
        pc: {
            fontSize: 22.5,
            fontWeight: '700',
            color: completion < 40 ? mainColors.warning : completion < 100 ? mainColors.active : mainColors.success
        }
    }
    return (
        <Whisper placement='top' speaker={speaker} trigger='hover' enterable>

            <div style={styles.wrap}>
                <p style={styles.title} className='position-relative'>
                    {completion < 100 ? <InfoIcon className='position-absolute' style={styles.badge} /> : ''}  Completion:
                </p>

                <Progress
                    showInfo={completion == 100}
                    percent={completion}
                    strokeColor={`${completion < 40 ? mainColors.warning
                        : completion < 100 && completion >= 40 ? mainColors.active : mainColors.success}`}
                    status={completion == 100 ? 'success' : undefined}
                />
                <p style={styles.pc}>
                    {completion}%
                </p>
            </div>
        </Whisper>
    )
}

export default ProfileProgress