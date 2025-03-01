import { NGO_NAME } from "./Home";

export const EducationSection: React.FC = () => {
  return (
    <section
      id="educationsection"
      className="relative w-full h-screen overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/childrens.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="relative flex flex-col items-start justify-center h-full text-white px-6">
        <h2 className="text-3xl font-semibold ml-[47%] mb-6 border-b-4 border-red-500 inline-block">
          EDUCATION
        </h2>
        <div className="text-left max-w-[50%] bg-black/20 p-6 rounded-lg shadow-lg ml-10">
          <h3 className="text-4xl font-semibold mb-4">
            Education Is Essential For <br />
            <strong className="text-white text-3xl">BETTER FUTURE</strong>
          </h3>
          <p className="text-lg mb-10">
            Education is the foundation of a better future, empowering
            communities and transforming lives. It bridges the gap between
            dreams and opportunities, providing children and adults with the
            knowledge and skills they need to thrive. Through accessible and
            quality education, we break the cycle of poverty, promote equality,
            and create a society where every individual has the chance to
            succeed. At {NGO_NAME}, we believe that learning is not just a right
            but a powerful tool for change, shaping a world of hope, dignity,
            and progress.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 font-semibold rounded-lg shadow-md hover:bg-red-700 ">
            EXPLORE NOW
          </button>
        </div>
      </div>
    </section>
  );
};