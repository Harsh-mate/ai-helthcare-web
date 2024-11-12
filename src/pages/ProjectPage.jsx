import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle'
import ProjectSection from '../components/ProjectSection';
import CtafromSection from '../components/CtafromSection';
import Footer from '../components/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '../images/logo-2.svg'


const ProjectPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'Portfolio'} pagesub={'Portfolio'} />
            <ProjectSection hclass={"project_section_s3 section-padding"} ShowSectionTitle={false} sliceStart={0} sliceEnd={6} />
            <CtafromSection hclass={'ctafrom_section'} />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />

        </Fragment>
    )
};
export default ProjectPage;





