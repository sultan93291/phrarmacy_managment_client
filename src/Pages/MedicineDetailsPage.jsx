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

function MedicineDetailsPage() {
  return (
    <div className="py-24 font-dmsans">
      <div className="container">
        <MedicineDetails></MedicineDetails>
        <MedicineDetailsAccordion></MedicineDetailsAccordion>

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
                    <SingleReviews></SingleReviews>
                    <SingleReviews></SingleReviews>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicineDetailsPage;
