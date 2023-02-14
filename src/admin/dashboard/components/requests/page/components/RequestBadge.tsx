import React, { FunctionComponent } from 'react'
import { Nav } from 'rsuite'
import NavItem from 'rsuite/esm/Nav/NavItem'
import NavMenu from 'rsuite/esm/Nav/NavMenu'
import { FirebaseRequest } from '../../../../../../database/Objects'
import { mainColors } from '../../../../../../routes/inside-app/themes/colors'
import { vanumoColors } from '../../../../../theme/vanumoTheme'
import SaveRequestStateBtn from './SaveRequestStateBtn'

interface IProps {request: FirebaseRequest}
const RequestBadge: FunctionComponent<IProps> = (props) => {
  const {request} = props
  const [state, setState] = React.useState<string>(request.state)
  const styles = {
    badge: {
      backgroundColor: state == 'new' ? vanumoColors.red :
       state == 'in progress' ? mainColors.blueAccent :
       state == 'complete' ? mainColors.success :
       vanumoColors.main,
      boxShadow: `0 4px 8px 0 ${state == 'new' ? vanumoColors.red :
      state == 'in progress' ? mainColors.blueAccent :
      state == 'complete' ? mainColors.success :
      vanumoColors.main}`
    },
    navItem: {}
  }
  return (
    <>
    <Nav className='request-badge' style={styles.badge}>
      <NavMenu title={state}>
        <Nav vertical>
        <NavItem
        disabled={state == 'new'}
        onClick={() => setState('new')}>
          new
        </NavItem>
        <NavItem
        disabled={state == 'in progress'}
        onClick={() => setState('in progress')}>
          in progress
        </NavItem>
        <NavItem
        disabled={state == 'complete'}
        onClick={() => setState('complete')}>
          complete
        </NavItem>
        <NavItem
        disabled={state == 'rejected'}
        onClick={() => setState('rejected')}>
          rejected
        </NavItem>
        </Nav>
      </NavMenu>
    </Nav>
    <SaveRequestStateBtn request={request} state={state} />
    </>
  )
}

export default RequestBadge
