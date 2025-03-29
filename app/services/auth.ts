import { API_BASE_URL, getHeaders, handleResponse } from './api';

export interface SignupData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

/**
 * User signup service
 * @param data SignupData containing name, email, and password
 * @returns Promise with authentication response
 */
export const signup = async (data: SignupData): Promise<AuthResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  const result = await handleResponse(response);
  
  // Store the token
  if (result.token) {
    localStorage.setItem('token', result.token);
  }

  return result;
};

/**
 * User login service
 * @param data LoginData containing email and password
 * @returns Promise with authentication response
 */
export const login = async (data: LoginData): Promise<AuthResponse> => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  const result = await handleResponse(response);
  
  // Store the token
  if (result.token) {
    localStorage.setItem('token', result.token);
  }

  return result;
};

/**
 * User logout service
 * Removes the authentication token and calls logout endpoint
 */
export const logout = async (): Promise<void> => {
  try {
    await fetch(`${API_BASE_URL}/api/auth/logout`, {
      method: 'POST',
      headers: getHeaders(),
    });
  } finally {
    localStorage.removeItem('token');
  }
}; 