import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Hero from '../components/hero';
import AppointmentSection from '../components/AppointmentSection';
import ServiceSection from '../components/ServiceSection';
import About from '../components/about';
import ProcessSection from '../components/ProcessSection';
import ProjectSection from '../components/ProjectSection';
import Testimonial from '../components/Testimonial';
import CtaSection from '../components/CtaSection';
import TeamSection from '../components/TeamSection';
import FunFact from '../components/FunFact';
import BlogSection from '../components/BlogSection';
import CtafromSection from '../components/CtafromSection';
import Footer from '../components/Footer';
import Scrollbar from '../components/scrollbar/scrollbar';
import Logo from '../images/logo.svg'

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-site-header'}  Logo={Logo} />
            <Hero hclass={'static-hero'} />
            <AppointmentSection hclass={'appointment_section'}/>
            <ServiceSection hclass={"service_section section-padding"} />
            <About hclass={'about_section section-padding'}/>
            <ProcessSection hclass={"work_section section-padding"}/>
            <ProjectSection hclass={'project_section section-padding'}/>
            <Testimonial tClass={'testimonial_section testimonial_section_slider'} />
            <CtaSection tClass={'cta_section'} />
            <TeamSection hclass={'team_section section-padding'}/>
            <FunFact hclass={'funfact_section'} />
            <BlogSection tClass={'blog_section section-padding'}/>
            <CtafromSection hclass={'ctafrom_section'}/>
            <Footer hclass={'wpo-site-footer'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;