import React from 'react'
import axios from 'axios';

const maxAge = 20 * 1000;

export const http = axios.create({
  baseURL: 'https://api.galam.co/v1',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: '',
    slug: '',
    locale: 'ar',
  }
  // adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
  //   enabledByDefault: false,
  //   defaultCache: new Cache({ maxAge }),
  // }),
});

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

export default useApi