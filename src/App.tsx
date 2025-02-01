import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventProfileCard from './components/Eventcard';
import Stats from './components/local';
import HeroSection from './components/Herosection';
import SpeakersShowcase from './components/Profile';
import SpeakerProfile from './components/SpeakerProfile';
import Ticket from './components/EventEmbed';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from './components/Footer';
import ComingSoon from './components/sponsor';



const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <HeroSection />
              <SpeakersShowcase />
            </>
          } />
          <Route path="/speakerProfile/:id" element={<SpeakerProfile />} />
          <Route path='/EventCard' element={ <EventProfileCard/> }/>
          <Route path="/EventEmbed" element={ <Ticket/> } />
          <Route path='/sponsor' element={ <ComingSoon/> } />
          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;