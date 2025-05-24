"use client";
import AboutHealthProblem from "@/components/SingleHealthPageComponents/AboutHealthProblem";
import HeroSection from "@/components/SingleHealthPageComponents/HeroSection";
import QuickConsultation from "@/components/SingleHealthPageComponents/QuickConsultation";
import TreatmentOption from "@/components/SingleHealthPageComponents/TreatmentOption";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleHealthPage() {
  const { id } = useParams();
  const SiteURl = import.meta.env.VITE_SITE_URL;
  const [TreatmentData, setsetTreatmentData] = useState();
  const [aboutData, setAboutData] = useState();
  const [medicineData, setmedicineData] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/treatment/${id}/detail`,
    })
      .then(res => {
        console.log(res.data, "single health page data");
        setsetTreatmentData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/treatment/${id}/about`,
    })
      .then(res => {
        console.log(res.data, "single health page data");
        setAboutData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    axios({
      method: "get",
      url: `${SiteURl}/api/treatment/${id}/medicines`,
    })
      .then(res => {
        console.log(res.data, "medicine data");
        setmedicineData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <HeroSection data={TreatmentData} />
      <AboutHealthProblem data={aboutData} />
      <QuickConsultation />
      <TreatmentOption data={medicineData} />
    </div>
  );
}

export default SingleHealthPage;
