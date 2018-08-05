# Bootstrap Starter (ZURB Style)

Este plantilla utiliza los estilos y los scripts de  [Bootstrap 4](http://getbootstrap.com/).
Esta plantilla utiliza la configuración de [Foundation ZURB Template](https://github.com/zurb/foundation-zurb-template)

Está configurada con un generador Gulp con las siguientes características:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Instalación

### Requisitos

Para utilizar la plantilla tu computadora necesita:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)


### Pasos

Primero descarga la plantilla de Git desde el repositorio

```bash
git clone clone https://github.com/yuraksisa/bootstrap-starter.git
```

Después abre la carpeta en tu línea de comandos, e instala las dependencias necesarias:

```bash
cd project_name
npm install
```

Finalmente ejecuta `npm start` para arrancar Gulp.

```bash
npm start
```

Tu sitio web estará disponible en la siguiente URL:

```
http://localhost:8000
```

Además, tu sitio final se creará en la carpeta `dist` del proyecto.

Para crear una versión del sito para producción, con los assets comprimidos, ejecuta `npm run build`.

```bash
npm run build
```