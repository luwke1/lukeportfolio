import React, { useState, useEffect, useRef } from 'react';

const GlitchText = ({ children, className }) => {
    const [glitchedText, setGlitchedText] = useState(children);
    const intervalRef = useRef(null);
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    const glitch = () => {
        let text = children;
        let glitched = '';
        for (let i = 0; i < text.length; i++) {
            if (Math.random() > 0.85) {
                glitched += chars[Math.floor(Math.random() * chars.length)];
            } else {
                glitched += text[i];
            }
        }
        setGlitchedText(glitched);
    };

    const stopGlitch = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setGlitchedText(children);
    };

    const startGlitch = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(glitch, 100);
        }
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <span onMouseEnter={startGlitch} onMouseLeave={stopGlitch} className={className}>
            {glitchedText}
        </span>
    );
};

export default GlitchText;