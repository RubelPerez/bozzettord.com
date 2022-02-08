import React from 'react';
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import Services from './Services'
import AboutUs from './AboutUs'
import Contact from './Contact'
const Index = () => {

    return (
        <div className='container-fluid'>
            <Header />
            <Services />
            <AboutUs />
            <Contact />
            <Footer />
        </div>
    )
}

export default Index;