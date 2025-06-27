import React from 'react';
import Navbar from './sections/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
    return (
        <div className="bg-gray-900 text-white font-sans" style={{
            backgroundColor: '#050a08',
            backgroundImage: `radial-gradient(#10402c 1px, transparent 1px)`,
            backgroundSize: `40px 40px`,
        }}>
            <div className="bg-gradient-to-b from-transparent to-[#050a08]">
                <Navbar />
                <main>
                    <Home />
                    <About />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}