import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import PageTitle from '../components/PageTitle'
import Error from '../components/404'
import Scrollbar from '../components/scrollbar/scrollbar'
import Footer from '../components/Footer';
import Logo from '../images/logo-2.svg'
const ErrorPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={Logo} />
            <PageTitle pageTitle={'404'} pagesub={'404'}/> 
            <Error/>
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar/>
        </Fragment>
    )
};
export default ErrorPage;


