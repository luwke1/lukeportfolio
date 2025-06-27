import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import GlitchText from './helpers/GlitchText';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1 + 0.5,
                duration: 0.5,
            },
        }),
    };

    return (
        <section id="home" className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden">
            <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-green-900/50" style={{
                    background: 'radial-gradient(circle, rgba(10,40,20,0) 0%, rgba(5,15,10,1) 80%)',
                }} />
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                            repeating-linear-gradient(0deg, transparent, transparent 1px, #0a281a 1px, #0a281a 2px),
                            repeating-linear-gradient(90deg, transparent, transparent 1px, #0a281a 1px, #0a281a 2px)
                        `,
                    backgroundSize: '30px 30px',
                    opacity: '0.2'
                }}></div>
            </motion.div>
            <div className="relative z-10 p-4">
                <motion.h1
                    custom={0}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-green-300 mb-4"
                >
                    <GlitchText>Luke Flock</GlitchText>
                </motion.h1>
                <motion.p
                    custom={1}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-xl md:text-2xl text-green-200"
                >
                    Full-Stack Developer & Designer
                </motion.p>
                <motion.div
                    custom={2}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-green-300"
                >
                    <ArrowDown className="animate-bounce h-8 w-8" />
                </motion.div>
            </div>
        </section>
    );
};

export default Home;