import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_BACKEND_URL}`}),
    tagTypes: ['postNewUser'],
    endpoints: (builder) => ({
        getPostNewUser: builder.mutation({
            query: (newUser) => ({
                url: `/user`,
                method: 'POST',
                body: newUser,
            }),
            invalidatesTags: ['postNewUser'],
        }),
        getConfirmUser: builder.mutation({
            query: (token) => ({
                url: `/user/confirm/${token}`,
                method: 'GET',
            })
        })
    })
})

export const {
    useGetPostNewUserMutation,
    useGetConfirmUserMutation
} = userAPI
