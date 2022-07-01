import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import Footer from "../components/_App/Footer";
import PageBanner from '../components/Common/PageBanner';
import PricingStyleOne from '../components/PricingPlans/PricingStyleOne';
import PricingStyleTwo from '../components/PricingPlans/PricingStyleTwo';

const Pricing = () => (
    <Layout>
        <SEO title="Pricing" /> 

        <Navbar />

        <PageBanner pageTitle="Pricing" />

        <PricingStyleOne />

        <PricingStyleTwo />

        <Footer />
    </Layout>
)

export default Pricing;