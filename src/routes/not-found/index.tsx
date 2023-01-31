import React from 'react'
import { mainColors } from '../inside-app/themes/colors'
import MainLayout from '../layouts/mainLayout'

interface IProps {
  isVisible: any,
  openModal: any,
  closeModal: any,
}
const PageNotFound: React.FunctionComponent<IProps> = (props) => {
  const {isVisible, openModal, closeModal} = props
  return (
    <MainLayout dark={true} openModal={openModal} closeModal={closeModal} isVisible={isVisible}>
      <h1 style={styles.pageTitle}>Page does not exist</h1>
    </MainLayout>
  )
}
const styles = {
  pageTitle: {
    marginTop: 100,
    fontSize: 40.5,
    color: mainColors.dark,
  }
}
export default PageNotFound
