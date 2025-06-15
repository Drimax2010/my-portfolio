import React from 'react';
import styles from './header.module.css';
import avatarImg from '../../assets/avatar.jpeg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>¡Hola! Soy Daniel Tobón</h1>
        <p className={styles.subtitle}>
          🎯 Desarrollador de software con más de 10 años de experiencia enfocado en solciones de transporte.
          Experto en DDD, CQRS, Event Sourcing y microservicios.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.button}>Ver Proyectos</a>
          <a href="#contact" className={styles.buttonOutline}>Contáctame</a>
        </div>
      </div>
      <div className={styles.avatarWrapper}>
        <img src={avatarImg} alt="Daniel Tobón" className={styles.avatar}/>
      </div>
    </header>
  );
}