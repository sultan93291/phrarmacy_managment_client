/* eslint-disable react/prop-types */
const AssessmentResult = ({ questions }) => {
  console.log("I'm the question", questions, "are bal kaj kor");

  return (
    <div className="w-full flex flex-col sm:flex-row text-[#052D4C] max-h-[80vh] overflow-y-auto user-assessment-result">
      {/* Left Section - Questions */}
      <div className="sm:w-4/5 h-full space-y-8">
        {questions?.Assessment_results.map((item, index) => (
          <div key={index} className="mb-5">
            {/* Question Title */}
            <h4 className="text-lg sm:text-xl font-semibold">
              {index + 1}. {item?.assessment}
            </h4>

            {/* Answer Options */}
            <div className="mt-5 text-base">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                {[item?.option1, item?.option2, item?.option3].map(
                  (option, idx) =>
                    option && (
                      <div key={idx}>
                        <input
                          readOnly
                          className="peer hidden"
                          type="radio"
                          id={`option-${index}-${idx}`}
                          value={option}
                          checked={item?.selected_option === option}
                        />
                        <label
                          className={`px-4 cursor-pointer text-xs sm:text-sm md:text-base py-1 sm:py-2 text-primary rounded-full bg-[#DEF0FF] ${
                            item?.selected_option === option
                              ? "bg-primary text-white"
                              : ""
                          }`}
                          htmlFor={`option-${index}-${idx}`}
                        >
                          {option}
                        </label>
                      </div>
                    )
                )}
              </div>
            </div>

            {/* Additional Information */}
            {item?.note && (
              <div className="mt-8">
                <h5 className="text-base sm:text-xl font-semibold">
                  Additional Information
                </h5>
                <div className="mt-3 border rounded-xl border-black/20 p-2.5 sm:p-4 text-sm sm:text-base sm:w-3/4">
                  {item?.note_answer || item?.note}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* result */}

      {/* Right Section - Results Summary */}
      <div className="sm:w-2/5 mt-6 sm:mt-0 h-fit flex flex-col items-center">
        <div className="size-20 md:size-32 text-2xl font-semibold rounded-full border border-[#0CA6FC] text-[#0CA6FC] flex items-center justify-center">
          <p className="z-10">
            {" "}
            {questions?.Total_correct} /{questions?.Total_assessment}{" "}
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-sm sm:text-lg mt-6 text-[#00000099]">
          <p>Questions attempted: {questions?.Total_assessment} </p>
          <p>Correct answers: {questions?.Total_correct} </p>
          <p>Wrong answers: {questions?.Total_wrong} </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResult;
