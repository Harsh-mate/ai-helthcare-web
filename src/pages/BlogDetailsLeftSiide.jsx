import React, { Fragment } from 'react';
import PageTitle from '../components/PageTitle'
import BlogSingle from '../components/BlogSingle'
import Scrollbar from '../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import blogs from '../api/blogs'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../images/logo-2.svg';

const BlogDetailsLeftSiide = () => {

    const { slug } = useParams()
    const BlogDetails = blogs.find(item => item.slug === slug)
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header wpo-site-header-s2'} Logo={logo} />
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'} />
            <BlogSingle blLeft={'order-lg-1'} blRight={'order-lg-2'} />
            <Footer hclass={'wpo-site-footer_s2'} />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;


