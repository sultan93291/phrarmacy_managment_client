/* eslint-disable react/prop-types */
const AssessmentResult = ({ questions }) => {
  console.log("I'm the question", questions, "are bal kaj kor");

  return (
    <div className="w-full flex flex-col sm:flex-row text-[#052D4C] max-h-[80vh] overflow-y-auto user-assessment-result">
      {/* Left Section - Questions */}
      {questions?.Assessment_results.map((item, index) => {
        return (
          <div key={index} className="sm:w-3/5 h-full flex flex-col space-y-8">
            <div className="mb-5">
              {/* Question Title */}
              <h4 className="text-lg xl:text-xl font-semibold">
                {index + 1}. {item?.assessment}
              </h4>

              {/* Answer Options */}
              <div className="mt-5 text-base">
                <div className="flex flex-wrap items-center gap-5">
                  {item?.option1 && (
                    <div key="option1">
                      <input
                        readOnly
                        className="peer hidden"
                        type="radio"
                        id={`option-${index}-1`}
                        value={item?.option1}
                        checked={item?.selected_option === item?.option1}
                      />
                      <label
                        className={`px-2 text-xs sm:text-base sm:px-4 cursor-pointer py-2 text-primary rounded-full bg-[#DEF0FF] ${
                          item?.selected_option === item?.option1
                            ? "bg-primary text-white"
                            : ""
                        }`}
                        htmlFor={`option-${index}-1`}
                      >
                        {item?.option1}
                      </label>
                    </div>
                  )}
                  {item?.option2 && (
                    <div key="option2">
                      <input
                        readOnly
                        className="peer hidden"
                        type="radio"
                        id={`option-${index}-2`}
                        value={item?.option2}
                        checked={item?.selected_option === item?.option2}
                      />
                      <label
                        className={`px-2 text-xs sm:text-base sm:px-4 cursor-pointer py-2 text-primary rounded-full bg-[#DEF0FF] ${
                          item?.selected_option === item?.option2
                            ? "bg-primary text-white"
                            : ""
                        }`}
                        htmlFor={`option-${index}-2`}
                      >
                        {item?.option2}
                      </label>
                    </div>
                  )}
                  {item?.option3 && (
                    <div key="option3">
                      <input
                        readOnly
                        className="peer hidden"
                        type="radio"
                        id={`option-${index}-3`}
                        value={item?.option3}
                        checked={item?.selected_option === item?.option3}
                      />
                      <label
                        className={`px-2 text-xs sm:text-base sm:px-4 cursor-pointer py-2 text-primary rounded-full bg-[#DEF0FF] ${
                          item?.selected_option === item?.option3
                            ? "bg-primary text-white"
                            : ""
                        }`}
                        htmlFor={`option-${index}-3`}
                      >
                        {item?.option3}
                      </label>
                    </div>
                  )}
                </div>
              </div>

              {/* Additional Information */}
              {item?.note && (
                <div className="mt-8">
                  <h5 className="text-xl font-semibold">
                    Additional Information
                  </h5>
                  <div className="mt-3 border rounded-xl border-black/20 p-4 text-base sm:w-3/4">
                    {item?.note_answer || item?.note}
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* result */}

      {/* Right Section - Results Summary */}
      <div className="sm:w-2/5 h-fit flex flex-col items-center">
        <div className="size-32 text-2xl font-semibold rounded-full border border-[#0CA6FC] text-[#0CA6FC] flex items-center justify-center">
          <p className="z-10">
            {" "}
            {questions?.Total_correct} /{questions?.Total_assessment}{" "}
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2 text-lg mt-6 text-[#00000099]">
          <p>Questions attempted: {questions?.Total_assessment} </p>
          <p>Correct answers: {questions?.Total_correct} </p>
          <p>Wrong answers: {questions?.Total_wrong} </p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentResult;
