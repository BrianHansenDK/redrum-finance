import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, IconButton, Nav, Navbar, SelectPicker } from 'rsuite'
import NavbarBrand from 'rsuite/esm/Navbar/NavbarBrand'
import { database } from '../../../../firebase'
import LOGO from '../../../assets/vanumo-logo-white.svg'
import { vanumoColors } from '../../../theme/vanumoTheme'
import AddIcon from '@rsuite/icons/Tree'
import MovieIcon from '@rsuite/icons/legacy/VideoCamera'
import { mainColors } from '../../../../routes/inside-app/themes/colors'
import NotificationsButton from './NotificationsButton'

const VanumoNavbar = () => {
  const [users, setUsers] = useState<any[]>([])
  const [userIds, setUserIds] = useState<any[]>([])
  const [userId, setUserId] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const navigate = useNavigate()

  let keyData: any[] = []
  let data: any[] = []
  useEffect(() => {
    setLoading(true)
    const reference = ref(database, 'users')
    onValue(reference, (snap) => {
      snap.forEach((user) => {
        data.push(user.val())
        keyData.push(user.key)
      })
    })
    setUsers(data)
    setUserIds(keyData)
    window.setTimeout(() => {setLoading(false)}, 2500)
  }, [])
  return (
    <Navbar style={styles.navbar} className='position-fixed'>
      <NavbarBrand style={styles.brandWrap} as={Link} to='/vanumo'>
        <img style={styles.logo} src={LOGO} alt="Vanumo logo" /> <p style={styles.brandTxt}> Vanumo</p>
      </NavbarBrand>
      <Nav style={styles.searchWrap}>
      <Button appearance='default' color='blue' style={styles.subtleBtn} as={Link} to='/app'>
          RedrumPro
        </Button>
      </Nav>
      <Nav pullRight style={styles.searchWrap}>
        <NotificationsButton />
        <IconButton icon={<MovieIcon/>} as={Link} to={'/vanumo/create-movie'} style={styles.iconBtn} />
        <IconButton icon={<AddIcon/>} as={Link} to={'/vanumo/create-project'} style={styles.iconBtn} />
      <SelectPicker
      loading={loading}
      onChange={setUserId}
      data={users.map((user, index) => ({ label: user.email, value: userIds[index] }))}
      style={{ width: 300 }}
      placeholder='Search user'
      />
      <Button appearance='primary' style={styles.btn} as={Link} to={`/vanumo/users/${userId}`}>
        Go
      </Button>
      </Nav>
    </Navbar>
  )
}

const styles = {
  navbar: {
    backgroundColor: vanumoColors.main,
    height: 75,
    boxShadow: '0 3px 6px 0 rgba(0, 0, 29, .25)',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 7,
    paddingRight: 25,
  },
  brandWrap: {
    height: 75,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '3em',
    height: '3em',
  },
  brandTxt: {
    color: vanumoColors.white,
    fontSize: 20.5,
    lineHeight: 1,
    fontWeight: '700',
    marginLeft: 10,
  },
  searchWrap: {
    height: 75,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtleBtn: {
    color: vanumoColors.main,
  },
  iconBtn: {
    backgroundColor: mainColors.white,
    color: vanumoColors.main,
    fontWeight: '700',
    marginRight: 20,
  },
  searchbar: {
    alignSelf: 'center',
  },
  btn: {
    backgroundColor: vanumoColors.dark,
    color: vanumoColors.white,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    marginLeft: 10,
  }
}

export default VanumoNavbar
