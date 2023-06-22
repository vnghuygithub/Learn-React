import { useReducer, useRef } from "react"

//useReducer
//1. Init state
const initState = {
  job: '',
  jobs: [],
}

//2. Actions
const SET_JOB = 'set_job'
const ADD_JOB = 'add_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => { //payload: du lieu mang theo
  return {
    type: SET_JOB,
    payload
  }
}
const addJob = payload => { //payload: du lieu mang theo
  return {
    type: ADD_JOB,
    payload
  }
}
const deleteJob = payload => { //payload: du lieu mang theo
  return {
    type: DELETE_JOB,
    payload
  }
}
//3. Reducer
const reducer = (state, action) => {

  let newState

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state, // bao luu jobs
        job: action.payload
      }
      break
    case ADD_JOB:
      newState = {
        ...state, // bao luu jobs
        jobs: [...state.jobs, action.payload]
      }
      break
    case DELETE_JOB:
      const newJobs = [...state.jobs]

      newJobs.splice(action.payload, 1)

      newState = {
        ...state, // bao luu jobs
        jobs: newJobs
      }
      break

    default: throw new Error('Invalid action')
  }

  return newState
}

//4. Dispatch


function App() {
  const [state, dispatch] = useReducer(reducer, initState) //state o day lay ra job va jobs
  const { job, jobs } = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }

  return (
    <div style={{ padding: '0 20px' }}>
      <h3>TODOAPP</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="enter todo..."
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSubmit}>ADD</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span
              style={{ marginLeft: 10 }}
              onClick={() => dispatch(deleteJob(index))}
            >
              x
            </span>
          </li>
        ))}
      </ul>
    </div >
  );
}

export default App;
