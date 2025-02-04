import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

const SiteURl = import.meta.env.VITE_SITE_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: SiteURl }),
  tagTypes: ["Card", "Review", "SubsCreption"],
  endpoints: builder => ({
    // Create PaymentIntent for Stripe
    createAddCardIntent: builder.mutation({
      query: payment_method_id => ({
        url: "/api/add/stripe/customer/payment-method",
        method: "POST",
        data: { payment_method_id },
        includeToken: true,
      }),
      invalidatesTags: ["Card"],
    }),

    // Get Card data for Stripe
    getCardDataIntent: builder.query({
      query: () => ({
        url: "/api/get/stripe/customer/payment-method",
        method: "GET",
        includeToken: true,
      }),
      providesTags: ["Card"],
    }),

    // Update Password
    updatePasswordIntent: builder.mutation({
      query: ({ old_password, password, password_confirmation }) => ({
        url: "/api/change-password",
        method: "POST",
        data: { old_password, password, password_confirmation },
        includeToken: true,
      }),
    }),

    // Update User Info
    updateUserInfoIntent: builder.mutation({
      query: ({ data }) => ({
        url: "/api/user-update",
        method: "POST",
        body: data, // Keep FormData as is
        headers: {
          "Content-Type": "multipart/form-data",
        },
        includeToken: true, // Ensure authentication (if needed)
      }),
    }),

    getUserReviewIntent: builder.query({
      query: () => ({
        url: "/api/auth-review",
        method: "GET",
        includeToken: true,
        providesTags: ["Review"],
      }),
    }),

    getUserOrderIntent: builder.query({
      query: () => ({
        url: "/api/orders?column=&value=&sort=&page=&per_page=",
        method: "POST",
        includeToken: true,
      }),
    }),

    getUserOrderDetailsIntent: builder.query({
      query: ({ id }) => ({
        url: `/api/order/${id}`,
        method: "GET",
        includeToken: true,
      }),
    }),

    getPharmaCistSingelOrderDetailsIntent: builder.query({
      query: ({ id }) => ({
        url: `/api/order-details/${id}`,
        method: "GET",
        includeToken: true,
      }),
    }),

    getSubsCreptionDetailsIntent: builder.query({
      query: () => ({
        url: `/api/my-subscriptions`,
        method: "GET",
        includeToken: true,
        providesTags: ["SubsCreption"],
      }),
    }),

    deleteSubsCreationIntent: builder.mutation({
      query: id => ({
        url: `/subscriptions/${id}`, // Your DELETE endpoint
        method: "DELETE",
        invalidatesTags: ["SubsCreption"],
      }),
    }),

    // Delete Card
    deleteCardIntent: builder.mutation({
      query: cardId => ({
        url: `/api/delete/subscription/${cardId}`,
        method: "DELETE",
        includeToken: true,
      }),
    }),

    // post review
    createUserReviewIntent: builder.mutation({
      query: ({ rating, review, id }) => ({
        url: `/api/order-review/${id}`,
        method: "POST",
        data: { rating: rating, review: review },
        includeToken: true,
        invalidatesTags: ["Review"],
      }),
    }),

    // get all notifications
    getNotificationsIntent: builder.query({
      query: () => ({
        url: "/api/my-notifications",
        method: "GET",
        includeToken: true,
      }),
    }),

    getAssesMentResultIntent: builder.query({
      query: () => ({
        url: "/api/assessments-result",
        method: "GET",
        includeToken: true,
      }),
    }),

    getUserOverViewDataIntent: builder.query({
      query: () => ({
        url: "/api/orders/user-overview",
        method: "GET",
        includeToken: true,
      }),
    }),

    getPharmaCistOverViewDataIntent: builder.query({
      query: () => ({
        url: "/api/orders/overview",
        method: "GET",
        includeToken: true,
      }),
    }),

    updateMedicineStatusDataIntent: builder.mutation({
      query: ({ id, status, note }) => {
        const body = { status };
        if (note) {
          body.note = note;
        }
        return {
          url: `/api/order-status-note-update/${id}`,
          method: "POST",
          data: body,
          includeToken: true,
        };
      },
    }),
    createMeetingIntent: builder.mutation({
      query: ({ id, title, description, date, time }) => ({
        url: `/api/meeting/${id}`,
        method: "POST",
        body: { title, description, date, time },
        includeToken: true,
      }),
    }),

    // get all meetings
    getAllMeetingsIntent: builder.query({
      query: () => ({
        url: "/api/meetings",
        method: "GET",
        includeToken: true,
      }),
    }),

    updateMeetingIntent: builder.mutation({
      query: ({ id, status }) => ({
        url: `/api/meeting-update/${id}`,
        method: "PUT", // Use PUT or PATCH for updates
        body: { status },
        includeToken: true,
      }),
    }),

    createPlaceOrderIntent: builder.mutation({
      query: ({ data }) => ({
        url: `/api/order-checkout`,
        method: "PUT", // Use PUT or PATCH for updates
        body: { data },
        includeToken: true,
      }),
    }),

    applyCouponIntent: builder.mutation({
      query: ({ coupon_code, total_amount }) => ({
        url: `/api/apply-coupon`,
        method: "POST",
        data: { coupon_code: coupon_code, total_amount: total_amount },
        includeToken: true,
      }),
    }),
  }),

  // create meeting
});

// Export hooks for each endpoint
export const {
  useCreateAddCardIntentMutation,
  useGetCardDataIntentQuery,
  useUpdatePasswordIntentMutation,
  useUpdateUserInfoIntentMutation,
  useDeleteCardIntentMutation,
  useGetUserReviewIntentQuery,
  useGetUserOrderIntentQuery,
  useGetUserOrderDetailsIntentQuery,
  useCreateUserReviewIntentMutation,
  useGetSubsCreptionDetailsIntentQuery,
  useDeleteSubsCreationIntentMutation,
  useGetNotificationsIntentQuery,
  useGetAssesMentResultIntentQuery,
  useGetUserOverViewDataIntentQuery,
  useGetPharmaCistOverViewDataIntentQuery,
  useGetPharmaCistSingelOrderDetailsIntentQuery,
  useUpdateMedicineStatusDataIntentMutation,
  useCreateMeetingIntentMutation,
  useGetAllMeetingsIntentQuery,
  useUpdateMeetingIntentMutation,
  useCreatePlaceOrderIntentMutation,
  useApplyCouponIntentMutation,
} = apiSlice;
