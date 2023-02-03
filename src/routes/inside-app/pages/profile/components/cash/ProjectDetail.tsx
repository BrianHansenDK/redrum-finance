import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { database } from '../../../../../../firebase'
import { numberWithCommas } from '../../../../../../misc/custom-hooks'
import { minorMovieCard } from '../../../../themes/cardStyles'
import { mainColors } from '../../../../themes/colors'
import { profileCardUnderTitle } from '../../../../themes/textStyles'
interface IProps {
    projectId: any,
    userId: any
}
const ProjectDetail: React.FunctionComponent<IProps> = (props) => {
    const { projectId, userId } = props
    const [projectName, setProjectName] = useState('')
    const [projectImage, setProjectImage] = useState('')
    const [invested, setInvested] = useState(0)
    useEffect(() => {
        const reference = ref(database, 'projects/' + projectId)
        onValue(reference, (snap) => {
            setProjectName(snap.val().name)
            setProjectImage(snap.val().banner)
        }, { onlyOnce: true })

        const investRef = ref(database, 'investments/')
        let data = 0
        onValue(investRef, (snap) => {
            snap.forEach((inv) => {
                if (inv.val().project == projectId && inv.val().creator == userId) {
                    data += inv.val().amount
                }
            })
            setInvested(data)
        }, { onlyOnce: true })
    })
    return (
        <Link to={`/app/bundle/${projectId}`} style={minorMovieCard} className='grow-on-hover'>
            <img src={projectImage} alt={projectName} style={styles.image} />
            <h2 style={profileCardUnderTitle} className='text-center mt-1'>
                {projectName}
            </h2>
            <p style={styles.investedAmount} className='text-center'>
                Invested: {numberWithCommas(invested)}€ <span style={styles.additionalInfo}>in project</span>
            </p>
        </Link>
    )
}

const styles = {
    image: {
        borderRadius: '10px 10px 0 0',
        width: 300,
        height: 100,
    },
    investedAmount: {
      fontSize: 18.5,
      color: mainColors.dark,
      marginTop: 15,
    },
    additionalInfo: {
      fontSize: 16.25,
      color: mainColors.dark,
      opacity: .6,
    }
}

export default ProjectDetail
