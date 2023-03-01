import React from 'react'
import { useMediaQuery } from '../../../misc/custom-hooks'
import { mainColors } from '../../inside-app/themes/colors'

const Stat = ({ icon, title, stats }: {icon:string, title:string, stats:string}) => {
  const isMobile = useMediaQuery('(max-width: 968px)')
  const isDesktop = useMediaQuery('(min-width: 1600px)')
  const styles = {
    wrap: {
      width: isMobile ? 250 : 320,
      margin: '15px auto',
      top: isDesktop ? -110 : 0,
    }
  }
  return (
        <div style={styles.wrap} className='flex-column position-relative'>
            <img src={icon} alt={title} className='stat-img' />
            <p style={{
              fontSize: isDesktop ? 30 : 18.5,
              fontWeight: '700',
              color: mainColors.dark,
              opacity: .7,
              }}>
                {title}
            </p>
            <h3 style={{
              fontSize: isDesktop ? 35 : 22.5,
              fontWeight: '700',
              color: mainColors.dark,
              }}>
                {stats}
            </h3>
        </div>
    )
}

export default Stat
