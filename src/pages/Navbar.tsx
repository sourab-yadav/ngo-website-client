import { useEffect, useState } from "react";
import AuthForm from "./AuthForm";
import { useNavigate } from "react-router-dom";

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: () => void;
}> = ({ isOpen, onClose, onLoginSuccess }) => {
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
        <AuthForm onClose={onClose} onLoginSuccess={onLoginSuccess} />
      </div>
    </div>
  );
};

export const Navbar = (props:any) => {
  const { isModalOpen, setIsModalOpen } = props;
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

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
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.replace(/\s+/g, "").toLowerCase()}section`}
                    className="hover:text-gray-50 hover:bg-red-500 transition duration-300 px-4 py-2 rounded-lg"
                  >
                    {item}
                  </a>
                </li>
              ))}

              <li>
                <ul className="flex space-x-8">
                {isLoggedIn ? (
                  <>
                    <li>
                      <button
                        onClick={handleProfileClick}
                        className="hover:bg-red-500 hover:text-white transition duration-300 px-4 rounded-lg"
                      >
                        Profile
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="hover:bg-red-500 hover:text-white transition duration-300 px-4 rounded-lg"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <li>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="hover:bg-red-500 hover:text-white transition duration-300 px-4 rounded-lg"
                    >
                      Sign In
                    </button>
                  </li>
                )}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Pass login success handler to Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </>
  );
};
