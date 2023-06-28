import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants"

//1. Init state
export const initState = {
    job: '',
    jobs: [],
}

//3. Reducer
const reducer = (state, action) => {

    switch (action.type) {
        case SET_JOB:
            return {
                ...state, // bao luu jobs
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state, // bao luu jobs
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs]

            newJobs.splice(action.payload, 1)
            return {
                ...state, // bao luu jobs
                jobs: newJobs
            }


        default: throw new Error('Invalid action')
    }
}

export default reducer