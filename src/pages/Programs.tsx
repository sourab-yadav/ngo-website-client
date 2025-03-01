const programs = [
    {
      title: "Education to every child",
      image: "/programs/1.jpg",
    },
    {
      title: "Make life easier for them",
      image: "/programs/2.jpg",
    },
    {
      title: "Dedicating to helping kids",
      image: "/programs/3.jpg",
    },
    {
      title: "Clean Water for people",
      image: "/programs/4.jpg",
    },
  ];
  
export const Programs: React.FC = () => {
    return (
      <section id="programssection" className="bg-gray-200 py-40 h-screen pb-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold ml-[47%] text-black mb-10 py-1 -mt-16 border-b-4 border-red-500 inline-block">
            Programs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-white text-center p-6 rounded-lg shadow-md relative"
              >
                <div
                  className="w-full h-60 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${program.image})` }}
                ></div>
                <h3 className="text-lg font-semibold text-gray-700 mt-4">
                  {program.title}
                </h3>
                <p className="text-sm font-semibold text-gray-600 mt-2 mb-2">
                  Donation Goal: <span className="text-red-500">0 rs</span>
                </p>
                <button className="absolute left-1/2 transform -translate-x-1/2 bottom-[-15px] bg-red-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-red-600 transition">
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };