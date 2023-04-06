import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'rsuite'
import Empty from '../../../../../assets/empty_img.png'

interface IProps {title: string}
const NoInvestmentsCard = (props: IProps) => {
  const {title} = props;
  const navigate = useNavigate()
  return (
    <div className='empty-box'>
      <h1 className="box-title">
        {title}
      </h1>
      <img src={Empty} alt="Empty box" className="box-img" />
      <p className="instructions">
        You can invest in a project on the Dashboard. <br/>
        You can either click on the dashboard on the menu, or press the button below.
      </p>
      <Button appearance='primary' className='r-btn r-main-btn' onClick={() => navigate('/app')}>
        Go to Dashboard
      </Button>
    </div>
  )
}

export default NoInvestmentsCard
