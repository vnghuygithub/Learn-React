import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants"

export const setJob = payload => { //payload: du lieu mang theo
    return {
        type: SET_JOB,
        payload
    }
}
export const addJob = payload => { //payload: du lieu mang theo
    return {
        type: ADD_JOB,
        payload
    }
}
export const deleteJob = payload => { //payload: du lieu mang theo
    return {
        type: DELETE_JOB,
        payload
    }
}