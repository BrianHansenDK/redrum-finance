import { getAuth } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import ProgressLine from 'rsuite/esm/Progress/ProgressLine'
import { userRef } from '../../../firebase'
import { mainColors } from '../themes/colors'

const AccountCompletionProgressBar = () => {
    const auth = getAuth()
    const [userCompletion, setUserCompletion] = useState(0)
    useEffect(() => {
        userRef(auth.currentUser?.uid, '/completion', setUserCompletion)
    }, [])
    return (
        <div style={styles.progressWrap}>
            <p> Account completion: {userCompletion}%</p>
            <ProgressLine
                percent={userCompletion}
                showInfo={userCompletion == 100 ? true : false}
                status={userCompletion == 100 ? 'success' : 'active'} />
        </div>
    )
}

const styles = {
    progressWrap: {
        width: 250,
        color: mainColors.dark
    },
}

export default AccountCompletionProgressBar