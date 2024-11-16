# Fase 5: Persistencia de Datos

## 📚 ¿Qué aprenderás en esta rama?
- Usar Local Storage
- Implementar hooks personalizados
- Manejar persistencia de datos
- Optimizar almacenamiento

## 💾 Persistencia con Local Storage

### Custom Hook: useTodos

```jsx
const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || []
  })
}
```	
🎯 Objetivos de Aprendizaje

 Implementar persistencia de datos
 Crear hooks personalizados
 Manejar errores de storage
 Optimizar operaciones de storage

💡 Conceptos Clave

Local Storage vs Session Storage
JSON parsing y stringify
Lazy initialization
Error handling

✅ Retos

Implementa sincronización entre pestañas
Añade límite de almacenamiento
Crea backup automático