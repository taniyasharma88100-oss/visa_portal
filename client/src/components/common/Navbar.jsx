
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Rooms", clickable: false },
    { name: "Dining", link: "/dining", clickable: true },
    { name: "About Us", link: "/about", clickable: true },
    { name: "Meetings and Events", link: "/meetings-events", clickable: true },
    { name: "Amenities", link: "/amenities", clickable: true },
  ];

  return (
    <>
      {/* MAIN NAVBAR */}
      <header className="absolute top-0 left-0 w-full z-50  border-t border-white/20">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">

          <div className="min-h-[90px] lg:h-[120px] flex items-center justify-between">

            {/* LOGO */}
            <Link to="/" className="shrink-0">
              <img
                src="/Logo.png"
                alt="Logo"
                className="h-14 sm:h-16 lg:h-[100px] w-auto object-contain"
              />
            </Link>

            {/* DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8 ml-auto">
              {navLinks.map((item) =>
                item.clickable ? (
                  <Link
                    key={item.name}
                    to={item.link}
                    className="text-white text-[14px] xl:text-[16px] font-medium uppercase whitespace-nowrap hover:text-gray-300 transition duration-300"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span
                    key={item.name}
                    className="text-white text-[14px] xl:text-[16px] font-medium uppercase whitespace-nowrap cursor-default select-none"
                  >
                    {item.name}
                  </span>
                )
              )}
            </nav>

            {/* HAMBURGER MENU */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="text-white ml-5 lg:ml-8 hover:text-gray-300 transition"
            >
              <FiMenu size={39} strokeWidth={1.7} />
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          open
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >

        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* SIDEBAR */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-[420px] bg-[#171717] transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* SIDEBAR HEADER */}
          <div className="flex items-center justify-between p-7 border-b border-white/10">

           

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-white hover:text-gray-300"
            >
              <FiX size={30} />
            </button>

          </div>

          {/* SIDEBAR LINKS */}
          <nav className="flex flex-col px-7 py-5">
            {navLinks.map((item) =>
              item.clickable ? (
                <Link
                  key={item.name}
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className="py-5 border-b border-white/10 text-white text-base sm:text-lg font-medium uppercase tracking-wide hover:text-gray-400 transition"
                >
                  {item.name}
                </Link>
              ) : (
                <span
                  key={item.name}
                  className="py-5 border-b border-white/10 text-white text-base sm:text-lg font-medium uppercase tracking-wide cursor-default select-none"
                >
                  {item.name}
                </span>
              )
            )}
          </nav>

        </div>
      </div>
    </>
  );
};

export default Navbar;
