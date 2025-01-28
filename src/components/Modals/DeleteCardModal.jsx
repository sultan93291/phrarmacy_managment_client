import { useDeleteCardIntentMutation } from "@/Redux/features/api/apiSlice";
import React, { useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const DeleteCardModal = ({ isOpen, setIsOpen, onClose, modalData }) => {
  console.log(modalData, "delte modal data");

  const modalRef = useRef(null);
  const loggedInUserData = useSelector(
    state => state.loggedInuserSlice.loggedInUserData
  );

  const [deleteCardIntent, { isLoading, isError, isSuccess }] =
    useDeleteCardIntentMutation();

  const closeModal = () => {
    setIsOpen(false);
    if (onClose) {
      onClose(); // Notify parent that modal is closed
    }
  };

  const handleDeleteAction = async () => {
    console.log(modalData.id);
    try {
      const response = await deleteCardIntent(modalData?.id).unwrap(); // Pass cardId directly

      // Success handling
      if (response.code === 200) {
        toast.success("Card Deleted successfully");
      } else {
        toast.error(
          response.message || "Failed to delete card. Please try again."
        );
      }
    } catch (error) {
      // Log the error object to understand the structure
      console.error("Error Response:", error);

      // Handle error message based on the error response
      const errorMessage =
        error?.data?.message || "Something went wrong. Please try again.";
      toast.error(errorMessage);
    } finally {
      closeModal();
    }
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div
            ref={modalRef}
            className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 space-y-6"
          >
            <h2 className="text-xl font-bold text-gray-800">
              Are you sure you want to delete this card?
            </h2>
            <p className="text-gray-600">
              Hey, <span className="font-medium">{loggedInUserData?.name}</span>
              , this action cannot be undone. You’re about to delete the card
              ending in{" "}
              <span className="text-lg font-bold text-red-600">
                {modalData?.last4}
              </span>
              .
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-6 py-2 rounded-full text-gray-600 border border-gray-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDeleteAction();
                }}
                className="px-6 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteCardModal;
