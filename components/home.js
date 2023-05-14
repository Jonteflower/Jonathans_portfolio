import React, { useRef } from 'react';
import HeroSection from './heroSection';
import SkillsSection from './skillsSection';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

const DynamicExperienceSection = dynamic(() => import('./experienceSection'), {
    ssr: false,
    loading: () => <div>Loading Experience Section...</div>,
});

const DynamicProjectsSection = dynamic(() => import('./founderSection'), {
    ssr: false,
    loading: () => <div>Loading Projects Section...</div>,
});

const DynamicContactSection = dynamic(() => import('./contactSection'), {
    ssr: false,
    loading: () => <div>Loading Contact Section...</div>,
});

function Home() {
    const ref = useRef(null);

    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const [skillsRef, skillsInView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const [experienceRef, experienceInView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const [projectsRef, projectsInView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <HeroSection scrollToNext={handleClick} scrollRef={heroRef} />
            {heroInView && <SkillsSection scrollRef={ref} secondRef={skillsRef} />}
            {skillsInView && (
                <DynamicExperienceSection scrollRef={experienceRef} />
            )}
            {experienceInView && (
                <DynamicProjectsSection scrollRef={projectsRef} />
            )}
            {projectsInView && <DynamicContactSection />}
        </>
    );
}

export default Home;
