import React from 'react';
import AppNavBar from '../components/AppNavBar';
import SideBar from '../components/SideBar';

export interface ILayoutWithSidebarProps { children: any }

const styles = {
    innerPage: {
        flex: 1,
        paddingTop: 125,
        paddingLeft: 300,
        paddingRight: 300,
    },
}

const LayoutWithSidebar: React.FunctionComponent<ILayoutWithSidebarProps> = (props) => {
    const { children } = props
    return (
        <>
            <AppNavBar fixed />
            <div className='d-flex'>
                <SideBar />
                <div className='' style={styles.innerPage}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default LayoutWithSidebar