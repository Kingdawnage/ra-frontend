/**
 * Base API configuration and common utilities
 */

// Get the API URL from environment variables
// In development: http://localhost:8080
// In Docker: http://backend:8080
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

/**
 * Common headers for API requests
 */
export const getHeaders = () => ({
  'Content-Type': 'application/json',
  // Add auth token if available
  ...(typeof window !== 'undefined' && localStorage.getItem('token')
    ? { Authorization: `Bearer ${localStorage.getItem('token')}` }
    : {}),
});

/**
 * Handle API response and errors consistently
 */
export const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({
      message: 'An unexpected error occurred',
    }));
    throw new Error(error.message || 'An unexpected error occurred');
  }
  return response.json();
}; 