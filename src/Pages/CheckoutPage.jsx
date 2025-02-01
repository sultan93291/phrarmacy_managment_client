import StepForm from "@/components/checkoutComponents/StepForm";

function CheckoutPage() {
  return (
    <section className="pt-8 lg:py-[50px] md:py-[100px]">
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
