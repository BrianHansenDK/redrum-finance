import React from 'react'
import { mainColors } from './colors'

const ResponsiveStyles = {
  mainBtn: {
    backgroundColor: mainColors.rSuiteBlue,
    color: mainColors.white,
    boxShadow: `0 5px 10px 0 ${mainColors.blueShadow}`,
    border: `1px solid ${mainColors.rSuiteBlue}`
  },
  logoutBtn: {
    backgroundColor: mainColors.white,
    color: mainColors.red,
    boxShadow: `0 5px 10px 0 ${mainColors.redShadow}`,
    border: `1px solid ${mainColors.red}`,
  }
}

export default ResponsiveStyles
