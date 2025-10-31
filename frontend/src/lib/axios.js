import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:4004/api"
      : "/api",
  withCredentials: true, // allows the browser to include cookies (like JWT/session ID) with every request sent to backend, so the backend can recognize and authenticate the logged-in user across different API calls
});
