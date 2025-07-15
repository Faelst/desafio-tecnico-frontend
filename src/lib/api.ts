import axios, { AxiosError } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// Cria uma instância do Axios com a URL base da API
const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => config);

let isRefreshing = false;

// Fila para armazenar requisições pendentes
let failedQueue: {
  resolve: (value?: unknown) => void;
  reject: (reason?: unknown) => void;
}[] = [];

// Função para processar a fila de requisições pendentes
// quando o token é renovado
const processQueue = (error: AxiosError | null) => {
  failedQueue.forEach(({ reject }) => reject(error));
  failedQueue = [];
};

// Interceptor para lidar com erros de autenticação
// e.g., 401 Unauthorized
api.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes('/auth/refresh')
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        // Se já está renovando o token, adiciona a requisição à fila
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        });
      }

      isRefreshing = true;

      try {
        // Caso existe um fluxo de autenticação com refresh token
        // Aqui você pode chamar a API para obter um novo token
        await axios.post(`${process.env.VITE_API_URL}/refresh-token`, null, {
          withCredentials: true,
        });

        // Após renovar o token, processa a fila de requisições pendentes
        processQueue(null);

        // Reenvia a requisição original com o novo token
        return api(originalRequest);
      } catch (refreshError) {
        // Se a renovação falhar, rejeita todas as requisições pendentes
        alert('Sessão expirada. Por favor, faça login novamente.');
        processQueue(refreshError as AxiosError);
        window.location.href = '/';
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export default api;
