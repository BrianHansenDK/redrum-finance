import React from 'react'
import bundleStrings from '../../../../../../library/string/Bundle'
import SingleLineInfo from './SingleLineInfo'

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
                end.toLocaleDateString().split('/').map((x) => parseInt(x) < 10 ? x = `0${x}` : x)[1],
                end.toLocaleDateString().split('/').map((x) => parseInt(x) < 10 ? x = `0${x}` : x)[0],
                end.toLocaleDateString().split('/').map((x) => parseInt(x) < 10 ? x = `0${x}` : x)[2],
              ].join('.')
            }
            />
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
