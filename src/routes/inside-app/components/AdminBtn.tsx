import React, { useState } from 'react'
import { Button } from 'rsuite'
import { vanumoColors } from '../../../admin/theme/vanumoTheme'
import { mainColors } from '../themes/colors'
import VanumoLogo from '../../../admin/assets/vanumo-logo-white.svg'
import { useNavigate } from 'react-router-dom'

const AdminBtn = () => {
  const navigate = useNavigate()
  const goToVanumo = () => {
    const adminKey = window.prompt('Admin key: ')
    if (adminKey == 'merhi@gmx.net') {
      navigate('/vanumo')
    }
  }
  return (
    <Button appearance='primary' style={styles.btn} className='position-fixed' onClick={goToVanumo}>
      <img src={VanumoLogo} alt="Vanumo logo" style={styles.logo} /> Admin
    </Button>
  )
}

const styles = {
  btn: {
    backgroundColor: vanumoColors.main,
    color: mainColors.white,
    display: 'flex',
    alignItems: 'center',
    bottom: 25,
    right: 25,
  },
  logo: {
    width: 25,
    height: 25,
    marginRight: 5,
  }
}

export default AdminBtn
