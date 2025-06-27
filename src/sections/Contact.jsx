import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import GlitchText from './helpers/GlitchText';
import AnimatedSection from './helpers/AnimatedSection';

const Contact = () => {
    return (
        <AnimatedSection id="contact">
            <div className="container mx-auto text-center max-w-6xl">
                <h2 className="text-4xl font-bold text-green-300 mb-4"><GlitchText>Get In Touch</GlitchText></h2>
                <p className="text-green-200 max-w-2xl mx-auto mb-12 text-lg">
                    I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. Hope we can create something together.
                </p>
                <motion.a
                    href="mailto:lflock03@gmail.com"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(52, 211, 153, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-green-500 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg shadow-green-500/20"
                >
                    <GlitchText>Say Hello</GlitchText>
                </motion.a>
                <div className="flex justify-center space-x-8 mt-16">
                    <motion.a href="https://linkedin.com/in/luke-flock-496ba1254/" target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, color: '#6EE7B7' }} className="text-green-300 transition-all">
                        <Linkedin className="h-8 w-8" />
                    </motion.a>
                    <motion.a href="https://github.com/luwke1" target="_blank" rel="noopener noreferrer" whileHover={{ y: -4, color: '#6EE7B7' }} className="text-green-300 transition-all">
                        <Github className="h-8 w-8" />
                    </motion.a>
                    <motion.a href="mailto:lflock03@gmail.com" whileHover={{ y: -4, color: '#6EE7B7' }} className="text-green-300 transition-all">
                        <Mail className="h-8 w-8" />
                    </motion.a>
                </div>
            </div>
        </AnimatedSection>
    )
};

export default Contact;