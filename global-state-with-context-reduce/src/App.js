import { useStore, actions } from './store'
import { useRef } from 'react'

function App() {
  //focus
  const inputRef = useRef(null)


  //
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
    inputRef.current.focus()
  }

  console.log(todos)

  return (
    <div style={{ padding: 20 }}>
      <input
        ref={inputRef}
        value={todoInput}
        placeholder="Enter todo..."
        onChange={
          e => {
            dispatch(actions.setTodoInput(e.target.value))
          }
        }
      />
      <button onClick={handleAdd}>ADD</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  );
}

export default App;
