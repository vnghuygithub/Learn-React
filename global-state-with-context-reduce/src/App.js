import { useStore, actions } from './store'

function App() {

  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  return (
    <div style={{ padding: 20 }}>
      <input
        value={todoInput}
        placeholder="Enter todo..."
        onChange={
          e => {
            dispatch(actions.setTodoInput(e.target.value))
          }
        }
      />
    </div>
  );
}

export default App;
