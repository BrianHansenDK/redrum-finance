import React from 'react';
import ProjectShowcase from '../../components/ProjectShowcase';
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar';
import { PROJECTS } from '../dashboard/components/util';
import RadialChart from './components/RadialChart';
import Searchbar from './components/searchbar';

const InvestmentPage = ({en, setEn} : {en: boolean, setEn: any}) => {

    return (
        <LayoutWithSidebar en={en} setEn={setEn}>
            {
            // When we have more projects <Searchbar />
            }
            <RadialChart />
            <ProjectShowcase en={en} />

        </LayoutWithSidebar>
    )
}

export default InvestmentPage
