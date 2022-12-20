import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodAPI = createApi({
    reducerPath: 'foodAPI',
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_BACKEND_URL}`}),
    tagTypes: ["Food"],
    endpoints: (builder) => ({
        createProductFood: builder.mutation({
            query: (foodProduct) => ({
                url: `/food`,
                method: 'POST',
                body: foodProduct,
                headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}
            }),
            invalidatesTags: ['Food']
        }),
        updateProductFood: builder.mutation({
            query: (newProductFood) => ({
                url: `/food/${newProductFood._id}`,
                method: 'PUT',
                body: newProductFood,
                headers: {Authorization: 'Bearer ' + localStorage.getItem('token')}
            }),
            invalidatesTags: ['Food']
        }),
        getProductsFood: builder.mutation({
            query: (name) => ({
                url: `/food?name=${name}`,
                method: 'GET',
            }),
            providesTags: ['Food']
        }),
        getProductFood: builder.query({
            query: (id) => ({
                url: `/food/${id}`,
                method: 'GET',
            })
        })
    })
})

export const {
    useCreateProductFoodMutation,
    useUpdateProductFoodMutation,
    useGetProductsFoodMutation,
    useGetProductFoodQuery
} = foodAPI