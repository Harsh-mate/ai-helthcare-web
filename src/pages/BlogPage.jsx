import React, { Fragment } from 'react';
import PageTitle from '../components/PageTitle'
import BlogList from '../components/BlogList'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import logo from '../images/logo-2.svg';

const BlogPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={logo} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'} />
            <BlogList />
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPage;
