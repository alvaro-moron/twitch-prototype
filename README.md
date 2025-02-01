# 📺 Twitch Clone

Este es un proyecto que replica la interfaz y funcionalidades principales de Twitch, utilizando la **API de Twitch** para obtener datos en tiempo real sobre streams, usuarios y juegos.

## 🚀 Tecnologías Utilizadas

- **Framework:** Nuxt.js con TypeScript
- **Estilos:** Sass (SCSS)
- **Linter:** ESLint + Prettier
- **Pre-commit hooks:** Husky + Commitlint + Lint-staged
- **Autenticación:** OAuth de Twitch
- **API:** [Twitch API](https://dev.twitch.tv/docs/api/)

## ⚙️ Instalación y Configuración

1. Clona el repositorio:

   ```bash
   git clone https://github.com/tu-usuario/twitch-prototype.git
   cd twitch-prototype
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` con tus credenciales de Twitch:

   ```plaintext
   TWITCH_CLIENT_ID=tu_client_id
   TWITCH_CLIENT_SECRET=tu_client_secret
   TWITCH_REDIRECT_URI=http://localhost:3000/callback
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

## 🔧 Configuración de Herramientas

### ESLint + Prettier

Para mantener un código limpio y consistente, se usa **ESLint** junto con **Prettier**. La configuración se encuentra en `.eslintrc.js` y `.prettierrc`.

### Husky

Husky se usa para ejecutar _hooks_ de Git y evitar que se hagan commits o pushes con errores. Instalación:

```bash
npx husky install
```

Agregar hooks:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
npx husky add .husky/commit-msg "npx --no-install commitlint --edit \"$1\""
```

### Commitlint

Se usa para validar mensajes de commit con la convención **Conventional Commits**.

Archivo `commitlint.config.ts`:

```typescript
export default {
  extends: ['@commitlint/config-conventional'],
};

.....

```

### Lint-staged

Para ejecutar linters solo en archivos modificados en el commit:

Archivo `.lintstagedrc`:

```json
{
  "*.{js,ts,vue}": "eslint --fix",
  "*.{js,ts,vue,json,css,scss,md}": "prettier --write"
}
```

## 📌 Funcionalidades

✅ Listado de streams en vivo\
✅ Búsqueda de streamers y juegos\
✅ Autenticación con Twitch OAuth\
✅ Página de perfil de usuario\
✅ Reproductor de video embebido

## 📷 Capturas

_Aquí puedes agregar imágenes o GIFs mostrando la app en funcionamiento._

## 📜 Licencia

Este proyecto es de código abierto y se distribuye bajo la licencia **MIT**.

---

🔗 **Twitch API Docs:** [https://dev.twitch.tv/docs/api/](https://dev.twitch.tv/docs/api/)\
📧 **Contacto:** [alvaro21mc+trabajo@gmail.com](mailto:alvaro21mc+inversion@gmail.com)
