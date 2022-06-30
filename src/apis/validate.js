import React from 'react'
import useApi from './useApi'

const validate = () => {
  const [result, setResult] = React.useState({});
  const { mutation } = useApi();

  const post = (slug) => {
    setResult(r => ({ ...r, fetching: true }))

    return new Promise((resolve, reject) => {
      mutation('/schools/validate', 'POST', {
        slug
      })
        .then(({ data }) => {
          resolve({ fetching: false, school: data })
          setResult(r => ({ ...r, fetching: false, school: data }))
        })
        .catch(error => {
          setResult(r => ({ ...r, fetching: false, error }))
          reject(error)
        })
    })
  }

  return {
    post,
    result,
  }
}

export default validate