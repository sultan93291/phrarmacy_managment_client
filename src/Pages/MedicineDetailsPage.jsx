import AverageReviews from "@/components/MedicineDetailsPageComponents/AverageReviews";
import MedicineDetails from "@/components/MedicineDetailsPageComponents/MedicineDetails";
import MedicineDetailsAccordion from "@/components/MedicineDetailsPageComponents/MedicineDetailsAccordion";
import SingleReviews from "@/components/MedicineDetailsPageComponents/SingleReviews";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MedicineDetailsPage() {
  const { id } = useParams();
  const [medicineDetails, setmedicineDetails] = useState();
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [allReview, setallReview] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/medicine/${id}/show`,
    })
      .then(res => {
        console.log(res.data.data, " medicine details data");
        setmedicineDetails(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/medicine/1/review?sort=&per_page=&page=`,
    })
      .then(res => {
        console.log(res.data.data, " all review  data");
        setallReview(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="py-24 font-dmsans">
      <div className="container">
        <MedicineDetails data={medicineDetails}></MedicineDetails>
        <MedicineDetailsAccordion
          data={medicineDetails}
        ></MedicineDetailsAccordion>

        {/* reviews */}
        <div className="border rounded-lg p-10  w-full flex flex-col">
          <div className="w-full ">
            <h3 className="pb-6 text-xl font-semibold text-[#222E48]">
              Average Reviews
            </h3>
            <AverageReviews></AverageReviews>
          </div>
          <div className="pt-8">
            <div className="flex pb-6 items-center justify-between ">
              <h3 className=" text-lg font-semibold text-[#222E48]">
                All Reviews
              </h3>
              <div className="flex items-center gap-2">
                <h4 className="text-[#404A60]">Sort By: </h4>
                <div>
                  <Select>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">New</SelectItem>
                      <SelectItem value="dark">Latest</SelectItem>
                      <SelectItem value="system">Last Week</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {allReview.map((review, index) => {
                return <SingleReviews data={review} key={index} ></SingleReviews>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicineDetailsPage;
