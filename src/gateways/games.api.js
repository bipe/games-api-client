import axios from 'axios';

// API runs on 3000
// Using port 3001 from mockoon reverse proxy to test locally
axios.defaults.baseURL = 'http://localhost:3001';

const gamesApi = {
  getGameById(id) {
    return axios.get(`/api/game/${id}`);
  },
};

export default gamesApi;
