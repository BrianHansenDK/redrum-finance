import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'rsuite'
import Empty from '../../../../../assets/empty_img.png'

const NoInvestmentsCard = () => {
  const navigate = useNavigate()
  return (
    <div className='empty-box'>
      <h1 className="box-title">
        No investments yet
      </h1>
      <img src={Empty} alt="Empty box" className="box-img" />
      <p className="instructions">
        You can invest in a project on the Dashboard ot in the investments page.
      </p>
      <Button appearance='primary' className='r-btn r-main-btn' onClick={() => navigate('/app')}>
        Go to Dashboard
      </Button>
    </div>
  )
}

export default NoInvestmentsCard
