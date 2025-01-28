import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";
const SiteURl = import.meta.env.VITE_SITE_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: SiteURl }), // Base URL here
  tagTypes: ["Card"], // Add tag for cache management
  endpoints: builder => ({
    // Create PaymentIntent for Stripe
    createAddCardIntent: builder.mutation({
      query: payment_method_id => ({
        url: "/api/add/stripe/customer/payment-method", // Backend API
        method: "POST",
        data: {
          payment_method_id: payment_method_id,
        },
        includeToken: true, // Now this flag is passed as part of the query
      }),
      invalidatesTags: ["Card"], // Invalidate "Card" tag after successful mutation
    }),

    // Get Card data for Stripe
    getCardDataIntent: builder.query({
      query: () => ({
        url: "/api/get/stripe/customer/payment-method", // Backend API
        method: "GET",
        includeToken: true, // Now this flag is passed as part of the query
      }),
      providesTags: ["Card"], // Provide "Card" tag for this query
    }),

    updatePasswordIntent: builder.mutation({
      query: ({ old_password, password, password_confirmation }) => ({
        url: "/api/change-password",
        method: "POST",
        data: {
          old_password: old_password,
          password: password, // Backend expects the new password here
          password_confirmation: password_confirmation, // Confirm new password
        },
        includeToken: true,
      }),
    }),

    updateUserInfoIntent: builder.mutation({
      query: ({ data }) => ({
        url: "/api/change-password",
        method: "POST",
        data: {
          old_password: old_password,
          password: password, // Backend expects the new password here
          password_confirmation: password_confirmation, // Confirm new password
        },
        includeToken: true,
      }),
    }),

    deleteCardIntent: builder.mutation({
      query: cardId => ({
        url: `/api/remove/stripe/customer/payment-method/${cardId}`,
        method: "DELETE",
        includeToken: true,
      }),
      invalidatesTags: ["Card"],
    }),
  }),
});

// Export hooks for each endpoint
export const {
  useCreateAddCardIntentMutation,
  useGetCardDataIntentQuery,
  useUpdatePasswordIntentMutation,
  useDeleteCardIntentMutation,
} = apiSlice;
