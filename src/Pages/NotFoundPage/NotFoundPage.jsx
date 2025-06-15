import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../../assets/images/not-found.avif";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-white text-center">
      <img
        src={notFound}
        alt="Page Not Found"
        className="w-full max-w-md mx-auto object-contain mb-8"
        style={{ maxHeight: "354px" }}
      />
      <h1 className="text-3xl font-semibold text-blue-700 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 max-w-lg mx-auto mb-8 leading-relaxed">
        Oops! It seems like the page you’re trying to reach doesn’t exist
        anymore or maybe it never did.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
      >
        Back to Home
      </button>
    </section>
  );
};

export default NotFoundPage;
