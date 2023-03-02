import React from 'react'
import { useParams } from 'react-router-dom'
import ProjectDetailsPage from '.'
import { useMediaQuery } from '../../../../misc/custom-hooks'

interface IProps {en: boolean, setEn: any}

const ProjectDetailsPageWrapper = (WrappedComponent: any) => (props: IProps) => {
    const params = useParams()
    const {en, setEn} = props
    const isMobile = useMediaQuery('(max-width: 1100px)')
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

export default ProjectDetailsPageWrapper(ProjectDetailsPage)
