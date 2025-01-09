import TeamCard from "../HomePageComponents/TeamCard";

const teamData = [
    {
      id: 1,
      imgUrl: "https://i.ibb.co.com/zfxR5Wm/Team-Member-Image-1.png",
      name: "Willimas Jonshon",
      designation: "Customer service",
    },
    {
      id: 2,
      imgUrl: "https://i.ibb.co.com/g4QBSxQ/Team-Member-Image-2.png",
      name: "Tomas Murphy",
      designation: "Customer service",
    },
    {
      id: 3,
      imgUrl: "https://i.ibb.co.com/HVrdvpR/Team-Member-Image-3.png",
      name: "Robert Fox",
      designation: "Contract Tracer",
    },
    {
      id: 4,
      imgUrl: "https://i.ibb.co.com/TvVhnVw/Team-Member-Image-4.png",
      name: "Amalia nichole",
      designation: "Nurse Aide",
    },
  ];

function OurMission() {
  return (
    <section className="pb-[140px]">
      <div className="container">
        <div className="w-[692px] text-center mx-auto mb-10">
          <h3 className="text--xl text-primryDark">
            Our mission provide medical equipment in order to.
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-5">
            {
                teamData.map((item) => (
                    <TeamCard key={item.id} item={item} />
                ))
            }
        </div>
      </div>
    </section>
  );
}

export default OurMission;
