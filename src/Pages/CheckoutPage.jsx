import StepForm from "@/components/checkoutComponents/StepForm";

function CheckoutPage() {
  return (
    <section className="py-[100px]">
      <div className="container">
        <div>
          {/* step form  */}
          <div>
            <StepForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;
