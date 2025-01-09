/* eslint-disable react/prop-types */
const AssessmentResult = ({ questions }) => {
  return (
    <div className="w-full flex text-[#052D4C] max-h-[80vh] overflow-y-auto user-assessment-result">
      {/* questions */}
      <div className="w-4/5 h-full space-y-8">
        {questions?.map((question) => (
          <div key={question?.id} className="mb-5">
            <h4 className="text-xl font-semibold">
              {question?.id}. {question?.title}
            </h4>

            {/* answer */}
            <div className="mt-5 text-base">
              <div className="flex items-center gap-4">
                {question?.options.map((option, idx) => (
                  <div key={idx}>
                    <input
                      readOnly
                      className="peer hidden"
                      type="radio"
                      value={option}
                    />
                    <label
                      className={`px-4 cursor-pointer ${
                        option == question?.answer ? 'bg-primary text-white' : ''
                      } py-2 text-primary rounded-full bg-[#DEF0FF]`}
                      htmlFor="male"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* additional information */}
            {question?.additionalInfo && (
              <div className="mt-8">
                <h5 className="text-xl font-semibold">
                  Additional Information
                </h5>

                <div className="mt-3 border rounded-xl border-black/20 p-4 text-base w-3/4">
                  {question?.additionalInfo}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* result */}
      <div className="w-1/5 h-fit flex flex-col items-center">
        <div className="size-32 text-2xl font-semibold rounded-full border border-[#0CA6FC] text-[#0CA6FC] flex items-center justify-center">
          <p className="z-10">10/20</p>
        </div>

        {/*  details */}
        <div className="space-y-2 text-lg mt-6 text-[#00000099]">
          <p>Questions attempted : 20</p>
          <p>Correct answers: 20</p>
          <p>Wrong answers: 20</p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResult;
