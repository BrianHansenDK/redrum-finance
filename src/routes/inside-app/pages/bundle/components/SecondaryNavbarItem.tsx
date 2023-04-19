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
  const isMobile = useMediaQuery('(max-width: 1100px)');
  const isSmall = useMediaQuery('(max-width: 360px)');

  const styles = {
    txt: {
        fontSize: isSmall ? 15 : 22.5,
        fontWeight: '700',
    }
}
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

export default SecondaryNavbarItem
