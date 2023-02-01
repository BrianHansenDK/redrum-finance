import React from 'react'
import { mainColors } from '../../../themes/colors'
import RecieptCard from './RecieptCard'

const RecieptsList = ({investments}: {investments: any}) => {
  return (
    <>
    <h3 style={styles.title} className='text-center'>Reciepts</h3>
    {
      investments.map((inv: any) => (
        <RecieptCard investment={inv} key={inv.id}/>
        ))
      }
      </>
  )
}

const styles = {
  title: {
    fontSize: 38.5,
    color: mainColors.dark,
    marginTop: 50,
  }
}

export default RecieptsList
