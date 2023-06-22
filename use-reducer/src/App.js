import { useReducer } from "react";

//init state
const initState = 0

//Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//Reducer
const reducer = (state, action) => {

  switch (action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('invalid action')
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initState)

  return (
    <div style={{ padding: 20 }}>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(UP_ACTION)}
      >
        Up
      </button>
      <button
        onClick={() => dispatch(DOWN_ACTION)}
      >
        Down
      </button>
    </div>
  )
}

export default App;
