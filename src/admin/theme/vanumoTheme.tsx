import { mainColors } from "../../routes/inside-app/themes/colors"

export const vanumoColors = {
  main: '#A274FF',
  dark: '#120037',
  white: '#efefef',
}
export const vanumoShadows = {
  image: '0 5px 10px 0 #a274ff3d',
  card: '0 7.5px 15px 0 #a274ff3d',
}

export const vanumoMainBtn = {
  backgroundColor: vanumoColors.main,
  color: vanumoColors.white,
  fontWeight: '700',
  boxShadow: '0 3px 6px 0 #a274ff3d',
}

export const vanumoSecondaryBtn = {
  backgroundColor: mainColors.white,
  color: vanumoColors.main,
  fontWeight: '700',
  boxShadow: '0 3px 6px 0 #a274ff3d',
}

export const pushSuccess = {
  backgroundColor: vanumoColors.main,
  color: mainColors.white,
}
export const pushError = {
  backgroundColor: mainColors.red,
  color: mainColors.white,
}
export const msgInner = {
  color: mainColors.white,
}
