const API_BASE = '/api';

interface ApiError {
  error: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface AuthResponse {
  id: number;
  name: string;
  email: string;
}

async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error((data as ApiError).error || 'Request failed');
  }

  return data as T;
}

export const api = {
  register: async (name: string, email: string, password: string): Promise<User> => {
    return fetchApi<AuthResponse>('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    });
  },

  login: async (email: string, password: string): Promise<User> => {
    return fetchApi<AuthResponse>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },

  logout: async (): Promise<void> => {
    await fetchApi<{ ok: boolean }>('/auth/logout', {
      method: 'POST',
    });
  },

  me: async (): Promise<User> => {
    return fetchApi<AuthResponse>('/auth/me');
  },
};
