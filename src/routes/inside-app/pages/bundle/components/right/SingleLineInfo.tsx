import React, { FunctionComponent } from 'react'
import { numberWithCommas } from '../../../../../../misc/custom-hooks'
import { mainColors } from '../../../../themes/colors'

interface IProps {
  title: string,
  info: any,
  type?: any,
  line?: boolean,
  isBlue?: boolean,
  isTopElement?: boolean,
  hasSmallTxt?: boolean,
  smallTxt?: string,
 }
const SingleLineInfo: FunctionComponent<IProps> = (props) => {
  const { title, info, type, line = true, isBlue, isTopElement, hasSmallTxt, smallTxt } = props
  const styles = {
    wrapper: {
        width: 100 + '%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
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
            <div style={styles.wrapper}>
                <p style={styles.title}>
                    {title} {hasSmallTxt ? (<> <br/> <span style={styles.small}>{smallTxt}</span> </>) : null}
                </p>
                <p style={styles.info}>
                    {type == '€' ? numberWithCommas(info) : info} {type}
                </p>
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
