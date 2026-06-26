import axios from "axios";

const restaurantClient = axios.create({
  baseURL: import.meta.env.VITE_REST_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default restaurantClient;