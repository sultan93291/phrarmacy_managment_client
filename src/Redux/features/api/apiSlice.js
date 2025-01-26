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
  }),
});

// Export hooks for each endpoint
export const { useCreateAddCardIntentMutation, useGetCardDataIntentQuery } =
  apiSlice;
