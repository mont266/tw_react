import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner'; 
import ContactInfo from '../components/Contact/ContactInfo';
import GoogleMap from '../components/Contact/GoogleMap';
import ContactForm from '../components/Contact/ContactForm';
import { Messenger } from "../components/Common/Messenger";

const Contact = () => (
    <Layout>
        <Messenger />
        <SEO title="Contact" />

        <Navbar />

        <PageBanner pageTitle="Contact Us" />

        <ContactInfo />

        <ContactForm />
        
        <Footer /> 
    </Layout>
)

export default Contact;