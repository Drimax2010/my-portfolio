import React from 'react';
import { projects } from '../../data/projects';
import ProjectItem from './ProjectItem';
import styles from './projects.module.css';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Projects() {
    const [ref, revealed] = useScrollReveal({ threshold: 0.2 });
     console.log('[TestReveal] render, revealed =', revealed);
    return (
        <section 
            id="projects"
            className={`reveal ${revealed ? 'revealed' : ''} ${styles.projectsSection}`}
            ref={ref}
            >
            <h2 className="section-title">Proyectos Destacados</h2>
            <div className="projects-grid">
                {projects.map((p, i) => (
                    <div key={i} className="project-card">
                       <ProjectItem key={i} {...p} />
                    </div>
                ))}
            </div>
        </section>
    );
}