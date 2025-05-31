import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage";
import ServicePage from "../Pages/ServicePage";
import SingleHealthPage from "@/Pages/SingleHealthPage";
import DashboardLayout from "@/layout/DashboardLayout";
import UserDashboardHome from "@/Pages/Dashboard/User/UserDashboardHome";
import UserDashboardOrder from "@/Pages/Dashboard/User/UserDashboardOrder";
import UserDashboardPayments from "@/Pages/Dashboard/User/UserDashboardPayments";
import UserDashboardProfile from "@/Pages/Dashboard/User/UserDashboardProfile";
import AssessmentPage from "@/Pages/AssessmentPage";
import MedicineDetailsPage from "@/Pages/MedicineDetailsPage";
import CheckoutPage from "@/Pages/CheckoutPage";
import LoginPage from "@/Pages/Auth/LoginPage";
import SignupPage from "@/Pages/Auth/SignupPage";
import AuthLayout from "@/layout/AuthLayout";
import HowItWorksPage from "@/Pages/HowItWorksPage";
import FaqPage from "@/Pages/FaqPage";
import UserOrderDetails from "@/Pages/Dashboard/User/UserOrderDetails";
import UserAssessmentResult from "@/Pages/Dashboard/User/UserAssessmentResult";
import UserSubscription from "@/Pages/Dashboard/User/UserSubscription";
import UserReviews from "@/Pages/Dashboard/User/UserReviews";
import DoctorDashboardHomepage from "@/Pages/Dashboard/Doctor/DoctorDashboardHomepage";
import DoctorDashboardMeetingManagement from "@/Pages/Dashboard/Doctor/DoctorDashboardMeetingManagement";
import DoctorDashboardOrderManagement from "@/Pages/Dashboard/Doctor/DoctorDashboardOrderManagement";
import PharmacistDashboardHomepage from "@/Pages/Dashboard/Pharmacist/PharmacistDashboardHomepage";
import PharmacistOrderManagement from "@/Pages/Dashboard/Pharmacist/PharmacistOrderManagement";
import OrderDetailsDoctor from "@/Pages/Dashboard/Doctor/OrderDetailsDoctor";
import PharmacistOrderDetailsPage from "@/Pages/Dashboard/Pharmacist/PharmacistOrderDetailsPage";
import ProtectedRoute from "@/ProtectRoute/ProtectRoute";
import PublicRoute from "@/PublicRoute/PublicRoute";
import PrivacyPolicy from "@/Pages/PrivacyPolicy";
import RegulationPolicy from "@/Pages/RegulationPolicy";
import TermsAndConditions from "@/Pages/TermsAndConditions ";
import CookiesPolicy from "@/Pages/CookiesPolicy ";
import ComplaintsAndFeedback from "@/Pages/ComplaintsAndFeedback ";
import NotFoundPage from "@/Pages/NotFoundPage/NotFoundPage";

// Breadcrumb configuration
const routes = [
  { path: "/", breadcrumb: "Home" },
  { path: "/service", breadcrumb: "Service" },
  { path: "/checkout", breadcrumb: "Checkout" },
  { path: "/howitworks", breadcrumb: "How it Works" },
  { path: "/assessment", breadcrumb: `Consultation` },
];

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
        {
          path: "/service",
          element: <ServicePage />,
        },
        {
          path: "/service/:id",
          element: <SingleHealthPage />,
        },

        {
          path: "/treatment/consultation/:id",
          element: <AssessmentPage></AssessmentPage>,
        },
        {
          path: "/medicine-details/:id/consultation/:counsultainid",
          element: <MedicineDetailsPage />,
        },
        {
          path: "/medicine-details/:id",
          element: <MedicineDetailsPage />,
        },
        {
          path: "/checkout",
          element: (
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          ),
        },
        {
          path: "/howitworks",
          element: <HowItWorksPage />,
        },
        {
          path: "/faq",
          element: <FaqPage />,
        },
        {
          path: "/privacypolicy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/regulation",
          element: <RegulationPolicy />,
        },
        {
          path: "/terms",
          element: <TermsAndConditions />,
        },
        {
          path: "/cookies",
          element: <CookiesPolicy />,
        },
        {
          path: "/complaints",
          element: <ComplaintsAndFeedback />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout></AuthLayout>,
      children: [
        {
          path: "/auth/login",
          element: (
            <PublicRoute>
              <LoginPage></LoginPage>
            </PublicRoute>
          ),
        },
        {
          path: "/auth/signup",
          element: (
            <PublicRoute>
              <SignupPage></SignupPage>
            </PublicRoute>
          ),
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      ),
      children: [
        // user dashboard:
        {
          path: "user/user-homepage",
          element: <UserDashboardHome />,
        },
        {
          path: "user/user-order-history",
          element: <UserDashboardOrder />,
        },
        {
          path: "user/user-assessment-result",
          element: <UserAssessmentResult />,
        },
        {
          path: "user/order-details/:id",
          element: <UserOrderDetails />,
        },
        {
          path: "user/user-payments",
          element: <UserDashboardPayments />,
        },
        {
          path: "user/user-subscription",
          element: <UserSubscription />,
        },
        {
          path: "user/user-review",
          element: <UserReviews />,
        },
        {
          path: "user/user-profile",
          element: <UserDashboardProfile />,
        },

        // Doctor Dashboard:
        {
          path: "doctor/homepage",
          element: <DoctorDashboardHomepage />,
        },
        {
          path: "doctor/order-details/:id",
          element: <OrderDetailsDoctor />,
        },
        {
          path: "doctor/order-management",
          element: <DoctorDashboardOrderManagement />,
        },
        {
          path: "doctor/meeting-management",
          element: <DoctorDashboardMeetingManagement />,
        },

        // Pharmacist Dashboard:
        {
          path: "pharmacist/homepage",
          element: <PharmacistDashboardHomepage />,
        },
        {
          path: "pharmacist/order-management",
          element: <PharmacistOrderManagement />,
        },
        {
          path: "pharmacist/order-details/:id",
          element: <PharmacistOrderDetailsPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_fetcherPersist: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export { routes };
export default router;
