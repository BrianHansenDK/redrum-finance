import React from 'react';
import ProjectShowcase from '../../components/ProjectShowcase';
import LayoutWithSidebar from '../../layouts/LayoutWithSidebar';
import { PROJECTS } from '../dashboard/components/util';
import Searchbar from './components/searchbar';

const InvestmentPage = () => {

    return (
        <LayoutWithSidebar>
            <Searchbar />
            {
                PROJECTS.map((project) => (
                    <ProjectShowcase
                        index={project.index}
                        title={project.title}
                        currentlyInvested={project.currentlyInvested}
                        maxAmount={project.maxAmount}
                        backgroundImg={project.backgroundImg}
                        key={project.index}
                    />
                ))
            }
        </LayoutWithSidebar>
    )
}

export default InvestmentPage