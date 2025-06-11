import FeedbackModal from "@/components/Modals/FeedbackModal";
import { Modal } from "@/components/Modals/Modal";
import {
  FeedbackSvg,
  PrintSvg,
  RightArrowSvg,
} from "@/components/SvgContainer/SvgContainer";
import {
  useGetUserOrderDetailsIntentQuery,
  useGetCompanyDataQuery,
} from "@/Redux/features/api/apiSlice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import siteLogo from "../../../assets/images/logo/logo.png";

const UserOrderDetails = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [billingAdress, setBillingAddress] = useState(null);
  const [allMedicne, setAllMedicine] = useState([]);
  const [companyData, setcompanyData] = useState();

  const { data, error, isLoading } = useGetUserOrderDetailsIntentQuery({ id });
  const {
    data: companyDataobj,
    error: companyError,
    isLoading: isCompanyLoading,
  } = useGetCompanyDataQuery();

  useEffect(() => {
    if (data?.data) {
      setBillingAddress(data.data.billing_address);
      setAllMedicine(data.data.order_items);
    }
  }, [data]);

  useEffect(() => {
    setcompanyData(companyDataobj?.data);
  }, [companyData]);

  console.log(companyData, " this is the company data");

  const downloadInvoice = () => {
    if (!data?.data) {
      console.error("No data available to generate the invoice.");
      return;
    }

    const doc = new jsPDF();
    const imgWidth = 40;
    const imgHeight = 40;

    const img = siteLogo; // Ensure this is a base64 or URL for the image

    // Header Background (increased height to accommodate company details)
    const headerHeight = 60; // Increased height for the header box
    doc.setFillColor(5, 45, 76); // Dark Blue
    doc.rect(0, 0, 210, headerHeight, "F");

    // Logo (on the left side of the header)
    doc.addImage(img, "PNG", 14, 10, imgWidth, imgHeight);

    // Company Details (on the right side of the header)
    doc.setTextColor(255, 255, 255); // White text color
    doc.setFontSize(10);

    // Position the company details inside the header box
    doc.text(companyData?.title || "Company Name", 70, 15);
    doc.text(companyData?.address || "Company Address", 70, 22);
    doc.text(`Email: ${companyData?.email || "N/A"}`, 70, 29);
    doc.text(`Phone: ${companyData?.phone || "N/A"}`, 70, 36);

    // Invoice Title (adjusted to be below the header box)
    doc.setFontSize(24);
    doc.text("Order Invoice", 105, headerHeight + 10, { align: "center" });

    // Billing Information Box (shifted below the header)
    const billingStartY = headerHeight + 20; // Add extra space after header
    doc.setFillColor(240, 248, 255); // Light Blue
    doc.roundedRect(14, billingStartY, 180, 50, 5, 5, "F");
    doc.setFontSize(12);
    doc.setTextColor(5, 45, 76); // Dark Blue Text

    doc.text(
      `Billed To: ${billingAdress?.name || "N/A"}`,
      20,
      billingStartY + 10
    );
    doc.text(`Email: ${billingAdress?.email || "N/A"}`, 20, billingStartY + 18);
    doc.text(
      `Address: ${billingAdress?.address || "N/A"}, ${
        billingAdress?.city || ""
      }`,
      20,
      billingStartY + 26
    );
    doc.text(
      `Contact: ${billingAdress?.contact || "N/A"}`,
      20,
      billingStartY + 34
    );

    // Order Table
    const tableStartY = billingStartY + 60; // Add extra space after billing info
    const tableData = allMedicne.map((med, index) => [
      index + 1,
      med.medicine,
      med.quantity,
      `£${med.unit_price}`,
      `£${med.total_price}`,
    ]);

    doc.autoTable({
      startY: tableStartY,
      head: [["#", "Description", "Qty", "Price", "Amount"]],
      body: tableData,
      styles: { textColor: [33, 33, 33], lineWidth: 0.2 },
      headStyles: {
        fillColor: [5, 45, 76],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      alternateRowStyles: { fillColor: [245, 250, 255] },
      margin: { left: 14, right: 14 },
      theme: "grid",
    });

    // Doctor Notes Section
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFillColor(255, 150, 58); // Orange
    doc.roundedRect(14, finalY, 180, 25, 5, 5, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text("Doctor Notes:", 20, finalY + 10);

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    const note = data?.data?.note || "No notes available";
    doc.text(note, 20, finalY + 17, { maxWidth: 170 });

    // Footer Section
    const footerY = finalY + 35;
    doc.setDrawColor(5, 45, 76);
    doc.line(14, footerY, 196, footerY);
    doc.setFontSize(10);
    doc.setTextColor(102, 102, 102);
    doc.text("Thank you for your purchase!", 105, footerY + 10, {
      align: "center",
    });

    // Save PDF
    doc.save(`Invoice-${id}.pdf`);
  };

  if (isLoading) return <p>Loading order details...</p>;
  if (error) return <p>Error fetching order details.</p>;

  return (
    <section className="font-nunito text-[#333333]">
      {/* Top title */}
      <div className="text-[#052D4C99] flex items-center font-semibold text-lg gap-2">
        <h2>Order History</h2>
        <RightArrowSvg />
        <h2>Order Details</h2>
      </div>

      {/* Order Details */}
      <div className="px-3 sm:px-5 xl:px-12 py-10 lg:py-16 bg-white rounded-lg mt-5">
        {/* Title and Buttons */}
        <div className="w-full flex-col sm:flex-row gap-5 flex items-center justify-between">
          <h2 className="text-[#052D4C] text-2xl sm:text-3xl font-semibold">
            Order History
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-5">
            {/* Print Button */}
            <button
              onClick={downloadInvoice}
              className="px-5 sm:px-8 py-2 text-sm sm:text-base sm:py-3 rounded-full bg-primary text-white flex items-center justify-center gap-2"
            >
              <PrintSvg /> <span>Download Invoice</span>
            </button>

            {/* Feedback Button */}
            <button
              onClick={() => setOpen(true)}
              className="px-5 sm:px-8 py-2 text-sm sm:text-base sm:py-3 rounded-full bg-[#FF963A] text-white flex items-center justify-center gap-2"
            >
              <FeedbackSvg /> <span>Give a Feedback</span>
            </button>
          </div>
        </div>

        {/* Order Description */}
        <div className="mt-12">
          {/* User Information */}
          <div className="w-full flex flex-col gap-10 sm:flex-row items-start justify-start mb-6 text-start">
            <div className="w-1/2 sm:pr-4">
              <h3 className="font-bold text-xl sm:mb-2">Billed To</h3>
              <div className="space-y-2 text-base mt-3 sm:mt-5">
                <p className="font-bold text-base">{billingAdress?.name}</p>
                <p className="font-bold">{billingAdress?.email}</p>
                <p>
                  {billingAdress?.address}, {billingAdress?.city}
                </p>
                <p>{billingAdress?.contact}</p>
              </div>
            </div>
            <div className="w-1/2 sm:pl-4">
              <h3 className="font-bold text-xl sm:mb-2">Shipping To</h3>
              <div className="space-y-2 text-base mt-3 sm:mt-5">
                <p className="font-bold text-base">{billingAdress?.name}</p>
                <p className="font-bold">{billingAdress?.email}</p>
                <p>
                  {billingAdress?.address}, {billingAdress?.city}
                </p>
                <p>{billingAdress?.contact}</p>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="mt-12 overflow-x-auto">
            {/* Table Header */}
            <div className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-6 pb-4 border-b border-[#E7EBF4] text-xs sm:text-lg font-bold text-[#052D4C]">
              <h2 className="text-left">Description</h2>
              <h2 className="text-center">Qty</h2>
              <h2 className="text-center">Price</h2>
              <h2 className="text-center ">Amount</h2>
            </div>

            {/* Table Body */}
            {allMedicne?.map(med => (
              <div
                key={med.name}
                className="grid grid-cols-4 sm:grid-cols-4 gap-3 sm:gap-6 py-2 border-b border-[#E7EBF4] text-xs sm:text-base items-center"
              >
                <div className="text-left">
                  <h2 className="font-bold">{med?.medicine}</h2>
                  <p className="text-[10px] sm:text-sm text-gray-500">
                    {med?.quantity} Medicine included
                  </p>
                </div>
                <h2 className="text-center">{med?.quantity}</h2>
                <h2 className="text-center">£ {med?.unit_price}</h2>
                <h2 className="text-center ">£ {med?.total_price}</h2>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Notes */}
        <div className="mt-12 sm:w-1/2">
          <h2 className="font-bold text-lg">Doctor Notes</h2>
          <div className="mt-3">
            <p className="sm:p-5 px-5 py-2 rounded-xl border border-black/20 text-black/60">
              {data?.data?.note || "No notes available"}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} setOpen={setOpen}>
        <FeedbackModal setOpen={setOpen} />
      </Modal>
    </section>
  );
};

export default UserOrderDetails;
