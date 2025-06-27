import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Palette, BrainCircuit, GraduationCap, Github } from 'lucide-react';
import GlitchText from './helpers/GlitchText';
import AnimatedSection from './helpers/AnimatedSection';

// import ReactLogo from "../assets/react.svg?react";

export default function About(){
    const skills = [
        { name: 'React/Next.js', icon: <Code className="h-8 w-8" /> },
        { name: 'Python/Flask', icon: <Code className="h-8 w-8" /> },
        { name: 'JS/TypeScript', icon: <Code className="h-8 w-8" /> },
        { name: 'Node.js', icon: <Code className="h-8 w-8" /> },
        { name: 'PostgreSQL', icon: <Database className="h-8 w-8" /> },
        { name: 'Docker', icon: <Code className="h-8 w-8" /> },
        { name: 'Adobe Suite', icon: <Palette className="h-8 w-8" /> },
        { name: 'Git/GitHub', icon: <Github className="h-8 w-8" /> },
        { name: 'AI/Data Science', icon: <BrainCircuit className="h-8 w-8" /> },
    ];

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.4
            }
        })
    };
    
    return (
        <AnimatedSection id="about">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl font-bold text-green-300 mb-12 text-center"><GlitchText>About Me</GlitchText></h2>
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="text-lg text-green-200 space-y-4">
                        <p>
                            Hi, I am a passionate full-stack developer whose journey into technology was sparked by a love for creative expression. With a background in graphic design and visual art, I was naturally drawn to front-end development, but my curiosity quickly led me down the path of building complete applications from the ground up. Today, I leverage this unique blend of skills to create cohesive digital experiences where every line of code serves the end user.
                        </p>
                        <p>
                            When I'm not coding, I'm most likely exploring outside, watching movies, playing games, or experimenting with generative art. This blend of nature and technology deeply inspires my work.
                        </p>
                        <div className="flex items-start mt-6 space-x-4">
                            <GraduationCap className="h-8 w-8 text-green-400 mt-1"/>
                            <div>
                                <h4 className="font-bold text-xl text-green-300">B.S. in Computer Science</h4>
                                <p className="text-green-400">Washington State University, 2021-2025</p>
                            </div>
                        </div>
                         <div className="flex items-start mt-4 space-x-4">
                            <GraduationCap className="h-8 w-8 text-green-400 mt-1"/>
                            <div>
                                <h4 className="font-bold text-xl text-green-300">Study Abroad, AI & Data Science</h4>
                                <p className="text-green-400">Korea University, Spring 2024</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-green-300 mb-8 text-center"><GlitchText>My Skills</GlitchText></h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {skills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    custom={i}
                                    variants={cardVariants}
                                    className="bg-green-900/30 border border-green-700/50 p-4 rounded-lg flex flex-col items-center justify-center space-y-2 text-center"
                                >
                                    <div className="text-green-400">{skill.icon}</div>
                                    <p className="text-green-200 font-semibold">{skill.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};