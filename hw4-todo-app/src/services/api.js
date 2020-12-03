import axios from "axios";

const instance = axios.create({
  baseURL: "https://5fa97367c9b4e90016e6a7ec.mockapi.io/api",
});

export const getTodos = () => {
  return instance.get("/todos");
};

export const deleteByTaskId = taskID => {
  return instance.delete(`/todos/${taskID}`);
};

export const addNewTask = task => {
  return instance.post(`/todos`, task);
};

export const updateTask = task => {
  return instance.put(`/todos/${task.id}`, task);
};

export default instance;
