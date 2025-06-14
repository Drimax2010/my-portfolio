function Portfolio() {
  return (
    <div className="container">
      <header className="header">
        <h1>¡Hola! Soy Daniel Tobón</h1>
        <p>Desarrollador de software con experiencia en React, Node.js y más.</p>
      </header>
      <section>
        <h2>Proyectos destacados</h2>
        <ul>
          <li>
            <a href="https://github.com/Drimax2010/nombre-del-proyecto">Nombre del Proyecto</a>: breve descripción
          </li>
        </ul>
      </section>
      <section>
        <h2>Contacto</h2>
        <p>Email: tuemail@example.com</p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/tuusuario">linkedin.com/in/tuusuario</a>
        </p>
      </section>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio />);
