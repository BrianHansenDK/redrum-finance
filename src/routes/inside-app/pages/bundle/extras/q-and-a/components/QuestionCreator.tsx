import React from 'react';
import mainShadows from '../../../../../themes/shadows';
import LocationIcon from '@rsuite/icons/Location'
import { useMediaQuery } from '../../../../../../../misc/custom-hooks';

interface IProps {
    user: any
}
const QuestionCreator: React.FunctionComponent<IProps> = (props) => {
  const {user} = props
  const isMobile = useMediaQuery('(max-width: 1100px)')
        return (
            <div className='creator' >
                {user?.image ? (
                    <img
                    className='profile-image'
                    style={styles.image}
                    src={user?.image}
                    alt={user?.username} />
                ) : (
                    <div
                    style={styles.avatar}
                    className='profile-avatar' >
                        {
                            user?.username?.split(' ').lenght < 1 ?
                                user?.username?.split(' ').map((w: any) => w[0]).join('.') :
                                user?.username?.split('')[0] + '.' + user?.username?.split('')[1]}
                    </div>
                )}
                <div className='creator-information'>

                    <h1 className='username'>
                        {user?.username ? user?.username : 'Anonymous investor'}
                        <span className='location'>
                            <LocationIcon style={styles.locationIcon} /> {user?.city ? `${user?.city}, ${user?.country}` : 'Location unknown'}
                        </span>
                    </h1>
                    <p>
                        {user?.role ? user?.role : isMobile ? 'R.P investor' : 'Redrum Pro investor'}
                    </p>
                </div>
            </div>
        );
    }

const styles = {
    image: {
        boxShadow: mainShadows.image,
    },
    avatar: {
        boxShadow: mainShadows.image,
    },
    locationIcon: {
        marginRight: 2.5,
    }
}

export default QuestionCreator;
