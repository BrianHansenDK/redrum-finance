import React from 'react'
import NavCard from './NavCard'

const NavCards = () => {
  return (
    <div style={wrapper}>
      <NavCard type='Projects' />
      <NavCard type='Movies' />
      <NavCard type='Users' />
    </div>
  )
}

const wrapper = {
  marginTop: 50,
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
}

export default NavCards
