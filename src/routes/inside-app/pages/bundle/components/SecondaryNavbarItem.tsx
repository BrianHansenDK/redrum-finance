import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from 'rsuite/esm/Nav/NavItem'

const SecondaryNavbarItem = ({ isActive, icon, txt, to }: { isActive: boolean, icon: any, txt: string, to: string }) => {
    return (
        <NavItem
            active={isActive}
            as={Link}
            to={to}
            className='text-uppercase'
            style={styles.txt}
        >
            {icon} {txt}
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