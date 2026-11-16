import {
  FaWifi,
  FaDumbbell,
  FaParking,
  FaTshirt,
  FaRegClock,
  FaUmbrella,
  FaLanguage,
  FaConciergeBell,
  FaPaw,
  FaSmokingBan,
  FaLock,
  FaSnowflake,
  FaUsers,
  FaCube,
  FaCoffee,
} from "react-icons/fa";
import { MdKitchen } from "react-icons/md";

const Amenities = () => {
  return (
    <main className="w-full overflow-hidden bg-white text-[#333333]">

{/* HERO IMAGE */}
<section
  className="w-full h-[240px] md:h-[382px] bg-[#3a3a3a] bg-cover bg-center"
  style={{ backgroundImage: "url('/other-pages-img/img-9.jpg')" }}
/>


{/* AMENITIES INTRO */}
<section className="bg-[#f2f2f2] pt-[36px] pb-[36px] md:pt-[48px] md:pb-[48px]">
  <div className="mx-auto w-full max-w-[960px] px-[16px]">

    <h1 className="text-[30px] md:text-[36px] font-light uppercase leading-[1.2] text-[#333333]">
      Amenities
    </h1>

    <h2 className="mt-[20px] md:mt-[24px] text-[22px] md:text-[26px] font-normal leading-[1.3] text-[#333333]">
      Experience Warmth &amp; Comfort
    </h2>

    <p className="mt-[20px] md:mt-[24px] text-[14px] leading-[24px] text-[#333333]">
      Your arrival at downtown Ottawa's first design hotel begins with a simple phrase: "Welcome to ARC THE.HOTEL OTTAWA." The warmth and sincerity behind this greeting is your first hint that this is no ordinary boutique hotel. After your arrival, surf the Internet on our complimentary Wi-Fi to find out about fun attractions and things to do near our hotel. Or you can shut the curtain to close out the urban bustle and curl up with a good book in a tranquil ambiance complemented by luxurious linens and amenities.
    </p>

  </div>
</section>


{/* MAIN AMENITIES + FEATURE LIST */}
<section className="pt-[50px] md:pt-[67px] pb-[60px] md:pb-[78px]">
  <div className="mx-auto w-full max-w-[960px] px-[16px]">

    {/* FOUR MAIN AMENITIES */}
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

      {/* FREE WI-FI */}
      <div className="px-4 text-center">
        <div className="mb-[22px] flex h-[80px] items-center justify-center">
          <FaWifi className="text-[72px] text-[#cc0000]" />
        </div>
        <h4 className="mb-[10px] text-[18px] font-normal uppercase leading-[1.3]">
          Free Wi-Fi
        </h4>
        <p className="mx-auto max-w-[225px] text-[14px] leading-[1.6]">
          We offer complimentary Wi-Fi throughout the hotel.
        </p>
      </div>

      {/* FITNESS FACILITY */}
      <div className="px-4 text-center">
        <div className="mb-[22px] flex h-[80px] items-center justify-center">
          <FaDumbbell className="text-[72px] text-[#cc0000]" />
        </div>
        <h4 className="mb-[10px] text-[18px] font-normal uppercase leading-[1.3]">
          Fitness Facility
        </h4>
        <p className="mx-auto max-w-[225px] text-[14px] leading-[1.6]">
          Keep up with your fitness regimen in our well equipped Fitness Centre featuring cardio and weight equipment. (Open 7am - 11pm daily)
        </p>
      </div>

      {/* ON-SITE PARKING */}
      <div className="px-4 text-center">
        <div className="mb-[22px] flex h-[80px] items-center justify-center">
          <FaParking className="text-[72px] text-[#cc0000]" />
        </div>
        <h4 className="mb-[10px] text-[18px] font-normal uppercase leading-[1.3]">
          On-site Parking
        </h4>
        <p className="mx-auto max-w-[225px] text-[14px] leading-[1.6]">
          Parking ($34 plus tax per night) is located behind the hotel. Limited spaces with a 5'8" height restriction. First come/first served.
        </p>
      </div>

      {/* DRY CLEANING */}
      <div className="px-4 text-center">
        <div className="mb-[22px] flex h-[80px] items-center justify-center">
          <FaTshirt className="text-[72px] text-[#cc0000]" />
        </div>
        <h4 className="mb-[10px] text-[18px] font-normal uppercase leading-[1.3]">
          Dry Cleaning
        </h4>
        <p className="mx-auto max-w-[225px] text-[14px] leading-[1.6]">
          Guests enjoy one-day dry cleaning service.
        </p>
      </div>

    </div>

    {/* FEATURE LIST (2 COLUMNS) */}
    <div className="mt-[50px] md:mt-[70px] grid grid-cols-1 gap-x-[36px] gap-y-[27px] md:grid-cols-2">

      <div className="flex min-h-[36px] items-center gap-[12px]">
        <FaRegClock className="shrink-0 text-[32px] text-[#cc0000]" />
        <span className="text-[13px] leading-[1.4]">24 Hour Reception Service</span>
      </div>

      <div className="flex min-h-[36px] items-center gap-[12px]">
        <FaLock className="shrink-0 text-[32px] text-[#cc0000]" />
        <span className="text-[13px] leading-[1.4]">In-Room Laptop Safes</span>
      </div>

      <div className="flex min-h-[36px] items-center gap-[12px]">
        <FaUmbrella className="shrink-0 text-[32px] text-[#cc0000]" />
        <span className="text-[13px] leading-[1.4]">Complimentary Umbrellas</span>
      </div>

      <div className="flex min-h-[36px] items-center gap-[12px]">
        <FaSnowflake className="shrink-0 text-[32px] text-[#cc0000]" />
        <span className="text-[13px] leading-[1.4]">Air Conditioning</span>
      </div>

      <div className="flex min-h-[36px] items-center gap-[12px]">
        <FaLanguage className="shrink-0 text-[32px] text-[#cc0000]" />
        <span className="text-[13px] leading-[1.4]">Multilingual Staff</span>
      </div>

      <div className="flex min-h-[36px] items-center gap-[12px]">
        <FaUsers className="shrink-0 text-[32px] text-[#cc0000]" />
        <span className="text-[13px] leading-[1.4]">Meeting and Event Room Facilities</span>
      </div>

      <div className="flex min-h-[36px] items-center gap-[12px]">
        <FaConciergeBell className="shrink-0 text-[32px] text-[#cc0000]" />
        <span className="text-[13px] leading-[1.4]">Concierge Services</span>
      </div>

      <div className="flex min-h-[36px] items-center gap-[12px]">
        <FaCube className="shrink-0 text-[32px] text-[#cc0000]" />
        <span className="text-[13px] leading-[1.4]">Ice Machine - Located in Lower Lobby</span>
      </div>

      <div className="flex min-h-[36px] items-center gap-[12px]">
        <FaPaw className="shrink-0 text-[32px] text-[#cc0000]" />
        <span className="text-[13px] leading-[1.4]">Pet Friendly - Furry Family Members Welcome ($)</span>
      </div>

      <div className="flex min-h-[36px] items-center gap-[12px]">
        <FaCoffee className="shrink-0 text-[32px] text-[#cc0000]" />
        <span className="text-[13px] leading-[1.4]">Complimentary In-Room Nespresso Coffee Brewing System</span>
      </div>

      <div className="flex min-h-[36px] items-center gap-[12px]">
        <FaSmokingBan className="shrink-0 text-[32px] text-[#cc0000]" />
        <span className="text-[13px] leading-[1.4]">100% Non-Smoking Guest Rooms and Public Spaces</span>
      </div>

      <div className="flex min-h-[36px] items-center gap-[12px]">
        <MdKitchen className="shrink-0 text-[32px] text-[#cc0000]" />
        <span className="text-[13px] leading-[1.4]">Complimentary In-Room Mini Fridges</span>
      </div>

    </div>

  </div>
</section>


{/* RED INFO SECTION */}
<section className="bg-[#cc0000] pt-[35px] pb-[40px] text-white">
  <div className="mx-auto w-full max-w-[960px] px-[16px]">

    <p className="text-[14px] leading-[24px]">
      With several downtown parks, not to mention the Rideau Canal and Ottawa River Pathway Loop, Ottawa is an extremely dog-friendly city. If you've brought your dog along to the hotel, we'll be happy to recommend things to do and plenty of friendly places that will welcome you and your pooch with open arms.
    </p>

    <p className="mt-[18px] text-[14px] leading-[24px]">
      While at the hotel, savor a culinary experience highlighted by carefully selected local, organic Canadian ingredients and imagined, creative chef-crafted dishes matched with Canadian wines, distilleries and craft ales.
    </p>

    <p className="mt-[18px] text-[14px] leading-[24px]">
      Alternatively, reserve one of our contemporary venues for your meeting, celebration, or private dinner. Keep up your fitness regimen in our well-equipped ARC Gym featuring modern cardio and weight equipment.
    </p>

    <p className="mt-[18px] text-[14px] leading-[24px]">
      If at any time you require assistance, our team will gladly assist you and can arrange your transportation, assist with dinner reservations, make recommendations for must-do activities in the city, and much more.
    </p>

  </div>
</section>

    </main>
  );
};

export default Amenities;