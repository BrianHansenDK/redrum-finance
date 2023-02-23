import React from 'react'
import { Button, ButtonGroup } from 'rsuite'
import { mainColors } from '../../../../../../routes/inside-app/themes/colors'
import { vanumoColors } from '../../../../../theme/vanumoTheme'

const RequestFilterBtns = ({filter, setFilter} : {filter: string, setFilter: any}) => {

  function filterRequests(str: string) {
    setFilter(str)
  }
  return (
    <ButtonGroup style={styles.wrap}>
      <Button appearance='primary'
      style={{
        backgroundColor: vanumoColors.dark,
        color: filter == 'new' ? vanumoColors.main : vanumoColors.white
      }}
      onClick={() => filterRequests('new')}
      >
        New
      </Button>
      <Button appearance='primary'
      style={{
        backgroundColor: vanumoColors.dark,
        color: filter == 'in progress' ? vanumoColors.main : vanumoColors.white
      }}
      onClick={() => filterRequests('in progress')}
      >
        In Progress
      </Button>
      <Button appearance='primary'
      style={{
        backgroundColor: vanumoColors.dark,
        color: filter == 'complete' ? vanumoColors.main : vanumoColors.white
      }}
      onClick={() => filterRequests('complete')}
      >
        Complete
      </Button>
      <Button appearance='primary'
      style={{
        backgroundColor: vanumoColors.dark,
        color: filter == 'rejected' ? vanumoColors.main : vanumoColors.white
      }}
      onClick={() => filterRequests('rejected')}
      >
        Rejected
      </Button>
    </ButtonGroup>
  )
}

const styles = {
  wrap: {
    marginTop: 25,
  },
  btn: {
    backgroundColor: vanumoColors.dark,
  },
}

export default RequestFilterBtns
