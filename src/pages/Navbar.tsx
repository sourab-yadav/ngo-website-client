import { useState } from "react";
import AuthForm from "./AuthForm";

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-10 flex items-center justify-center">
      <div className="bg-white h-screen rounded-lg shadow-lg w-full max-w-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer text-gray-600 hover:text-gray-900 text-xl"
        >
          ✖
        </button>
        <AuthForm />
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-10 opacity-75 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          {/* Logo */}
          <div className="logo">
            <img src="/logo.png" alt="NGO logo" className="h-14" />
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-8 text-white text-lg">
              {[
                "Home",
                "Education",
                "Programs",
                "Gallery",
                "About Us",
                "Join Us",
                "Sign In",
              ].map((item) => (
                <li key={item}>
                  {item === "Sign In" ? (
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="hover:bg-red-500 hover:text-white transition duration-300 px-4 py-2 rounded-lg"
                    >
                      {item}
                    </button>
                  ) : (
                    <a
                      href={`#${item.replace(/\s+/g, "").toLowerCase()}section`}
                      className="hover:bg-red-500 hover:text-white transition duration-300 px-4 py-2 rounded-lg !text-white"
                    >
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Render Modal */}
      </header>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
