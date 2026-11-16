import { Link } from "react-router-dom";

const Dining = () => {
  return (
    <main className="w-full overflow-hidden bg-white text-[#333333]">

{/* HERO IMAGE */}
<section
  className="w-full h-[240px] md:h-[486px] bg-[#3a2a20] bg-cover bg-center"
  style={{ backgroundImage: "url('public/other-pages-img/img-1.jpg')" }}
/>


{/* INTRO SECTION */}
<section className="bg-[#f2f2f2] pt-[30px] pb-[40px] md:pt-[40px] md:pb-[70px]">
  <div className="mx-auto w-full max-w-[1070px] px-[13px]">

    <h1 className="text-[26px] md:text-[32px] font-light uppercase leading-[1.2] text-[#333333]">
      ARC Restaurant &amp; Lounge
    </h1>

    <h2 className="mt-[12px] md:mt-[16px] text-[20px] md:text-[24px] font-normal leading-[1.3] text-[#333333]">
      Experience Local Cuisine
    </h2>

    <p className="mt-[10px] text-[14px] leading-[21px] text-[#333333]">
      ARC THE.HOTEL OTTAWA offers guests a delightful dining experience to savor during their stay in{" "}
      <a href="#downtown" className="text-[#cc0000] underline">
        downtown Ottawa
      </a>
      . ARC Restaurant &amp; Lounge is a beautiful dining space where you can kickstart your day with a healthy breakfast, entertain over lunch or unwind after a long day with a gourmet dinner.
    </p>

  </div>
</section>


{/* DINING CARDS */}
<section className="mt-[40px] md:mt-[60px] pb-[60px]">
  <div className="mx-auto w-full max-w-[1070px] px-[13px]">

    {/* CARD 1 — ARC RESTAURANT & LOUNGE */}
    <div className="flex flex-col md:flex-row bg-[#f2f2f2] md:min-h-[215px] mb-[30px] md:mb-[44px]">

      <img
        src="public/other-pages-img/img-2.jpg"
        alt="ARC Restaurant & Lounge"
        className="w-full h-[220px] md:h-auto md:w-[264px] shrink-0 object-cover bg-[#d9d9d9]"
      />

      <div className="flex flex-1 flex-col justify-center px-[16px] py-[24px] md:pl-[12px] md:pr-[12px]">
        <h3 className="text-[18px] font-normal leading-[1.3] text-[#222222]">
          ARC Restaurant &amp; Lounge
        </h3>
        <p className="mt-[6px] text-[13px] leading-[18px]">
          Join us for Breakfast, Lunch &amp; Dinner 7 days a week
        </p>
        <ul className="mt-[8px] list-disc pl-[22px] text-[13px] leading-[18px]">
          <li>Breakfast - 7:00 - 11:30am</li>
          <li>Lunch - 11:30am - 4:00pm</li>
          <li>Dinner - 4:00 - 9:00pm</li>
          <li>Lounge - 11:30am - 10:00pm</li>
        </ul>
        <Link
          to="/dining/restaurant"
          className="mt-[16px] w-fit text-[13px] font-bold text-[#cc0000] underline"
        >
          See dining details →
        </Link>
      </div>

      <div className="hidden md:block w-[158px] shrink-0 border-l-[2px] border-black" />
    </div>


    {/* CARD 2 — ARC IN-ROOM DINING */}
    <div className="flex flex-col md:flex-row bg-[#f2f2f2] md:min-h-[215px] mb-[30px] md:mb-[44px]">

      <img
        src="public/other-pages-img/img-3.jpg"
        alt="ARC In-Room dining"
        className="w-full h-[220px] md:h-auto md:w-[264px] shrink-0 object-cover bg-[#d9d9d9]"
      />

      <div className="flex flex-1 flex-col justify-center px-[16px] py-[24px] md:pl-[12px] md:pr-[12px]">
        <h3 className="text-[18px] font-normal leading-[1.3] text-[#222222]">
          ARC In-Room dining
        </h3>
        <p className="mt-[6px] text-[13px] leading-[18px]">
          Place your order and have your favourite meal delivered to your room. Available daily
        </p>
        <ul className="mt-[8px] list-disc pl-[22px] text-[13px] leading-[18px]">
          <li>Breakfast - 7:00 - 11:30am</li>
          <li>Lunch - 11:30am - 4:00pm</li>
          <li>Dinner - 4:00 - 9:00pm</li>
          <li>Lounge - 11:30am - 10:00pm</li>
        </ul>
        <Link
          to="/dining/in-room"
          className="mt-[16px] w-fit text-[13px] font-bold text-[#cc0000] underline"
        >
          See dining details →
        </Link>
      </div>

      <div className="hidden md:block w-[158px] shrink-0 border-l-[2px] border-black" />
    </div>


    {/* CARD 3 — ARC MARKET PLACE */}
    <div className="flex flex-col md:flex-row bg-[#f2f2f2] md:min-h-[215px]">

      <img
        src="public/other-pages-img/img-4.png"
        alt="ARC Market Place"
        className="w-full h-[220px] md:h-auto md:w-[264px] shrink-0 object-cover bg-[#d9d9d9]"
      />

      <div className="flex flex-1 flex-col justify-center px-[16px] py-[24px] md:pl-[12px] md:pr-[12px]">
        <h3 className="text-[18px] font-normal leading-[1.3] text-[#222222]">
          ARC Market Place
        </h3>
        <p className="mt-[6px] text-[13px] leading-[18px]">
          Looking for a quick snack, grab something from our market place
        </p>
        <Link
          to="/dining/market"
          className="mt-[16px] w-fit text-[13px] font-bold text-[#cc0000] underline"
        >
          See dining details →
        </Link>
      </div>

      <div className="hidden md:block w-[158px] shrink-0 border-l-[2px] border-black" />
    </div>

  </div>
</section>

    </main>
  );
};

export default Dining;