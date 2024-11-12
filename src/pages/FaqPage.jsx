import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle'
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '../images/logo-2.svg'


const ProjectPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'Faq'} pagesub={'Faq'} />
            <FaqSection />
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />

        </Fragment>
    )
};
export default ProjectPage;





