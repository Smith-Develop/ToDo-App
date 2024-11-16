# Fase 1: Configuración Inicial del Proyecto

## 📚 ¿Qué aprenderás en esta rama?
- Crear un proyecto React usando Vite
- Configurar Tailwind CSS en un proyecto React
- Estructurar carpetas de un proyecto profesional
- Comandos básicos de Git

## 🛠️ Configuración del Entorno

### Requisitos Previos
- Node.js instalado
- Git instalado
- Editor de código (VS Code recomendado)

### Pasos

1. Crear proyecto:
```bash
npm create vite@latest todo-app -- --template react
cd todo-app
npm install
```

Instalar Tailwind:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Configurar Tailwind:

- En `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

📁 Estructura de Carpetas

```bash
├── src/  # Carpeta principal del proyecto
├── assets/ # Recursos estáticos
├── components/ # Componentes reutilizables - Que son?: Son componentes que se pueden reutilizar en diferentes partes de la aplicación
├── hooks/ # Hooks personalizados - Que son?: Son funciones que nos permiten acceder a los estados de React
├── context/ # Contextos - Que son?: Son componentes que nos permiten compartir información entre componentes sin necesidad de pasar props manualmente en cada nivel de la jerarquía
|
└── utils/ # Funciones útiles - Que son?: Son funciones que nos permiten realizar tareas específicas
```

🎯 Objetivos de Aprendizaje

 Entender la estructura básica de un proyecto React
 Conocer el sistema de módulos de JavaScript
 Aprender a configurar un proyecto desde cero
 Dominar los comandos básicos de Git

🤔 Conceptos Clave

Vite como herramienta de desarrollo
Sistema de módulos ES6
Configuración de Tailwind
Estructura de proyectos React

✅ Retos

Modifica el archivo tailwind.config.js para añadir colores personalizados
Crea una estructura de carpetas alternativa
Inicializa un nuevo repositorio Git