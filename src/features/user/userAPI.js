import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const userAPI = createApi({
    reducerPath: "userAPI",
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_BACKEND_URL}`}),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        getPostNewUser: builder.mutation({
            query: (newUser) => ({
                url: `/user`,
                method: 'POST',
                body: newUser,
            })
        }),
        getConfirmUser: builder.mutation({
            query: (token) => ({
                url: `/user/confirm/${token}`,
                method: 'GET',
            })
        }),
        getUserLogin: builder.mutation({
            query: (dataUser) => ({
                url: `/user/login`,
                method: 'POST',
                body: dataUser,
            })
        }),
        getUserLocalStorage: builder.mutation({
            query: (tokenLs) => ({
                url: `/user/perfil`,
                method: 'GET',
                headers: {Authorization: 'Bearer ' + tokenLs}
            }),
            providesTags: ['Users']
        }),
        updateUserData: builder.mutation({
            query: (newDataUser) => ({
                url: `/user/perfil/${newDataUser._id}`,
                method: 'PUT',
                body: newDataUser,
                headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}
            }),
            invalidatesTags: ['Users']
        })
    })
})

export const {
    useGetPostNewUserMutation,
    useGetConfirmUserMutation,
    useGetUserLoginMutation,
    useGetUserLocalStorageMutation,
    useUpdateUserDataMutation
} = userAPI
