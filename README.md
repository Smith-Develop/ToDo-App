# Fase 3: Manejo de Estado

## 📚 ¿Qué aprenderás en esta rama?
- Usar el Hook useState
- Manejar estado en componentes
- Pasar estado entre componentes
- Implementar actualizaciones de estado

## 🔄 Estado en React

### Conceptos Principales
- Estado local vs global
- Inmutabilidad
- Actualizaciones de estado
- Props drilling

## 🎯 Objetivos de Aprendizaje
- [x] Comprender el ciclo de vida del estado
- [x] Manejar actualizaciones de estado
- [x] Implementar patrones de lifting state up
- [x] Evitar problemas comunes de estado

## 💻 Implementaciones
```jsx
const [todos, setTodos] = useState([])
const [newTodo, setNewTodo] = useState('')
```

✅ Retos

Implementa un estado para filtros
Crea un estado para modo oscuro
Maneja estado para edición de tareas