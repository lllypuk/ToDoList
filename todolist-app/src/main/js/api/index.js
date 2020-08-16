import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8089/api',
})

export const insertTodolist = payload => api.post(`/todolist`, payload)
export const getAllTodolist = () => api.get(`/todolist`)
export const updateTodolistById = (id, payload) => api.put(`/todolist/${id}`, payload)
export const deleteTodolistById = id => api.delete(`/todolist/${id}`)
export const getTodolistById = id => api.get(`/todolist/${id}`)

const apis = {
    insertTodolist,
    getAllTodolist,
    updateTodolistById,
    deleteTodolistById,
    getTodolistById,
}

export default apis
