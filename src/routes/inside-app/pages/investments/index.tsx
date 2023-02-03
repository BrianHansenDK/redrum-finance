import React from 'react';
import ProjectShowcase from '../../components/ProjectShowcase';
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar';
import { PROJECTS } from '../dashboard/components/util';
import RadialChart from './components/RadialChart';
import Searchbar from './components/searchbar';

const InvestmentPage = () => {

    return (
        <LayoutWithSidebar>
            {
            // When we have more projects <Searchbar />
            }
            <RadialChart />
            <ProjectShowcase />

        </LayoutWithSidebar>
    )
}

export default InvestmentPage
