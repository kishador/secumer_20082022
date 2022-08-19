import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../Footer';
import Nav from '../Nav';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import Boutique from '../../pages/Boutique';
import Rdv from '../../pages/Rendez-vous';

const index = () => {
    return (
      <div>
        <Nav />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rdv" element={<Rdv />} />
          <Route path="/boutique" element={<Boutique />} />
        </Routes>
        </main>
        <Footer />
      </div>
    );
  };
  export default index;