export const ExperienceSlides = ({ data }) => {
  const { role, company, duration, responsibilites } = data;
  return (
    <>
      <div className="flex flex-col">
        <h3 className="mb-4 text-2xl font-semibold">{role}</h3>
        <p className="font-light text-xl text-gray-400">{company}</p>
        <p className="text-xl mt-4">{duration}</p>
        <div className="flex justify-center my-8">
          <span className="mr-2 text-xl font-extrabold">{responsibilites}</span>
        </div>
      </div>
    </>
  );
};