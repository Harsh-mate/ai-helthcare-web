import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle'
import ServiceSection from '../components/ServiceSection';
import CtafromSection from '../components/CtafromSection';
import Footer from '../components/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '../images/logo-2.svg'


const ServicePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'Service'} pagesub={'Service'} />
            <ServiceSection hclass={"service_section_s2 s3 section-padding"} sliceEnd={6} showSectionTitle={false} AllServices={false} />
            <CtafromSection hclass={'ctafrom_section'} />
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />

        </Fragment>
    )
};
export default ServicePage;
