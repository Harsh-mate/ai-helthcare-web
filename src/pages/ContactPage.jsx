import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle'
import Contactpage from '../components/Contactpage'
import Scrollbar from '../components/scrollbar/scrollbar'
import Footer from '../components/Footer';

import Logo from '../images/logo-2.svg'

const ContactPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'Contact Us'} pagesub={'Contact'} />
            <Contactpage />
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default ContactPage;

