/* eslint-disable react/prop-types */
const AssessmentResult = ({ questions }) => {
  console.log("I'm the question", questions);

  return (


    <div className="w-full flex flex-col sm:flex-row text-[#052D4C] max-h-[80vh] overflow-y-auto user-assessment-result">
      {/* Left Section - Questions */}
      <div className="sm:w-3/5 h-full space-y-8">
        <div key={questions?.id} className="mb-5">
          {/* Question Title */}
          <h4 className="text-lg xl:text-xl font-semibold">
            {questions?.id}. {questions?.question}
          </h4>

          {/* Answer Options */}
          <div className="mt-5 text-base">
            <div className="flex flex-wrap items-center gap-5">
              {questions?.options?.map(option => (
                <div key={option.id}>
                  <input
                    readOnly
                    className="peer hidden"
                    type="radio"
                    id={`option-${questions.id}-${option.id}`}
                    value={option.value}
                    checked={option.value === questions?.answer}
                  />
                  <label
                    className={`px-2 text-xs sm:text-base sm:px-4 cursor-pointer py-2 text-primary rounded-full bg-[#DEF0FF] ${option.value === questions?.answer
                      ? "bg-primary text-white"
                      : ""
                      }`}

                    htmlFor={`option-${questions.id}-${option.id}`}
                  >
                    {option.value}
                  </label>
                </div>
              ))}
            </div>
          </div>


          {/* Additional Information */}
          {questions?.note && (
            <div className="mt-8">
              <h5 className="text-xl font-semibold">Additional Information</h5>
              <div className="mt-3 border rounded-xl border-black/20 p-4 text-base sm:w-3/4">

                {questions?.note}
              </div>
            </div>
          )}
        </div>
      </div>


      {/* result */}
     
      {/* Right Section - Results Summary */}
      <div className="sm:w-2/5 h-fit flex flex-col items-center">

        <div className="size-32 text-2xl font-semibold rounded-full border border-[#0CA6FC] text-[#0CA6FC] flex items-center justify-center">
          <p className="z-10">10/20</p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-lg mt-6 text-[#00000099]">
          <p>Questions attempted: 20</p>
          <p>Correct answers: 10</p>
          <p>Wrong answers: 10</p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResult;
