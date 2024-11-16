# 📋 Todo App React - Guía Completa de Aprendizaje

Una aplicación de lista de tareas moderna y funcional construida con React y Tailwind CSS. Este proyecto está diseñado como una guía interactiva para aprender desarrollo web moderno.

[![VISTA PREVIA](https://img.shields.io/badge/▶️_vISTA_PREVIA_DEL_PROYECTO-40AC83?style=for-the-badge)](https://smith-develop.github.io/ToDo-App/)

## 🚀 Características Principales

- ✅ CRUD completo de tareas
- 💾 Persistencia de datos local
- 🎨 Interfaz moderna y responsive
- 📱 Diseño mobile-first
- 🧪 Tests unitarios incluidos

## 🛠️ Tecnologías Utilizadas

- React 18
- Tailwind CSS
- Vite
- Vitest (Testing)
- Git/GitHub

## 📚 Estructura de Aprendizaje

Este repositorio está organizado en ramas que representan cada fase del desarrollo:

### 1️⃣ Setup (rama: 01-setup)
- Configuración inicial del proyecto
- Estructura de carpetas
- Instalación de dependencias
- Configuración de Tailwind CSS

### 2️⃣ Componentes (rama: 02-components)
- Creación de componentes básicos
- Props y tipos
- Estructuración de componentes
- Primeros estilos con Tailwind

### 3️⃣ Estado (rama: 03-state)
- Manejo de estado con useState
- Lifting state up
- Props drilling
- Patrones de estado

### 4️⃣ CRUD (rama: 04-crud)
- Operaciones Create, Read, Update, Delete
- Manejo de datos
- Actualizaciones inmutables
- Optimizaciones

### 5️⃣ Persistencia (rama: 05-storage)
- Local Storage
- Custom Hooks
- Manejo de datos persistentes
- Optimización de almacenamiento

### 6️⃣ Estilos (rama: 06-styling)
- Tailwind avanzado
- Responsive design
- Dark mode
- Animaciones

### 7️⃣ Testing (rama: 07-final)
- Testing con Vitest
- Optimización
- Deployment
- Mejores prácticas

## 🚀 Inicio Rápido

1. Clona el repositorio:
```bash
git clone https://github.com/Smith-Develop/ToDo-App.git
cd ToDo-App
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 📂 Estructura del Proyecto

```

├── assets/ # Recursos estáticos
├── components/ # Componentes reutilizables - Que son?: Son componentes que se pueden reutilizar en diferentes partes de la aplicación
├── hooks/ # Hooks personalizados - Que son?: Son funciones que nos permiten acceder a los estados de React
├── context/ # Contextos - Que son?: Son componentes que nos permiten compartir información entre componentes sin necesidad de pasar props manualmente en cada nivel de la jerarquía
|
└── utils/ # Funciones útiles - Que son?: Son funciones que nos permiten realizar tareas específicas

```

## 🧪 Testing

Ejecutar tests:
```bash
# Modo watch
npm test
```

## 📝 Guía de Aprendizaje

1. Comienza en la rama `01-setup`:
```bash
git checkout 01-setup
```

2. Sigue el README de cada rama
3. Completa los retos propuestos
4. Avanza a la siguiente rama cuando domines los conceptos

## 💡 Mejores Prácticas

- Usa commits descriptivos
- Sigue las convenciones de código
- Escribe tests para nuevas features
- Documenta los cambios importantes

## 🎯 Retos de Aprendizaje

Cada rama incluye retos específicos para practicar los conceptos aprendidos:

1. Implementar filtros de tareas
2. Añadir categorías
3. Implementar drag and drop
4. Añadir sub-tareas
5. Implementar búsqueda
6. Crear estadísticas de completitud

## 📚 Recursos Adicionales

- [Documentación de React](https://reactjs.org/)
- [Guía de Tailwind CSS](https://tailwindcss.com/)
- [Testing Library](https://testing-library.com/)
- [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

## 🐛 Reporte de Bugs

Si encuentras un bug:
1. Revisa que no exista un issue similar
2. Crea un nuevo issue con:
   - Descripción del problema
   - Pasos para reproducirlo
   - Comportamiento esperado
   - Screenshots (si aplica)

## 🙋‍♂️ Autor

John Smith
- GitHub: [@Smith-Develop](https://github.com/smith-develop)
- LinkedIn: [John Smith Grisales](https://linkedin.com/in/smith-develop)
