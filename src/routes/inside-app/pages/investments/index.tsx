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
                        name={project.name}
                        description={project.description}
                        endDate={project.endDate}
                        goal={project.goal}
                        currentlyInvested={project.currentlyInvested}
                        yearlyReturn={project.yearlyReturn}
                        returnSum={project.returnSum}
                        value={project.value}
                        image={project.image}
                        movies={project.movies}
                        key={project.index}
                    />
                ))
            }
        </LayoutWithSidebar>
    )
}

export default InvestmentPage