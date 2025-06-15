# Portfolio de Daniel Tobón

Este repositorio contiene el código fuente de mi **Portfolio** personal, donde presento mi perfil profesional, proyectos destacados y datos de contacto.

---

## 📌 Índice

- [Descripción](#descripción)
- [Demo en Vivo](#demo-en-vivo)
- [Estructura de Directorios](#estructura-de-directorios)
- [Tecnologías](#tecnologías)
- [Instalación y Uso](#instalación-y-uso)
- [Despliegue](#despliegue)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## 📄 Descripción

Mi portfolio está diseñado con un **diseño sobrio e interactivo** que incluye:

- Sección de **Proyectos Destacados** con tarjetas dinámicas.
- Efectos de **scroll reveal** para toda la página.
- Sección de **Contacto** con enlaces a LinkedIn y correo.

---

## 🚀 Demo en Vivo

> https://drimax2010.github.io/my-portfolio/

---

## 📁 Estructura de Directorios

```plaintext
my-portfolio/
├─ public/
│  └─ index.html
├─ src/
│  ├─ assets/
│  │  └─ avatar.jpg
│  │  └─ resume_daniel_tobon_uribe.pdf
│  │  ├─ icons/
│  │  ├─ gifs/
│  ├─ components/
│  │  ├─ Header/
│  │  │  ├─ Header.js
│  │  │  └─ header.module.css
│  │  ├─ Skills/
│  │  │  ├─ Skills.js
│  │  │  └─ skills.module.css
│  │  ├─ Proficiency/
│  │  │  ├─ proficiency.js
│  │  │  └─ proficiency.module.css
│  │  ├─ Projects/
│  │  │  ├─ Projects.js
│  │  │  ├─ ProjectItem.js
│  │  │  └─ projects.module.css
│  │  └─ Contact/
│  │     ├─ Contact.js
│  │     └─ contact.module.css
│  │  └─ Experience/
│  │     ├─ Experience.js
│  │     └─ experience.module.css
│  ├─ data/
│  │  └─ projects.js
│  ├─ hooks/
│  │  └─ useScrollReveal.js
│  ├─ styles/
│  │  ├─ variables.css
│  │  ├─ base.css
│  │  ├─ layout.css
│  │  └─ reveal.css
│  ├─ App.js
│  ├─ App.css
│  └─ index.js
├─ .gitignore
└─ README.md
```

---

## 🛠️ Tecnologías

- **React** 19
- **CSS Modules** para encapsulación de estilos
- **Framer Motion** (opcional) para animaciones
- **GitHub Pages** para despliegue

---

## ⚙️ Instalación y Uso

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Drimax2010/mi-portafolio.git
   cd mi-portafolio
Instala dependencias:

```bash
yarn install
```
Inicia el servidor de desarrollo:

```bash
yarn start
```
Abre http://localhost:3000 en tu navegador.

Genera la versión de producción:

```bash
yarn run build
```
📦 Despliegue
Este proyecto está configurado para desplegarse automáticamente en GitHub Pages. Para actualizar:

npm run deploy
(Se recomienda configurar un script deploy con gh-pages o usar la sección Pages en GitHub).

🤝 Contribuciones
¡Se aceptan sugerencias! Para colaborar:

1. Abre un issue describiendo tu propuesta.

2. Crea un branch con tu cambio: git checkout -b feature/nombre

3. Haz commit de tus cambios: git commit -m "feat: descripción breve"

4. Haz push: git push origin feature/nombre

Abre un Pull Request.

📄 Licencia
Este proyecto está bajo la licencia MIT.

📬 Contacto
Email: danieltu1026@gmail.com

LinkedIn: daniel-tobon-uribe

¡Gracias por visitar mi portfolio!