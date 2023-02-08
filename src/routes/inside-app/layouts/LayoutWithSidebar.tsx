import React from 'react';
import AppNavBar from '../components/AppNavBar';
import SideBar from '../components/SideBar';

export interface ILayoutWithSidebarProps { children: any, en: boolean }

const styles = {
    innerPage: {
        flex: 1,
        paddingTop: 125,
        paddingLeft: 300,
        paddingRight: 300,
    },
}

const LayoutWithSidebar: React.FunctionComponent<ILayoutWithSidebarProps> = (props) => {
    const { children, en } = props
    return (
        <>
            <AppNavBar fixed en={en} />
            <div className='d-flex'>
                <SideBar en={en}/>
                <div className='' style={styles.innerPage}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default LayoutWithSidebar
