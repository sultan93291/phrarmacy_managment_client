import Searchbar from "./Searchbar";
import TreatmentBox from "./TreatmentBox";

const treatmentsCategories = [
  {
    categoryName: "Men's Health",
    treatments: [
      {
        name: "Erectile dysfunction treatments",
        image: "https://i.ibb.co.com/T1fgTDv/Frame.png",
      },
      {
        name: "Premature ejaculation",
        image: "https://i.ibb.co.com/wJPFf7q/Frame-1.png",
      },
      {
        name: "Hair Loss",
        image: "https://i.ibb.co.com/98wdbY4/Frame-2.png",
      },
    ],
  },
  {
    categoryName: "Women's Health",
    treatments: [
      {
        name: "Erectile dysfunction treatments",
        image: "https://i.ibb.co.com/T1fgTDv/Frame.png",
      },
      {
        name: "Premature ejaculation",
        image: "https://i.ibb.co.com/wJPFf7q/Frame-1.png",
      },
      {
        name: "Hair Loss",
        image: "https://i.ibb.co.com/98wdbY4/Frame-2.png",
      },
    ],
  },
  {
    categoryName: "Healthy Living",
    treatments: [
      {
        name: "Erectile dysfunction treatments",
        image: "https://i.ibb.co.com/T1fgTDv/Frame.png",
      },
      {
        name: "Premature ejaculation",
        image: "https://i.ibb.co.com/wJPFf7q/Frame-1.png",
      },
      {
        name: "Hair Loss",
        image: "https://i.ibb.co.com/98wdbY4/Frame-2.png",
      },
    ],
  },
  {
    categoryName: "Sexual Health",
    treatments: [
      {
        name: "Erectile dysfunction treatments",
        image: "https://i.ibb.co.com/T1fgTDv/Frame.png",
      },
      {
        name: "Premature ejaculation",
        image: "https://i.ibb.co.com/wJPFf7q/Frame-1.png",
      },
      {
        name: "Hair Loss",
        image: "https://i.ibb.co.com/98wdbY4/Frame-2.png",
      },
    ],
  },
  {
    categoryName: "General Health",
    treatments: [
      {
        name: "Erectile dysfunction treatments",
        image: "https://i.ibb.co.com/T1fgTDv/Frame.png",
      },
      {
        name: "Premature ejaculation",
        image: "https://i.ibb.co.com/wJPFf7q/Frame-1.png",
      },
      {
        name: "Hair Loss",
        image: "https://i.ibb.co.com/98wdbY4/Frame-2.png",
      },
    ],
  },
  {
    categoryName: "Travel Health",
    treatments: [
      {
        name: "Erectile dysfunction treatments",
        image: "https://i.ibb.co.com/T1fgTDv/Frame.png",
      },
      {
        name: "Premature ejaculation",
        image: "https://i.ibb.co.com/wJPFf7q/Frame-1.png",
      },
      {
        name: "Hair Loss",
        image: "https://i.ibb.co.com/98wdbY4/Frame-2.png",
      },
    ],
  },
  {
    categoryName: "Hair, Skin, Nails",
    treatments: [
      {
        name: "Erectile dysfunction treatments",
        image: "https://i.ibb.co.com/T1fgTDv/Frame.png",
      },
      {
        name: "Premature ejaculation",
        image: "https://i.ibb.co.com/wJPFf7q/Frame-1.png",
      },
      {
        name: "Hair Loss",
        image: "https://i.ibb.co.com/98wdbY4/Frame-2.png",
      },
      {
        name: "Erectile dysfunction treatments",
        image: "https://i.ibb.co.com/T1fgTDv/Frame.png",
      },
      {
        name: "Premature ejaculation",
        image: "https://i.ibb.co.com/wJPFf7q/Frame-1.png",
      },
      {
        name: "Hair Loss",
        image: "https://i.ibb.co.com/98wdbY4/Frame-2.png",
      },
    ],
  },
];

function AllTreatmentSection() {
  return (
    <section className="pt-[140px]">
      <div className="container">
        {/* section title  */}
        <div className="text-center">
          <h2
            data-aos="zoom-up"
            data-aos-duration="2000"
            className="text-[36px] font-bold leading-normal text-primary"
          >
            Our All Treatments
          </h2>
          <div
            data-aos="zoom-up"
            data-aos-duration="2000"
            className="w-[638px] mx-auto mt-5"
          >
            <Searchbar />
          </div>
        </div>
        <div>
          {treatmentsCategories.map((category,idx) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              key={idx}
              className="mt-10"
            >
              <TreatmentBox item={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllTreatmentSection;
