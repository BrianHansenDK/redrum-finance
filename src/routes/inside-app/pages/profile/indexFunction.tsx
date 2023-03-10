import React from 'react'
import { useParams } from 'react-router-dom'
import ProfilePage from '.'
import { useMediaQuery } from '../../../../misc/custom-hooks'

interface IProps {en: boolean, setEn: any}

const ProfilePageWrapper = (WrappedComponent: any) => (props: IProps) => {
    const params = useParams()
    const {en, setEn} = props
    const isMobile = useMediaQuery('(max-width: 1100px)')
    const isDesktop = useMediaQuery('(min-width: 1600px)')
    const [menuOpen, setMenuOpen] = React.useState<boolean>(false)
    const [navOpen, setNavOpen] = React.useState<boolean>(false)
    const openMenu = () => setMenuOpen(true)
    const closeMenu = () => setMenuOpen(false)
    const openNav = () => setNavOpen(true)
    const closeNav = () => setNavOpen(false)
    return (
        <>
            <WrappedComponent
            params={params}
            en={en}
            setEn={setEn}
            isMobile={isMobile}
            isDesktop={isDesktop}
            navOpen={navOpen}
            menuOpen={menuOpen}
            openNav={openNav}
            openMenu={openMenu}
            closeNav={closeNav}
            closeMenu={closeMenu}
            />
        </>
    )
}

export default ProfilePageWrapper(ProfilePage)
