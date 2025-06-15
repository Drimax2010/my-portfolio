import React from 'react';
import styles from './skills.module.css';
import { skills } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.title}>Que hago</h2>
      <p className={styles.subtitle}>
        APASIONADO DESARROLLADOR FULL STACK QUE LE GUSTA EXPLORAR DIVERSAS TECNOLOGíAS
      </p>
      <div className={styles.grid}>
        {skills.map((s) => (
          <div key={s.name} className={styles.card}>
            <img src={s.icon} alt={s.alt} className={styles.icon} />
            <span className={styles.label}>{s.name}</span>
          </div>
        ))}
      </div>

      <ul className={styles.list}>
        <li>⚡ Desarrollo Front end / Interfaces de usuario para plataformas web & apps mòvil</li>
        <li>⚡ Progressive Web Applications ( PWA ) en stacks SPA</li>
        <li>⚡ <strong>Desarrollo de backend y lógica de negocio</strong> con Node.js, Java y microservicios, asegurando arquitecturas escalables y mantenibles</li>
        <li>⚡ <strong>Gestión y modelado de bases de datos</strong> tanto relacionales como NoSQL, con énfasis en MongoDB como uno de mis principales puntos fuertes </li>
        <li>⚡ Integraciòn de servicios de terceros como GCP / Elastic / Keycloak</li>
        <li>⚡ Mantenimiento y configuración de pipelines CI/CD en GitLab mediante archivos YAML para automatizar despliegues</li>
      </ul>
    </section>
  )
}