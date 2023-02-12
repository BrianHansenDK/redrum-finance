import React from 'react'
import BoxThemes from '../../../library/themes/BoxThemes'

const NavCard = ({type} : {type: string}) => {
  return (
    <div style={BoxThemes.card}>
      <h1>{type}</h1>
    </div>
  )
}

const styles = {
  card: {
    borderRadius: BoxThemes.card.borderRadius,
    boxShadow: BoxThemes.card.boxShadow,
    padding: BoxThemes.card.padding,
  }
}

export default NavCard
