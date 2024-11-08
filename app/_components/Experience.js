const ExperienceSection = ({ data }) => {
  const { title, experience_slide } = data;
  return (
    <section className="p-8">
      <h2 className="text-4xl font-bold text-center mb-2">{title}</h2>
      <div className="py-2 px-6 mx-auto max-w-screen-xl">
        <div className="space-y-4 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-2 lg:space-y-0">
          {experience_slide.map((s) => (
            <ExperienceSlides data={s} key={s.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

const ExperienceSlides = ({ data }) => {
  const { role, company, duration, responsibilites, logo } = data;
  return (
    <>
      <div className="flex flex-col p-1 lg:mx-1 sm:mx-auto text-center rounded-lg border shadow border-gray-600 xl:p-8 text-white bg-orange-400">
        <h3 className="mb-4 text-2xl font-semibold">{role}</h3>
        <p className="font-light text-xl text-gray-900">{company}</p>
        <p className="text-xl mt-4">{duration}</p>
        <div className="flex justify-center my-8">
          <span className="mr-2 text-xl font-extrabold">{responsibilites}</span>
        </div>
      </div>
    </>
  );
};