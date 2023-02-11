import React from 'react'
import bundleStrings from '../../../../../../library/string/Bundle'
import SingleLineInfo from './SingleLineInfo'

const InfoLines = ({ project, en }: { project: any, en: boolean }) => {
    return (
        <div style={styles.wrap}>
            <SingleLineInfo
            title={en ? bundleStrings.infoCardEN.aR : bundleStrings.infoCardDE.aR}
            info={project.guaranteedReturn.toString()} type='%' isTopElement={true}
            />
            <SingleLineInfo
            title={en ? bundleStrings.infoCardEN.iD : bundleStrings.infoCardDE.iD}
            info={project.endDate.split(' ').slice(1,3).join(' ')}
            />
            <SingleLineInfo
            title={en ? bundleStrings.infoCardEN.iT : bundleStrings.infoCardDE.iT}
            info={project.goal.toString()}
            type='€'
            />
            <SingleLineInfo
            title={en ? bundleStrings.infoCardEN.mI : bundleStrings.infoCardDE.mI}
            info={3} type='€' />
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
