import React from 'react'
import bundleStrings from '../../../../../../library/string/Bundle'
import SingleLineInfo from './SingleLineInfo'
import { formatDate } from '../../../../../../misc/custom-hooks'

const InfoLines = ({ project, en }: { project: any, en: boolean }) => {
  const end = new Date(project.endDate)
    return (
        <div style={styles.wrap}>
            <SingleLineInfo
            title={en ? bundleStrings.infoCardEN.aR : bundleStrings.infoCardDE.aR}
            info={project.guaranteedReturn.toString()} type='%' isTopElement={true}
            />
            <SingleLineInfo
            title={en ? bundleStrings.infoCardEN.iD : bundleStrings.infoCardDE.iD}
            info={
              [
                end.toLocaleDateString().split('/').map((x) => parseInt(x) < 10 ? x = `0${x[1]}` : x)[1],
                end.toLocaleDateString().split('/').map((x) => parseInt(x) < 10 ? x = `0${x[0]}` : x)[0],
                end.toLocaleDateString().split('/').map((x) => parseInt(x) < 10 ? x = `0${x[2]}` : x)[2],
              ].join('.')
            }
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
            title={en ? bundleStrings.infoCardEN.iT : bundleStrings.infoCardDE.iT}
            info={project.goal.toString()}
            type='€'
            />
            <SingleLineInfo
            title={en ? bundleStrings.infoCardEN.mI : bundleStrings.infoCardDE.mI}
            info={project.movies.length} type='€' />
            <SingleLineInfo
            title={en ? bundleStrings.infoCardEN.publication : bundleStrings.infoCardDE.publication}
            info={`${project.publication} ${en ? 'Months' : 'Monate'}`} hasSmallTxt
            smallTxt={en ? bundleStrings.infoCardEN.small : bundleStrings.infoCardDE.small}
            />
            <SingleLineInfo
            title={en ? bundleStrings.infoCardEN.aI : bundleStrings.infoCardDE.aI}
            info={project.currentlyInvested.toString()}
            type='€'
            isBlue
            />
        </div>
    )
}
const styles = {
  wrap: {width: '100%'}
}

export default InfoLines
