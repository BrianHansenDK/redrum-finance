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
                <div className='pl-2 pr-5 pt-2' style={{flex: 1}}>
                {children}
                </div>
            </div>
        </>
    )
}

export default LayoutWithSidebar