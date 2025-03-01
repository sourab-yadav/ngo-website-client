import { useState } from "react";
import { NGO_NAME } from "./Home";
import NGOForm from "../components/NGOForm";

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  formType: "donation" | "volunteer" | "contribution";
}> = ({ isOpen, onClose, formType }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-gray-900 text-xl"
        >
          ✖
        </button>
        <NGOForm formType={formType} />
      </div>
    </div>
  );
};

export const AboutSection = () => {
  const [formType, setFormType] = useState<
    "donation" | "volunteer" | "contribution"
  >("donation");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="aboutussection"
        className="py-40 bg-gray-100 text-center h-screen text-black"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6 border-b-4 border-red-500 inline-block">
            About Us
          </h2>
          <p className="max-w-3xl mx-auto mb-10">
            At {NGO_NAME}, we believe that small acts of kindness can create a
            ripple effect of change. Our mission is to support communities,
            uplift lives, and provide opportunities for a better future. Whether
            it's through donations, volunteering, or scholarships, we empower
            individuals to make a lasting impact. Join us in our journey to
            bring hope and change to those who need it most.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Give Donation */}
            <div className="bg-white p-6 shadow-md rounded-lg text-gray-700 hover:scale-105 transition">
              <h3 className="text-lg font-semibold">Give Donation</h3>
              <p className="mt-4 text-sm">
                Your generosity has the power to change lives. Every donation
                helps provide food, shelter, and education to those in need.
                Give today and be a part of the change!
              </p>
              <button
                className="mt-4 px-4 py-2 bg-red-500 cursor-pointer text-white rounded"
                onClick={() => {setFormType("donation"); setIsModalOpen(true); }}
              >
                Donate Now
              </button>
            </div>

            {/* Become a Volunteer */}
            <div className="bg-white p-6 shadow-md rounded-lg text-gray-700 hover:scale-105 transition">
              <h3 className="text-lg font-semibold">Become a Volunteer</h3>
              <p className="mt-4 text-sm">
                Lend a helping hand and make a real difference. Volunteering is
                more than just giving time—it's about creating hope, spreading
                kindness, and transforming communities
              </p>
              <button
                className="mt-4 px-4 py-2 bg-red-500 cursor-pointer text-white rounded"
                onClick={() => {setFormType("volunteer"); setIsModalOpen(true);}}
              >
                Become Now
              </button>
            </div>

            {/* Give Scholarship */}
            <div className="bg-white p-6 shadow-md rounded-lg text-gray-700 hover:scale-105 transition">
              <h3 className="text-lg font-semibold">Give Scholarship</h3>
              <p className="mt-4 text-sm">
                Education is the key to breaking barriers. Your support can help
                bright minds achieve their dreams and build a better future.
                Sponsor a scholarship today and empower the next generation.
              </p>
              <button
                className="mt-4 px-4 py-2 bg-red-500 cursor-pointer text-white rounded"
                onClick={() => {setFormType("contribution");setIsModalOpen(true);}}
              >
                Give Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={formType}
      />
    </>
  );
};
