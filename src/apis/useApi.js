import React from 'react'
import axios from 'axios';
import i18n from '../translation/i18n';

const maxAge = 20 * 1000;

const http = axios.create({
  baseURL: 'https://api.galam.co/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // Authorization: '',
    // slug: '',
    locale: i18n.language || 'ar',
  },
  // adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
  //   enabledByDefault: false,
  //   defaultCache: new Cache({ maxAge }),
  // }),
});

http.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// http.interceptors.response.use((response) => {
//   return response;
// }, (err) => {
//   return Promise.reject(err); // i didn't have this line before
// });

export const api = async (
  data,
  { rejectWithValue }
) => async (
  url,
  method = 'GET',
) => {
  try {
    const response = await http({
      url,
      method,
      data
    })

    return response;
  } catch (err) {
    return rejectWithValue(err.response.data)
  }
}

const useApi = (url, params) => {
  const [fetching, setFetching] = React.useState(true)
  const [data, setData] = React.useState({})
  const [error, setError] = React.useState(null)

  const handleApi = async () => {
    try {
      const result = await http({
        url,
        method: 'GET',
        params,
      })
      setData(result.data);
    } catch (err) {
      setError(err);
      console.error(err)
    } finally {
      setFetching(false);
    }
  };

  const mutation = (
    Murl,
    method,
    data,
  ) => http({
    url: Murl,
    method,
    data,
  })

  React.useEffect(() => {
    if (url) {
      handleApi();
    }
  })

  return {
    data: {},
    error: {},
    fetching,
    mutation
  }
}

export {
  http
};

export default useApi