import React from 'react'
import { useMediaQuery } from '../../../misc/custom-hooks'

const Stat = ({ icon, title, stats }: {icon:string, title:string, stats:string}) => {
  const isMobile = useMediaQuery('(max-width: 968px)')
  const styles = {
    wrap: {
      width: isMobile ? 250 : 320,
      margin: '15px auto',
    }
  }
  return (
        <div style={styles.wrap} className='flex-column'>
            <img src={icon} alt={title} className='stat-img' />
            <h4 style={{fontSize: 18.5}}>
                {title}
            </h4>
            <h3>
                {stats}
            </h3>
        </div>
    )
}

export default Stat
