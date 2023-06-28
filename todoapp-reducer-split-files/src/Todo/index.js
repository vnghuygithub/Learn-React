import { useReducer, useRef } from "react"
import reducer, { initState } from './reducer'
import { setJob, addJob, deleteJob } from "./action"
import logger from "./logger"

//useReducer
//1. Init state
//2. Actions
//3. Reducer
//4. Dispatch

function App() {
    const [state, dispatch] = useReducer(logger(reducer), initState) //state o day lay ra job va jobs
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
