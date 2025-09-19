import axios from 'axios';

// Create axios instance with base configuration
export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors globally
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle 401 errors (unauthorized)
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    
    // Handle network errors
    if (!error.response) {
      console.error('Network error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// API endpoints
export const authAPI = {
  login: (credentials: { email: string; password: string }) =>
    apiClient.post('/auth/login', credentials),
  
  register: (userData: { name: string; email: string; password: string }) =>
    apiClient.post('/auth/register', userData),
  
  getCurrentUser: () =>
    apiClient.get('/auth/me'),
  
  refreshToken: () =>
    apiClient.post('/auth/refresh'),
  
  logout: () =>
    apiClient.post('/auth/logout'),
};

export const dashboardAPI = {
  getStats: () =>
    apiClient.get('/dashboard/stats'),
  
  getRecentActivity: () =>
    apiClient.get('/dashboard/activity'),
};

export default apiClient;