import React from 'react'

const Stat = ({ icon, title, stats }: { icon: any, title: any, stats: any }) => {
    return (
        <div>
            <img src={icon} alt={title} className='stat-img' />
            <h4>
                {title}
            </h4>
            <h3>
                {stats}
            </h3>
        </div>
    )
}

export default Stat