import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-[#333333]">

      {/* TOP LINKS BAR */}
      <div className="flex h-[38px] flex-wrap items-center justify-center gap-x-[15px] border-b border-[#e5e5e5] px-4 text-[16px] uppercase leading-none">
        <span>Contact &amp; Location</span>
        <span>Privacy &amp; Cookie Policy</span>
        <span>Notice of Accessibility</span>
      </div>

      {/* SOCIAL ICONS */}
      <div className="flex items-center justify-center gap-[19px] pt-[34px]">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <FiFacebook className="text-[30px]" />
        </a>
        <a href="https://www.tripadvisor.com" target="_blank" rel="noreferrer" aria-label="Tripadvisor">
          <FaTripadvisor className="text-[30px]" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <FiInstagram className="text-[30px]" />
        </a>
      </div>

      {/* LOGO */}
      <div className="mt-[39px] flex justify-center">
        <img src="/Logo.png" alt="ARC The.Hotel Ottawa" className="h-[87px] w-auto object-contain" />
      </div>

      {/* DIVIDER */}
      <div className="mx-auto mt-[17px] h-px w-[442px] max-w-[90%] bg-[#e5e5e5]" />

      {/* ADDRESS & CONTACT */}
      <div className="mt-5 px-4 text-center text-[13px] leading-[24px]">
        <p>140 Slater Street Ottawa</p>
        <p>Ontario K1P 5H6, Canada</p>

        <p className="mt-2">
          Reservations:{" "}
          <a href="tel:8006992516" className="underline">800-699-2516</a>
          {" "}| Phone:{" "}
          <a href="tel:16132382888" className="underline">1-613-238-2888</a>
        </p>
        <p>
          Phone:{" "}
          <a href="mailto:guestservices@arcthehotel.com" className="underline">
            guestservices@arcthehotel.com
          </a>
        </p>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-[60px] px-4 pb-[17px] text-center text-[13px] leading-[24px]">
        <p>
          © Arc The.Hotel Ottawa | Designed by{" "}
          <a href="https://amadeus-hospitality.com" target="_blank" rel="noreferrer" className="underline">
            Amadeus
          </a>
        </p>
        <p className="mt-[7px]">
          <button type="button">Manage Cookies</button>
        </p>
      </div>

    </footer>
  );
};

export default Footer;