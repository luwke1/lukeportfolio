import React from 'react';

const Footer = () => {
    return (
        <footer className="text-center py-6 bg-black/50">
            <p className="text-green-400 text-sm">© {new Date().getFullYear()} Luke Flock. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;