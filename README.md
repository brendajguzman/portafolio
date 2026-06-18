# Portfolio — Jazmin

Portafolio personal construido con **React + Vite + Tailwind CSS**.

## 🚀 Desarrollo local

```bash
npm install
npm run dev
```

## 🌐 Publicar en GitHub Pages

### 1. Crear el repo en GitHub
Crea un repositorio llamado `portfolio` (o el nombre que quieras).

### 2. Actualizar las rutas
En `vite.config.js`, cambia `base: '/portfolio/'` por el nombre de tu repo:
```js
base: '/nombre-de-tu-repo/',
```

En `package.json`, actualiza `homepage`:
```json
"homepage": "https://TU-USUARIO.github.io/nombre-de-tu-repo"
```

### 3. Conectar y publicar
```bash
git init
git remote add origin https://github.com/TU-USUARIO/portfolio.git
git add .
git commit -m "init: portafolio"
git push -u origin main

# Publicar en GitHub Pages
npm run deploy
```

Esto hace build y sube la carpeta `dist/` a la rama `gh-pages`.

### 4. Activar Pages en GitHub
En tu repo → **Settings → Pages → Branch: gh-pages → Save**

Tu sitio estará en: `https://TU-USUARIO.github.io/portfolio/`

## 📝 Personalización

| Archivo | Qué cambiar |
|---|---|
| `src/components/Hero.jsx` | Nombre, descripción, roles del typewriter |
| `src/components/Experience.jsx` | Trabajos y fechas reales |
| `src/components/Projects.jsx` | Tus proyectos con links reales |
| `src/components/Skills.jsx` | Tu stack real |
| `src/components/Contact.jsx` | Email, GitHub, LinkedIn |
