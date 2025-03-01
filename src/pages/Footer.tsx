import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import { NGO_NAME } from "./Home";
export const Footer: React.FC = () => {
    return (
      <footer id='joinussection' className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a href="#" className="text-blue-500 text-3xl hover:opacity-75">
              <Facebook />
            </a>
            <a href="#" className="text-black text-3xl hover:opacity-75">
              <Twitter />
            </a>
            {/* <a href="#" className="text-green-500 text-3xl hover:opacity-75">
              <Whatsapp />
            </a> */}
            <a href="#" className="text-pink-500 text-3xl hover:opacity-75">
              <Instagram />
            </a>
            <a href="#" className="text-red-500 text-3xl hover:opacity-75">
              <Mail />
            </a>
          </div>
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} {NGO_NAME}. All Rights Reserved.</p>
          <nav className="flex space-x-4 text-gray-400 text-sm">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Contact Us</a>
          </nav>
        </div>
      </footer>
    );
  };