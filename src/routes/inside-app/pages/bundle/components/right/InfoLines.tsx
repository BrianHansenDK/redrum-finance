import React from 'react'
import bundleStrings from '../../../../../../library/string/Bundle'
import SingleLineInfo from './SingleLineInfo'
import { formatDate, numberWithCommasAsString } from '../../../../../../misc/custom-hooks'
import { FirebaseBundle } from '../../../../../../database/Objects'
import { mainColors } from '../../../../themes/colors'

const InfoLines = ({ project, en }: { project: FirebaseBundle, en: boolean }) => {
  const end = new Date(project.endDate!)
    return (
        <div style={styles.wrap}>
          <SingleLineInfo
            title={en ? 'Project category' : 'Projekt Kategorie'}
            info={project.category} isTopElement={true}
            />
            <SingleLineInfo
            title={en ? 'Funding Target': 'Finanzierungziel'}
            info={project.goal!.toString()} type='€'
            />
            <SingleLineInfo
            title={en ? 'Project Evaluation' : 'Projekt Bewertung'}
            info={project.value!.toString()} type='€'
            />
            <SingleLineInfo
            title={en ? 'Projected Return' : 'Angestrebte Rendite'}
            info={project.projectedReturn!.toString()} type='%'
            />
            <SingleLineInfo
            title={en ? 'Investment Deadline' : 'Investitionsschluss'}
            info={formatDate(new Date(project.endDate!))}
            />
            <SingleLineInfo
            title={en ? 'Start of return' : 'Angestrebte Rendite'}
            info={project.publication} type={en ? 'Months' : 'Monate'} hasTag tooltipTxt={en ?
              'English info' : 'Deutches Info'}
            />
            {project.closure !== "" ? (
              <SingleLineInfo title={en ? 'Project closure' : 'Projektabschluss'}
              info={formatDate(new Date(project.closure))} hasTag tooltipTxt={en ?
              'This project is a licensing business. ' +
              'This means that on the date of project closure your invested amount + return ' +
              'will be paid out and the project will be finally closed. ' +
              'The participation is therefore finished.' :
              'Bei diesem Projekt handelt es sich um ein Lizenzgeschäft. ' +
              'Das bedeutet,dass am Datum des Projektabschlusses dein ' +
              'investierter Betrag + Rendite ausgezahlt wird und das Projekt final abgeschlossen wird. ' +
              'Die Beteiligung ist damit beendet.'
              }/>
              ) : null}
            <SingleLineInfo
            title={'Status'}
            info={project.status == 1 ? 'Funding' : project.status == 2 ? 'Shooting' : project.status == 3 ? 'Postproduction' : 'Released'}
            hasColor
            />
            {/*<SingleLineInfo
            title={''}
            info={'Shareholder'}
            hasColor color={mainColors.dark} 
            hasTag tooltipTxt={en ?
              'English info' : 'Deutches Info'}
            />
            <SingleLineInfo
            title={en ? 'Return Cap' : 'Rendtite Limit'}
            info={project.ShareholderReturnCap}
            type={'%'}
            />
            <SingleLineInfo
            title={en ? 'Runtime' : 'Laufzeit'}
            info={project.shareholderRuntime}
            />
            <SingleLineInfo
            title={en ? 'Minimum investment' : 'Mindest Investment'}
            info={project.shareholderMinimum.toString()}
            type='€'
            />
            <SingleLineInfo
            title={''}
            info={'Stakeholder'}
            hasColor color={mainColors.dark} 
            hasTag tooltipTxt={en ?
              'English info' : 'Deutches Info'}
            />
            <SingleLineInfo
            title={en ? 'Return Cap' : 'Rendtite Limit'}
            info={project.guaranteedReturn}
            type={'%'}
            />
            <SingleLineInfo
            title={en ? 'Runtime' : 'Laufzeit'}
            info={project.stakeholderRuntime}
            />
            <SingleLineInfo
            title={en ? 'Minimum investment' : 'Mindest Investment'}
            info={numberWithCommasAsString(project.stakeholderMinimum)}
            type='€'
            />
            {/*<SingleLineInfo
            title={en ? bundleStrings.infoCardEN.aI : bundleStrings.infoCardDE.aI}
            info={project.currentlyInvested.toString()}
            type='€'
            isBlue
            />*/}
        </div>
    )
}
const styles = {
  wrap: {width: '100%'}
}

export default InfoLines
