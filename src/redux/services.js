import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://api.dev.galam.co/v1/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('authorization', token)
      }
      return headers
    },
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
    schoolsValidate: builder.mutation({
      query: (slug) => ({
        url: '/schools/validate',
        method: 'POST',
        body: { slug },
      }),
    }),
  }),
})

// Export hooks for usage in functional components
export const { useSchoolsValidateMutation } = api;