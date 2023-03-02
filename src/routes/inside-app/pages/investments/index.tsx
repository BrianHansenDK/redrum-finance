import React from 'react';
import { useMediaQuery } from '../../../../misc/custom-hooks';
import ProjectShowcase from '../../components/ProjectShowcase';
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar';
import { PROJECTS } from '../dashboard/components/util';
import RadialChart from './components/RadialChart';
import Searchbar from './components/searchbar';

const InvestmentPage = ({en} : {en: boolean}) => {
  const isMobile = useMediaQuery('(max-width: 1100px)')
    return (
        <>
            {
            // When we have more projects <Searchbar />
            }
            <RadialChart isMobile={isMobile} />
            <ProjectShowcase en={en} isMobile={isMobile} />

        </>
    )
}

export default InvestmentPage
