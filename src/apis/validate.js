import React from 'react'
import { Alert } from "react-native";

import useApi from './useApi'

const validate = () => {
  const [result, setResult] = React.useState({});
  const [error, setError] = React.useState({});
  const { mutation } = useApi();

  const post = (slug) => {
    setResult(r => ({ ...r, fetching: true }))
    setError({})

    return new Promise((resolve, reject) => {
      mutation('/schools/validate', 'POST', {
        slug
      })
        .then(({ data }) => {
          resolve({ fetching: false, school: data })
          setResult(r => ({ ...r, fetching: false, school: data }))
        })
        .catch(error => {
          Alert.alert('خطأ', error.response.data.error)
          setResult(r => ({ ...r, fetching: false }))
        })
    })
  }

  return {
    post,
    result,
    error,
  }
}

export default validate