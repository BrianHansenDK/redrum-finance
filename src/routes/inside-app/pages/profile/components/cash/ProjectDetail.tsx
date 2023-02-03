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
    const [gainSum, setGainSum] = useState<any>(0)
    useEffect(() => {
        const reference = ref(database, 'projects/' + projectId)
        onValue(reference, (snap) => {
            setProjectName(snap.val().name)
            setProjectImage(snap.val().banner)
        }, { onlyOnce: true })

        const investRef = ref(database, 'investments/')
        let data = 0
        let gainData = 0
        onValue(investRef, (snap) => {
            snap.forEach((inv) => {
                if (inv.val().project == projectId && inv.val().creator == userId) {
                    data += inv.val().amount
                    gainData += inv.val().gain
                }
            })
            setInvested(data)
            setGainSum(gainData - data)
        }, { onlyOnce: true })
    })
    return (
      <div style={styles.wrap}>
        <Link to={`/app/bundle/${projectId}`} style={minorMovieCard} className='grow-on-hover'>
            <img src={projectImage} alt={projectName} style={styles.image} />
            <h2 style={profileCardUnderTitle} className='text-center mt-1'>
                {projectName}
            </h2>
        </Link>
        <div style={styles.infoWrap}>
          <p style={styles.investedAmount}>
            You have invested: {numberWithCommas(invested)}€ <span style={styles.additionalInfo}>in project</span>
          </p>
          <p style={styles.investedAmount}>
            You are guaranteed to gain: {numberWithCommas(gainSum.toFixed(2).toString().replace('.',',')).toString()}€
          </p>
        </div>
      </div>
    )
}

const styles = {
  wrap: {
    display: 'flex',
    marginBottom: 50,
  },
    image: {
        borderRadius: '10px 10px 0 0',
        width: 300,
        height: 100,
    },
    infoWrap: {
      marginLeft: 50,
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
