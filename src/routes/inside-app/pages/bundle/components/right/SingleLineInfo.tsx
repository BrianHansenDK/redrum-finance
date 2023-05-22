import React, { FunctionComponent } from 'react'
import { numberWithCommas } from '../../../../../../misc/custom-hooks'
import { mainColors } from '../../../../themes/colors'
import { Badge, Tooltip, Whisper } from 'rsuite'
import InfoIcon from '@rsuite/icons/InfoRound'
import './styles/infoline.scss'

interface IProps {
  title: string,
  info: any,
  type?: any,
  line?: boolean,
  isBlue?: boolean,
  isTopElement?: boolean,
  hasSmallTxt?: boolean,
  smallTxt?: string,
  hasTag?: boolean,
  tooltipTxt?: String
 }
const SingleLineInfo: FunctionComponent<IProps> = (props) => {
  const { title, info, type, line = true, isBlue, isTopElement,
    hasSmallTxt, smallTxt, hasTag = false, tooltipTxt = "" } = props
  const styles = {
    wrapper: {
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: hasTag ? '10px 5px' : 5,
        marginTop: isTopElement ? 0 : 2.5,
    },
    title: {
        fontSize: 18.2,
        lineHeight: 1,
    },
    info: {
        fontSize: 18.2,
        fontWeight: '700',
        marginTop: 0,
        color: isBlue ? mainColors.main : mainColors.dark
    },
    line: {
        width: 100 + '%',
        height: 2,
        marginTop: 2.5,
        backgroundColor: '#444',
    },
    small: {
      fontSize: 11.5,
      color: mainColors.dark,
      lineHeight: 1,
      fontWeight: '700',
    }
}
    return (
        <>
            <div className='info-line' style={styles.wrapper}>
                <p style={styles.title}>
                    {title} {hasSmallTxt ? (<> <br/> <span style={styles.small}>{smallTxt}</span> </>) : null}
                </p>
                {hasTag ? (
                  <Whisper placement='top' trigger={'hover'} speaker={(<Tooltip>
                    {tooltipTxt}
                  </Tooltip>)}>
                    <Badge color='blue' content={(<InfoIcon width={15} height={13} />)}>
                    <p style={styles.info}>
                      {type == '€' ? numberWithCommas(info) : info} {type}
                    </p>
                    </Badge>
                  </Whisper>
                ) : (
                  <p style={styles.info}>
                    {type == '€' ? numberWithCommas(info) : info} {type}
                  </p>
                )}

            </div>
            {
                line ? (
                    <div style={styles.line} />
                ) : null
            }
        </>
    )
}

export default SingleLineInfo
