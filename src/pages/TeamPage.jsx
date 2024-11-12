import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle'
import TeamSection from '../components/TeamSection';
import CtafromSection from '../components/CtafromSection';
import Footer from '../components/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '../images/logo-2.svg'


const ServicePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'Doctor'} pagesub={'Doctor'} />
            <TeamSection hclass='team_section_s2 section-padding' sliceEnd={6} showSectionTitle={false}/>
            <CtafromSection hclass={'ctafrom_section'} />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar  />

        </Fragment>
    )
};
export default ServicePage;
