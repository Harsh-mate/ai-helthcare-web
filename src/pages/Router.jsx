import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from './HomePage'
import AboutPage from './AboutPage';
import TeamPage from './TeamPage';
import TeamSinglePage from './TeamSinglePage';
import FaqPage from './FaqPage';
import ProjectPage from './ProjectPage';
import ProjectSingle from './ProjectSingle';
import ServicePages from './ServicePage';
import ServiceSinglePage from './ServiceSinglePage/ServiceSinglePage';
import BlogPage from './BlogPage'
import BlogPageLeft from './BlogPageLeft' 
import BlogPageFullwidth from './BlogPageFullwidth'
import BlogDetails from './BlogDetails'
import BlogDetailsLeftSiide from './BlogDetailsLeftSiide'
import BlogDetailsFull from './BlogDetailsFull'
import ContactPage from './ContactPage';
import ErrorPage from './ErrorPage';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="faq" element={<FaqPage/>} />
          <Route path="services" element={<ServicePages/>} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="project" element={<ProjectPage/>} />
          <Route path="project-single/:slug" element={<ProjectSingle />} />
          <Route path='blog' element={<BlogPage/>} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='404' element={<ErrorPage />} /> 
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
