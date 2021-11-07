import axios from 'axios';
import { getToken } from './auth'

const api = axios.create({
  baseURL: 'https://6186cc91cd8530001765abd6.mockapi.io/JogadoresCSGO'
});

export async function getPlayers() {
    const response = await api.get('/players');
    console.log(response);
    return response;
  }

  export async function createPlayer(data) {
    const response = await api.post("/players", data);
    console.log("Player Created", response);
    return response;
  }

  export async function getSinglePlayer(id) {
    const response = await api.get(`/players/${id}`);
    console.log("Get Player", response);
    return response;
  }
  export async function deletePlayer(id) {
    const response = await api.delete(`/players/${id}`);
    console.log("Player Deleted", response);
    return response;
  }
  export async function updatePlayer(id, data) {
    const response = await api.put(`/players/${id}`, data);
    console.log("Player Updated", response);
    return response;
  }

  api.interceptors.request.use((config) => {
    const token = getToken();
    config.headers.authorization = `Bearer ${token}`
    return config;
  });

  export async function authenticate(login, password) {
    const response = await api.post("/authenticate", {
      login: login,
      password: password
    });
    console.log(response);
    return response;
  }