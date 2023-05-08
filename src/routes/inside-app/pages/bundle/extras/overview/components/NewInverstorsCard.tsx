import React, { FunctionComponent } from 'react';
import { auth } from '../../../../../../../firebase';
import { getCity, useMediaQuery } from '../../../../../../../misc/custom-hooks';
import { mainColors } from '../../../../../themes/colors';
import mainShadows from '../../../../../themes/shadows';

interface IProps {
    user: any,
    isMobile: boolean,
}
interface IState {
  isPhone: boolean,
}

const NewInverstorsCard: FunctionComponent<IProps> = (props) => {
    const {user, isMobile} = props
      const isSmall = useMediaQuery('(max-width: 500px')
      const styles = {
        wrap: {
            display: 'flex',
            width: isMobile ? 320 : '33%',
            marginBottom: 50,
            flexShrink: 0,
            padding: isMobile ? 5 : 0,
            marginRight: isSmall ? 'calc(50vw - 160px)' : 0
        },
        image: {
            width: isMobile ? 65 : 100,
            height: isMobile ? 65 : 100,
            borderRadius: '50%',
            boxShadow: mainShadows.image,
            outline: '5px solid rgba(29,29,69, .10)',
            flexShrink: 0,
        },
        avatar: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: isMobile ? 65 : 100,
            height: isMobile ? 65 : 100,
            borderRadius: '50%',
            boxShadow: mainShadows.image,
            backgroundColor: mainColors.dark,
            color: mainColors.white,
            fontSize: isMobile ? 20 : 30,
            outline: '5px solid rgba(29,29,69, .10)',
            flexShrink: 0,
        },
        txtWrap: {
            marginLeft: 30,
        },
        userName: {
            fontSize: 22,
            color: mainColors.dark,
            fontWeight: '700',
            lineHeight: 1,
        },
        role: {
            display: 'block',
            color: mainColors.dark,
            fontWeight: '700',
            marginTop: 7.5,
        },
    }
        return (
            <div style={styles.wrap}>
                {
                    user?.image ? (
                        <img style={styles.image} src={user?.image} alt={`Profile image for ${user?.username}`} />
                    ) : (
                        <div style={styles.avatar}>
                            {user?.username.split(' ').length == 2 ? user?.username.split(' ').map((w: any) => w[0]).join('.') : user?.username.slice(0, 1)}
                        </div>
                    )
                }
                <div style={styles.txtWrap}>
                    <h1 style={styles.userName}>
                        {user?.email == auth.currentUser?.email ? 'You' : user?.username}
                    </h1>
                    <p>
                        <span style={styles.role}>
                            {user?.company_account ? 'Company' : user?.money_available !== undefined ? 'Redrum Pro investor' : 'Redrum Pro member'}
                        </span>
                        {user?.address ? (
                            `${getCity(user)}, ${user?.country}`
                        ) : 'Location unknown'}
                    </p>
                </div>
            </div>
        );
}

export default NewInverstorsCard;
