import React from 'react';
import styles from './projects.module.css';

export default function ProjectItem({ title, link, contact, repo, description }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      {repo && <a href={repo} target="_blank" rel="noopener noreferrer" className="project-links">Ver repo</a>}
      {link && <a href={link} target="_blank" rel="noopener noreferrer" className="project-links">Ver en Play Store</a>}
      {contact && <a href={contact} target="_blank" rel="noopener noreferrer" className="project-links">Número público del Bot</a>}
      <p className="project-body">{description}</p>
    </div>
  );
}