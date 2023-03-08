import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from 'rsuite/esm/Nav/NavItem'
import { useMediaQuery } from '../../../../../misc/custom-hooks'

interface IProps {
  isActive: boolean,
  icon: any,
  txt: string,
  to: string
}

const SecondaryNavbarItem: React.FunctionComponent<IProps> = (props) => {
  const { isActive, icon, txt, to } = props
  const isMobile = useMediaQuery('(max-width: 1100px)')
    return (
        <NavItem
            as={Link}
            to={to}
            className={`${isActive ? 'active-nav-item' : ''} text-uppercase bundle-nav`}
            style={styles.txt}
            preventScrollReset={true}
        >
            {icon} {isMobile ? null : txt}
        </NavItem>
    )
}

const styles = {
    txt: {
        fontSize: 22.5,
        fontWeight: '700',
    }
}

export default SecondaryNavbarItem
