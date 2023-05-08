import React from 'react'
import { Link } from 'react-router-dom'
import NavItem from 'rsuite/esm/Nav/NavItem'
import { useMediaQuery } from '../../../../../misc/custom-hooks'
import { Tooltip, Whisper } from 'rsuite'

interface IProps {
  isActive: boolean,
  icon: any,
  txt: string,
  to: string,
  en: boolean,
  fixed: boolean,
}

const SecondaryNavbarItem: React.FunctionComponent<IProps> = (props) => {
  const { isActive, icon, txt, to, en, fixed } = props
  const isMobile = useMediaQuery('(max-width: 1100px)');
  const isSmall = useMediaQuery('(max-width: 360px)');

  const styles = {
    txt: {
        fontSize: isSmall ? 15 : 22.5,
        fontWeight: '700',
    }
}
    return (
      <>
        {to !== '' ? (
          <NavItem
            as={Link}
            to={to}
            className={`${isActive ? 'active-nav-item' : ''} text-uppercase bundle-nav`}
            style={styles.txt}
            preventScrollReset={true}
          >
            {icon} {isMobile ? null : txt}
          </NavItem>
        ) : (
          <NavItem
            className={`${isActive ? 'active-nav-item' : ''} text-uppercase bundle-nav`}
            style={styles.txt}
          >
            <Whisper placement={fixed ? 'bottom': 'top'} trigger={'click'} speaker={
              <Tooltip style={{zIndex: 55, fontSize: 'large'}}>
                {en ?
                "We're actively developing this feature." :
                'Wir entwickeln dieses Feature aktiv.'}
              </Tooltip>
            }>
              <span>
                {icon} {isMobile ? null : txt}
              </span>
            </Whisper>
          </NavItem>
        )}

      </>
    )
}

export default SecondaryNavbarItem
