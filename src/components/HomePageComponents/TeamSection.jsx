import TeamCard from './TeamCard';

const teamData = [
  {
    id: 1,
    imgUrl: 'https://i.ibb.co.com/zfxR5Wm/Team-Member-Image-1.png',
    name: 'Willimas Jonshon',
    designation: 'Customer service',
  },
  {
    id: 2,
    imgUrl: 'https://i.ibb.co.com/g4QBSxQ/Team-Member-Image-2.png',
    name: 'Tomas Murphy',
    designation: 'Customer service',
  },
  {
    id: 3,
    imgUrl: 'https://i.ibb.co.com/HVrdvpR/Team-Member-Image-3.png',
    name: 'Robert Fox',
    designation: 'Contract Tracer',
  },
  {
    id: 4,
    imgUrl: 'https://i.ibb.co.com/TvVhnVw/Team-Member-Image-4.png',
    name: 'Amalia nichole',
    designation: 'Nurse Aide',
  },
];

function TeamSection() {
  return (
    <section className="py-[140px]">
      <div className="container">
        {/* section title  */}
        <div className="mb-10">
          <h3
            data-aos="zoom-up"
            data-aos-duration="1000"
            className="w-[650px] text-center mx-auto text--xl"
          >
            Our mission provide medical equipment in order to.
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {teamData.map((item) => (
            <div
              data-aos="zoom-up"
              data-aos-duration="2000"
              key={item.id}
              className="mt-5"
            >
              <TeamCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
