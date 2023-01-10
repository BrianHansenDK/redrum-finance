import React from 'react';
import AppNavBar from '../components/AppNavBar';
import SideBar from '../components/SideBar';

export interface ILayoutWithSidebarProps {children:any}

const LayoutWithSidebar: React.FunctionComponent<ILayoutWithSidebarProps> = (props) => {
    const {children} = props
    return (
        <>
            <AppNavBar/>
            <div className='d-flex'>
                <SideBar/>
                {children}
            </div>
        </>
    )
}

export default LayoutWithSidebar