# Bootstrap Starter (ZURB Style)

Esta plantilla utiliza los estilos y scripts de [Bootstrap 4](http://getbootstrap.com/) pero viene preparada con la configuración de [Foundation ZURB Template](https://github.com/zurb/foundation-zurb-template).

La plantilla viene configurada con un generador Gulp con las siguientes características:

- Sistema de plantillas con Panini
- Compilación y prefijos CSS con Sass
- Agrupador de modulos JavaScript con Webpack
- Servidor local BrowserSync
- Para construcción construye:
  - Compresión de CSS
  - Compresión de JavaScript
  - Compresión de Imágenes

## Instalación

### Requisitos

Para utilizar la plantilla tu computadora necesita:

- [NodeJS](https://nodejs.org/en/) (0.12 o superior)
- [Git](https://git-scm.com/)


### Pasos

Primero descarga la plantilla de Git desde el repositorio

```bash
git clone clone https://github.com/yuraksisa/bootstrap-starter.git
```

Abre la carpeta en la línea de comandos, e instala las dependencias necesarias:

```bash
cd project_name
yarn
```

Finalmente ejecuta `yarn start` para arrancar Gulp.

```bash
yarn start
```

Tu sitio web estará disponible en la siguiente URL:

```
http://localhost:8000
```

Tu sitio final se creará en la carpeta `dist` del proyecto.

Para crear una versión del sito para producción, con los assets comprimidos, ejecuta `yarn run build`.

```bash
yarn run build
```
