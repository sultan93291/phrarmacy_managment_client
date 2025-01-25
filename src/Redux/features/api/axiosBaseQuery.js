// src/features/api/axiosBaseQuery.js
import axios from "axios";

/**
 * Axios base query function for RTK Query.
 * @param {Object} options - Axios options, like baseURL.
 */
const axiosBaseQuery =
  ({ baseUrl }) =>
  async ({ url, method, data, params, includeToken = false }) => {
    // Get the token from localStorage if includeToken is true
    const token = includeToken ? localStorage.getItem("token") : null;

    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError.response?.data || axiosError.message;
      return { error: { status: axiosError.response?.status, data: err } };
    }
  };

export default axiosBaseQuery;
