import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const foodAPI = createApi({
  reducerPath: "foodAPI",
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}` }),
  tagTypes: ["Food"],
  endpoints: (builder) => ({
    getProductsFood: builder.mutation({
      query: (name) => ({
        url: `/food?name=${name}`,
        method: "GET",
        providesTags: ["Food"],
      }),
    }),
    createProductFood: builder.mutation({
      query: (foodProduct) => ({
        url: `/food`,
        method: "POST",
        body: foodProduct,
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }),
      invalidatesTags: ["Food"],
    }),
    updateProductFood: builder.mutation({
      query: (newProductFood) => ({
        url: `/food/${newProductFood._id}`,
        method: "PUT",
        body: newProductFood,
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }),
      invalidatesTags: ["Food"],
    }),
    getProductFood: builder.mutation({
      query: (id) => ({
        url: `/food/${id}`,
        method: "GET",
      }),
    }),
    deleteProductFood: builder.mutation({
      query: (id) => ({
        url: `/food/${id}`,
        method: "DELETE",
        headers: { Authorization: "Bearer " + localStorage.getItem("token") },
      }),
      invalidatesTags: ["Food"],
    }),
  }),
});

export const {
  useCreateProductFoodMutation,
  useUpdateProductFoodMutation,
  useGetProductsFoodMutation,
  useGetProductFoodMutation,
  useDeleteProductFoodMutation,
} = foodAPI;
