import React from 'react';
import styles from './proficiency.module.css';
import illustration from '../../assets/gifs/proficiency.gif';
import useScrollReveal from '../hooks/useScrollReveal';

export default function Proficiency() {
  const skills = [
    { label: 'Frontend / Design', value: 60 },
    { label: 'Backend & Business Logic', value: 95 },
    { label: 'Databases (MongoDB & SQL)', value: 90 },
  ];
  const [ref, revealed] = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="proficiency" 
    className={`reveal ${revealed ? 'revealed' : ''} ${styles.proficiencySection}`}
    ref={ref}>
      <div className={styles.content}>
        <h2 className={styles.title}>Competencias</h2>
        <div className={styles.list}>
          {skills.map((s) => (
            <div key={s.label} className={styles.item}>
              <span className={styles.label}>{s.label}</span>
              <div className={styles.bar}>
                <div
                  className={styles.fill}
                  style={{ width: `${s.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={illustration} alt="Proficiency illustration" />
      </div>
    </section>
  );
}