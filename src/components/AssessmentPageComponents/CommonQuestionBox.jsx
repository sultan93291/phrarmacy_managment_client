
import PropTypes from "prop-types"

function CommonQuestionBox({ question, children }) {

  return (
    <div data-aos="zoom-in"
      data-aos-duration="2000" className="px-5 sm:px-8 py-8 sm:py-12 rounded-xl border-borderLight border">
      <div>
        <h4 className="text-lg sm:text-xl text-subtitleText pb-4 md:pb-6">{question}</h4>
      </div>
      <div className="pl-2">
        {children}
      </div>

    </div>
  )
}

CommonQuestionBox.propTypes = {
  question: PropTypes.text,
  children: PropTypes.node
}

export default CommonQuestionBox