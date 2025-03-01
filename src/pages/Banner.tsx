export const Banner = () => {
  return (
    <div
      id="homesection"
      className="min-h-screen bg-cover bg-fixed flex items-center  text-left text-white px-6"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <div className="max-w-2xl ml-5 ">
        <h1 className="text-8xl font-light leading-snug text-white">
          Together We Can{" "}
        </h1>
        <p className="mt-6">
          <span className="bg-red-500 text-white px-4 py-2 rounded-md font-bold">
            Save Lives
          </span>
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Every life is precious, and together, we have the power to make a
          difference. A simple act of kindness, a helping hand, or a small
          contribution can bring hope to those in need. No effort is ever too
          small—because when we stand together, we create a world where
          compassion saves lives. Join us in making a change, one step at a
          time.
        </p>
        <p className="mt-6">
          <span className="bg-red-500 text-white px-4 py-2 rounded-md font-bold">
            Start With A Little
          </span>
        </p>
      </div>
    </div>
  );
};