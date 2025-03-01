export const Navbar = () => {
    return (
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
                "About Us",
                "Programs",
                "Education",
                "Gallery",
                "Join Us",
              ].map((item) => (
                <li key={item}>
                <a
                  href={`#${item.replace(/\s+/g, "").toLowerCase()}section`}
                  className="hover:bg-red-500 hover:text-white transition duration-300 px-4 py-2 rounded-lg !text-white"
                >
                  {item}
                </a>
              </li>            
              ))}
            </ul>
          </nav>
        </div>
      </header>
    );
  };