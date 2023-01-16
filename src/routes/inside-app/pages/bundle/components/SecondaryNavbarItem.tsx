import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from 'rsuite/esm/Nav/NavItem'

const SecondaryNavbarItem = ({ isActive, icon, txt, to }: { isActive: boolean, icon: any, txt: string, to: string }) => {
    return (
        <NavItem
            active={isActive}
            as={Link}
            to={to}
        >
            {icon} {txt}
        </NavItem>
    )
}

export default SecondaryNavbarItem