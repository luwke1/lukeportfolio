import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, X } from 'lucide-react';
import GlitchText from './helpers/GlitchText';
import AnimatedSection from './helpers/AnimatedSection';

// Technical Project Images
import dashboardImg from '../assets/Dashboard.PNG';
import merchStoreImg from '../assets/MerchStore.PNG';

// Poster Images
import stussyPosterImg from "../assets/PosterStussy.jpg";
import illegalcivPosterImg from "../assets/illegalciv.jpg";
import tvGirlPosterImg from '../assets/TVGirlPoster.jpg';
import basketcaseImg from '../assets/BasketcasePoster.jpg';
import radioheadImg from '../assets/RadioHead.jpg';
import playboiImg from '../assets/CartiV1.jpg';


const ProjectCard = ({ project }) => (
    <motion.a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -8, scale: 1.02 }}
        className="block bg-green-900/30 border border-green-700/50 rounded-lg overflow-hidden group cursor-pointer"
    >
        <div className="overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="p-6">
            <h4 className="text-2xl font-bold text-green-300 mb-2">{project.title}</h4>
            <p className="text-green-200 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-green-800/60 text-green-200 px-2 py-1 rounded-full text-xs font-semibold">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </motion.a>
);

const CreativeProjectCard = ({ project }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const thumbnailUrl = `https://i.ytimg.com/vi/${project.videoId}/hqdefault.jpg`;

    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-green-900/30 border border-green-700/50 rounded-lg overflow-hidden group"
        >
            <div className="relative w-full bg-black pt-[56.25%]">
                {isPlaying ? (
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&rel=0`}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ) : (
                    <div className="absolute top-0 left-0 w-full h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
                        <img src={thumbnailUrl} alt={project.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
                            <PlayCircle className="w-16 h-16 text-white/80" />
                        </div>
                    </div>
                )}
            </div>
            <div className="p-6">
                <h4 className="text-2xl font-bold text-green-300 mb-2">{project.title}</h4>
                <p className="text-green-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-green-800/60 text-green-200 px-2 py-1 rounded-full text-xs font-semibold">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const PosterCard = ({ poster, onImageClick }) => (
    <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.03 }}
        className="relative overflow-hidden rounded-lg cursor-pointer group"
        onClick={() => onImageClick(poster.image)}
    >
        <img src={poster.image} alt={poster.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100">
            <p className="text-white text-center p-4 text-lg font-bold">{poster.title}</p>
        </div>
    </motion.div>
);

const ImageModal = ({ imageUrl, onClose }) => (
    <AnimatePresence>
        {imageUrl && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.img
                    layoutId={imageUrl}
                    src={imageUrl}
                    alt="Full screen view"
                    className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
                />
                <motion.button
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white"
                >
                    <X size={24} />
                </motion.button>
            </motion.div>
        )}
    </AnimatePresence>
);


const Projects = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const technicalProjects = [
        {
            title: 'CrowdPlay - Gaming Reviews',
            description: 'Full-stack platform for gamers to rate, review, and get AI-powered game recommendations.',
            tags: ['Next.js', 'React', 'Gemini AI', 'PostgreSQL', 'Supabase'],
            image: dashboardImg,
            link: 'https://github.com/luwke1/crowdplay-social'
        },
        {
            title: 'University Merch Store',
            description: 'Full-stack e-commerce site with session-based auth and distinct customer/admin roles.',
            tags: ['Node.js', 'Express', 'Sequelize', 'SQLite', 'Git'],
            image: merchStoreImg,
            link: 'https://github.com/Jack-Underhill/Cpts489-Sp25-GroupProject-MerchStore'
        },
        {
            title: 'Encrypted Messenger App',
            description: 'Secure messaging app using Flask and SQLite, with RSA/AES encryption and bcrypt hashing.',
            tags: ['Python', 'Flask', 'SQLite', 'Encryption'],
            image: 'https://placehold.co/600x400/05100a/34D399?text=Secure+Chat',
            link: 'https://github.com/luwke1/messenger-app'
        },
    ];
    const creativeProjects = [
        {
            title: 'memories in data',
            description: 'A creative video edit of my time studying abroad in Seoul, Korea.',
            videoId: 'yOXr7wK0jj0',
            tags: ['Premiere Pro', 'Video Editing', 'Visual Effects'],
        },
        {
            title: 'more memories in data',
            description: 'Another creative video edit of my time traveling to Busan, Korea.',
            videoId: 'dcXYg02MpgM',
            tags: ['Premiere Pro', 'After Effects', 'Visual Artist'],
        },
    ];
    const posterProjects = [
        {
            title: 'Stüssy Motorsport Poster',
            image: stussyPosterImg
        },
        {
            title: 'Illegal Civ',
            image: illegalcivPosterImg
        },
        {
            title: 'TVGirl Poster',
            image: tvGirlPosterImg
        },
        {
            title: '/basketcase gallery',
            image: basketcaseImg
        },
        {
            title: 'Radiohead poster',
            image: radioheadImg
        },
        {
            title: 'playboi carti',
            image: playboiImg
        },
    ];

    return (
        <AnimatedSection id="projects">
            <div className="container mx-auto max-w-6xl px-4">
                <h2 className="text-4xl font-bold text-green-300 mb-12 text-center"><GlitchText>Technical Projects</GlitchText></h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {technicalProjects.map((proj, i) => <ProjectCard key={i} project={proj} />)}
                </div>

                <h2 className="text-4xl font-bold text-green-300 mb-12 text-center"><GlitchText>Graphic Design</GlitchText></h2>
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mb-24 [column-fill:_balance]">
                    {posterProjects.map((poster, i) => (
                        <div key={i} className="mb-4 break-inside-avoid">
                            <PosterCard poster={poster} onImageClick={setSelectedImg} />
                        </div>
                    ))}
                </div>

                <h2 className="text-4xl font-bold text-green-300 mb-12 text-center"><GlitchText>Video Projects</GlitchText></h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {creativeProjects.map((proj, i) => <CreativeProjectCard key={i} project={proj} />)}
                </div>
            </div>

            <ImageModal imageUrl={selectedImg} onClose={() => setSelectedImg(null)} />
        </AnimatedSection>
    );
};

export default Projects;