import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const myStyles = {
  itemShapes: Star,
  activeFillColor: "#222E48",
  inactiveFillColor: "#FFC700",
  itemStrokeWidth: 2,
  activeStrokeColor: "#222E48",
  inactiveStrokeColor: "#222E48",
};

function AverageReviews() {
  return (
    <div data-aos="zoom-up"
    data-aos-duration="2000" className="flex gap-12 w-full items-center py-8 border-b border-dashed border-t ">
      <div
        data-aos="zoom-up"
        data-aos-duration="2000"
        className="bg-[#FFC700] border rounded-xl flex-col p-6 flex justify-center items-center border-[#000000]"
      >
        <h3 className="text-4xl font-bold pb-2">4</h3>
        <div>
          <Rating
            className="h-10 gap-1 flex"
            style={{ maxWidth: 250 }}
            value={4}
            readOnly={true}
            itemStyles={myStyles}
          />
        </div>
        <p className="text-lg font-bold pt-4">26 Rating</p>
      </div>
      <div
        data-aos="zoom-up"
        data-aos-duration="2000"
        className="flex flex-col w-full gap-2"
      >
        <div className="w-full flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.70808 11.582C2.41825 11.731 2.09008 11.4707 2.14843 11.1381L2.77072 7.59095L0.128972 5.07347C-0.117913 4.83819 0.00988702 4.40802 0.340629 4.36104L4.01449 3.83914L5.65258 0.594229C5.80014 0.301924 6.19986 0.301924 6.34742 0.594229L7.98551 3.83914L11.6594 4.36104C11.9901 4.40802 12.1179 4.83819 11.871 5.07347L9.22928 7.59095L9.85157 11.1381C9.90992 11.4707 9.58175 11.731 9.29192 11.582L6 9.89008L2.70808 11.582Z"
              fill="#FFC700"
            />
          </svg>
          <span className="text-[#404A60] ">5</span>
          <div className="w-full flex items-center">
            <div className="w-[90%] bg-[#FFC700] h-3 rounded-l-lg"></div>
            <div className="w-[10%] bg-[#EBECEF] h-3 rounded-r-lg"></div>
          </div>
          <span className="w-6">90%</span>
        </div>
        <div className="w-full gap-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.70808 11.582C2.41825 11.731 2.09008 11.4707 2.14843 11.1381L2.77072 7.59095L0.128972 5.07347C-0.117913 4.83819 0.00988702 4.40802 0.340629 4.36104L4.01449 3.83914L5.65258 0.594229C5.80014 0.301924 6.19986 0.301924 6.34742 0.594229L7.98551 3.83914L11.6594 4.36104C11.9901 4.40802 12.1179 4.83819 11.871 5.07347L9.22928 7.59095L9.85157 11.1381C9.90992 11.4707 9.58175 11.731 9.29192 11.582L6 9.89008L2.70808 11.582Z"
              fill="#FFC700"
            />
          </svg>
          <span className="text-[#404A60] ">4</span>
          <div className="w-full flex items-center">
            <div className="w-[75%] bg-[#FFC700] h-3 rounded-l-lg"></div>
            <div className="w-[25%] bg-[#EBECEF] h-3 rounded-r-lg"></div>
          </div>
          <span className="w-6">75%</span>
        </div>
        <div className="w-full gap-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.70808 11.582C2.41825 11.731 2.09008 11.4707 2.14843 11.1381L2.77072 7.59095L0.128972 5.07347C-0.117913 4.83819 0.00988702 4.40802 0.340629 4.36104L4.01449 3.83914L5.65258 0.594229C5.80014 0.301924 6.19986 0.301924 6.34742 0.594229L7.98551 3.83914L11.6594 4.36104C11.9901 4.40802 12.1179 4.83819 11.871 5.07347L9.22928 7.59095L9.85157 11.1381C9.90992 11.4707 9.58175 11.731 9.29192 11.582L6 9.89008L2.70808 11.582Z"
              fill="#FFC700"
            />
          </svg>
          <span className="text-[#404A60] ">3</span>
          <div className="w-full flex items-center">
            <div className="w-[40%] bg-[#FFC700] h-3 rounded-l-lg"></div>
            <div className="w-[60%] bg-[#EBECEF] h-3 rounded-r-lg"></div>
          </div>
          <span className="w-6">60%</span>
        </div>
        <div className="w-full gap-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.70808 11.582C2.41825 11.731 2.09008 11.4707 2.14843 11.1381L2.77072 7.59095L0.128972 5.07347C-0.117913 4.83819 0.00988702 4.40802 0.340629 4.36104L4.01449 3.83914L5.65258 0.594229C5.80014 0.301924 6.19986 0.301924 6.34742 0.594229L7.98551 3.83914L11.6594 4.36104C11.9901 4.40802 12.1179 4.83819 11.871 5.07347L9.22928 7.59095L9.85157 11.1381C9.90992 11.4707 9.58175 11.731 9.29192 11.582L6 9.89008L2.70808 11.582Z"
              fill="#FFC700"
            />
          </svg>
          <span className="text-[#404A60] ">2</span>
          <div className="w-full flex items-center">
            <div className="w-[20%] bg-[#FFC700] h-3 rounded-l-lg"></div>
            <div className="w-[80%] bg-[#EBECEF] h-3 rounded-r-lg"></div>
          </div>
          <span className="w-6">20%</span>
        </div>
        <div className="w-full gap-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.70808 11.582C2.41825 11.731 2.09008 11.4707 2.14843 11.1381L2.77072 7.59095L0.128972 5.07347C-0.117913 4.83819 0.00988702 4.40802 0.340629 4.36104L4.01449 3.83914L5.65258 0.594229C5.80014 0.301924 6.19986 0.301924 6.34742 0.594229L7.98551 3.83914L11.6594 4.36104C11.9901 4.40802 12.1179 4.83819 11.871 5.07347L9.22928 7.59095L9.85157 11.1381C9.90992 11.4707 9.58175 11.731 9.29192 11.582L6 9.89008L2.70808 11.582Z"
              fill="#FFC700"
            />
          </svg>
          <span className="text-[#404A60] ">1</span>
          <div className="w-full flex items-center">
            <div className="w-[5%] bg-[#FFC700] h-3 rounded-l-lg"></div>
            <div className="w-[95%] bg-[#EBECEF] h-3 rounded-r-lg"></div>
          </div>
          <span className="w-6">5%</span>
        </div>
      </div>
    </div>
  );
}

export default AverageReviews;
