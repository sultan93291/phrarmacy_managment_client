// src/features/api/apiSlice.js
import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";
const SiteURl = import.meta.env.VITE_SITE_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: SiteURl }), // Base URL here
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
    }),
  }),
});

// Export hooks for each endpoint
export const { useCreateAddCardIntentMutation } = apiSlice;
