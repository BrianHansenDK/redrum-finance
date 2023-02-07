import React from 'react'

const Stat = ({ icon, title, stats }: {icon:string, title:string, stats:string}) => {
    return (
        <div style={{width: 320}}>
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
