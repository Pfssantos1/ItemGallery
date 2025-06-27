import axios from 'axios';

const API_URL = 'http://localhost:5000/api/items';

export const getItems = () => axios.get(API_URL);

export const createItem = (formData) => {
  return axios.post(API_URL, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

export const updateItem = (id, item) => {
  return axios.put(`${API_URL}/${id}`, item);
};

export const deleteItem = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
