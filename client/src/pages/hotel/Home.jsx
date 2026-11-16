import { Link } from "react-router-dom";
import { FaWifi, FaDumbbell, FaParking, FaTshirt, FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Home = () => {
  return (
    <main className="w-full overflow-hidden bg-white text-[#333333]">

{/* ARC HOTEL HERO SECTION */}
<section
  className="relative w-full min-h-[620px] h-screen max-h-[520px] overflow-hidden bg-black"
  style={{
    backgroundImage: "url('public/home-img/img-1.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  }}
>
  {/* DARK IMAGE OVERLAY */}
  <div className="absolute inset-0 bg-black/35" />

  {/* TOP DARK GRADIENT */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/20" />

  {/* HERO CONTENT */}
  <div className="relative z-10 max-w-[1420px] mx-auto h-full px-6 md:px-10 lg:px-12 flex items-center">

    <div className="w-full pt-28 md:pt-32">

      <h1 className="text-white font-normal text-[34px] sm:text-[36px] md:text-[40px] lg:text-[44px] leading-[1.25] tracking-normal">
        Enjoy a Comfortable Rest
      </h1>

      <a
        href="#rooms"
        className="inline-flex items-center justify-center mt-7 bg-[#d40000] hover:bg-[#b00000] text-white px-8 py-4 text-base font-medium transition duration-300"
      >
        SEE ROOM OPTIONS
      </a>

    </div>

  </div>
</section>


{/* WELCOME SECTION */}
<section className="relative bg-[#f3f3f3] py-16 md:py-20 lg:py-16 overflow-hidden">
  <div className="max-w-[1350px] mx-auto px-6 md:px-10 lg:px-12">

    <h2 className="text-[32px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-normal text-[#292929] leading-tight mb-7">
      WELCOME TO ARC THE.HOTEL OTTAWA
    </h2>

    <h3 className="text-[23px] sm:text-[27px] md:text-[32px] lg:text-[38px] font-normal text-[#222222] leading-tight mb-8">
      Experience Warmth & Comfort in Downtown Ottawa
    </h3>

    <p className="text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#333333] leading-[1.7] max-w-[1250px]">
      Amidst the best that downtown Ottawa has to offer, you will find ARC
      THE.HOTEL OTTAWA. Steps from Parliament Hill and the city’s{" "}
      <a
        href="#attractions"
        className="text-[#d00000] underline font-medium"
      >
        most popular attractions
      </a>
      , our hotel offers an oasis of calm and a retreat from urban bustle.
      We’re proud to be downtown Ottawa’s first design hotel, with a
      minimalist aesthetic crafted by renowned designers Yabu Pushelberg
      and a maximalist approach to warm, personalized hospitality.
    </p>

  </div>
</section>


{/* A TRUE URBAN RETREAT SECTION */}
<section className="bg-white py-12 md:py-16 lg:py-[50px]">
  <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-10">

    {/* SECTION INTRO */}
    <div className="mb-16 md:mb-20 lg:mb-[115px]">

      <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] font-normal text-[#222222] mb-8">
        A True Urban Retreat
      </h2>

      <p className="text-[15px] md:text-[17px] lg:text-[18px] leading-[1.7] text-[#292929] max-w-[1200px] mb-8">
        Comfort and warmth combine to create an oasis of relaxation in the
        heart of Canada’s capital. Step inside your room and be welcomed
        into a contemporary and chic space for relaxing and recharging.
      </p>

      <Link
        to="/rooms"
        className="inline-flex items-center justify-center bg-[#505050] hover:bg-[#333333] text-white text-[15px] md:text-[16px] font-normal px-10 h-[53px] min-w-[229px] transition-colors duration-300"
      >
        SEE ALL ROOMS
      </Link>

    </div>

    {/* ROOM CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[22px]">

      {/* ROOM 1 */}
      <div className="bg-[#f2f2f2] flex flex-col">

        <img
          src="public/home-img/img-2.jpg"
          alt="Intimate Queen Room"
          className="w-full aspect-[1.76/1] object-cover"
        />

        <div className="p-4 md:p-[15px] flex flex-col flex-1">

          <h3 className="text-[23px] md:text-[26px] font-normal text-[#222222] mb-3">
            Intimate Queen Room
          </h3>

          <p className="text-[15px] md:text-[17px] leading-[1.7] text-[#292929] mb-4">
            Contemporary and intimate, these rooms create the perfect
            ambiance for rest and relaxation. Suitable for either one
            or two guests, they are the perfect home away from home for
            a quick business or leisure trip.
          </p>

          <Link
            to="/rooms"
            className="text-[#d00000] underline text-[16px] md:text-[17px] font-medium mb-12"
          >
            See room details →
          </Link>

          <Link
            to="/contact"
            className="mt-auto flex items-center justify-center bg-[#d00000] hover:bg-[#a90000] text-white text-[15px] h-[48px] w-full max-w-[225px] transition-colors duration-300"
          >
            BOOK NOW
          </Link>

        </div>
      </div>

      {/* ROOM 2 */}
      <div className="bg-[#f2f2f2] flex flex-col">

        <img
          src="public/home-img/img-3.jpg"
          alt="Majestic King Room"
          className="w-full aspect-[1.76/1] object-cover"
        />

        <div className="p-4 md:p-[15px] flex flex-col flex-1">

          <h3 className="text-[23px] md:text-[26px] font-normal text-[#222222] mb-3">
            Majestic King Room
          </h3>

          <p className="text-[15px] md:text-[17px] leading-[1.7] text-[#292929] mb-4">
            Our contemporary Majestic King Rooms suitable for 1-2
            travellers feature a king bed so you can stretch out for
            a great night stay.
          </p>

          <Link
            to="/rooms"
            className="text-[#d00000] underline text-[16px] md:text-[17px] font-medium mb-12"
          >
            See room details →
          </Link>

          <Link
            to="/contact"
            className="mt-auto flex items-center justify-center bg-[#d00000] hover:bg-[#a90000] text-white text-[15px] h-[48px] w-full max-w-[225px] transition-colors duration-300"
          >
            BOOK NOW
          </Link>

        </div>
      </div>

      {/* ROOM 3 */}
      <div className="bg-[#f2f2f2] flex flex-col">

        <img
          src="public/home-img/img-4.jpg"
          alt="Premier King Room"
          className="w-full aspect-[1.76/1] object-cover"
        />

        <div className="p-4 md:p-[15px] flex flex-col flex-1">

          <h3 className="text-[23px] md:text-[26px] font-normal text-[#222222] mb-3">
            Premier King Room
          </h3>

          <p className="text-[15px] md:text-[17px] leading-[1.7] text-[#292929] mb-4">
            Unwind after a long day in our Premier King Room, featuring
            large windows with plenty of natural light giving you a
            glimpse of the downtown skyscraper atmosphere.
          </p>

          <Link
            to="/rooms"
            className="text-[#d00000] underline text-[16px] md:text-[17px] font-medium mb-12"
          >
            See room details →
          </Link>

          <Link
            to="/contact"
            className="mt-auto flex items-center justify-center bg-[#d00000] hover:bg-[#a90000] text-white text-[15px] h-[48px] w-full max-w-[225px] transition-colors duration-300"
          >
            BOOK NOW
          </Link>

        </div>
      </div>

    </div>
  </div>
</section>


{/* RED INTRO SECTION */}
<section className="bg-[#cc0000] text-white pt-[65px] pb-[60px]">
  <div className="mx-auto w-full max-w-[1070px] px-6 xl:px-0">
    <p className="max-w-[950px] text-[14px] leading-[1.7]">
      Ottawa, Canada's multi-layered, multi-lingual capital, is a dynamic, convivial city framed by grand Gothic Parliament buildings, the scenic Rideau Canal, green parks and gardens, and wide-open public spaces. It's a place where the locals embrace cold weather by skating to school, work and social events on the Rideau Canal Skateway. During the first few weeks of February, the Winterlude Festival glistens city-wide with ice sculptures, lighting displays, artistic and culinary programs, a giant playground known as Snowflake Kingdom, and more. In the summer, the downtown area is alive with tulips, while fall drapes a fiery blanket of reds and yellows across the treetops.
    </p>
  </div>
</section>


{/* ARC RESTAURANT & LOUNGE SECTION */}
<section className="flex flex-col md:flex-row bg-[#cc0000] text-white md:min-h-[545px]">

  {/* IMAGE */}
  <div
    className="relative w-full md:w-1/2 md:max-w-[721px] min-h-[300px] md:min-h-[545px] bg-[#3a2a20] bg-cover bg-center"
    style={{ backgroundImage: "url('public/home-img/img-5.jpg')" }}
  >
    <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 flex items-center gap-3 text-[14px]">
      <button aria-label="Previous"><FaAngleLeft /></button>
      <span>1 / 3</span>
      <button aria-label="Next"><FaAngleRight /></button>
    </div>
  </div>

  {/* CONTENT */}
  <div className="flex flex-1 flex-col justify-center px-6 py-10 md:py-0 md:pl-[46px] md:pr-10">

    <h2 className="text-[32px] font-normal leading-[1.2] mb-7">
      ARC Restaurant &amp; Lounge
    </h2>

    <p className="max-w-[640px] text-[14px] leading-[1.7] mb-10">
      The hotel's social heartbeat, our restaurant and lounge serves organic, locally sourced cuisine complemented by the best drink offerings from Canadian breweries, distilleries, and wineries.
    </p>

    <div>
      <Link
        to="/dining"
        className="inline-flex h-10 w-[212px] items-center justify-center border border-[#ddd] bg-[#f2f2f2] px-6 text-[14px] uppercase tracking-[0.2px] text-[#555]"
      >
        View Dining Options
      </Link>
    </div>

  </div>
</section>

{/* RED STRIP UNDER RESTAURANT */}
<div className="h-[60px] bg-[#cc0000]" />


{/* OUR HOTEL OFFERS SECTION */}
<section className="pt-[60px] pb-[60px] bg-white">
  <div className="mx-auto w-full max-w-[1070px] px-6 xl:px-0">

    <h2 className="text-[32px] font-normal leading-[1.2] mb-[30px]">
      Our Hotel Offers
    </h2>

    <div className="flex flex-col md:flex-row bg-[#f2f2f2] md:h-[398px]">

      {/* IMAGE */}
      <div
        className="w-full md:w-1/2 min-h-[300px] bg-[#6b7a5a] bg-cover bg-center"
        style={{ backgroundImage: "url('public/home-img/img-6.png')" }}
      />

      {/* CONTENT */}
      <div className="relative flex-1 px-6 pt-[30px] pb-[70px] md:px-[38px] md:pt-[44px] md:pb-0">

        <h3 className="text-[24px] font-normal leading-[1.3] mb-[22px]">
          Roadtrip Package
        </h3>

        <p className="text-[14px] mb-[22px]">
          Start the car and come explore beautiful Ottawa!
        </p>

        <Link
          to="/offers"
          className="inline-block text-[14px] text-[#cc0000] underline mb-9"
        >
          See details →
        </Link>

        <br />

        <Link
          to="/contact"
          className="inline-flex h-10 w-[177px] items-center justify-center bg-[#cc0000] hover:bg-[#a90000] px-6 text-[14px] uppercase tracking-[0.2px] text-white transition-colors duration-300"
        >
          Book Now
        </Link>

        <div className="absolute right-[38px] bottom-[30px] flex items-center gap-3 text-[14px]">
          <button aria-label="Previous"><FaAngleLeft /></button>
          <span>1 / 6</span>
          <button aria-label="Next"><FaAngleRight /></button>
        </div>

      </div>
    </div>

  </div>
</section>


{/* AMENITIES SECTION */}
<section className="bg-[#f2f2f2] pt-[55px] pb-[60px]">
  <div className="mx-auto w-full max-w-[1070px] px-6 xl:px-0">

    <h2 className="text-[32px] font-normal leading-[1.2] mb-[30px]">
      Amenities
    </h2>

    <p className="max-w-[950px] text-[14px] leading-[1.7] mb-[70px]">
      Hosting a meeting or special event? Take full advantage of three modern, light-filled venues, full catering, and event planning. Additional amenities include a fitness center, free Wi-Fi, and onsite parking.
    </p>

    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">

      {/* FREE WI-FI */}
      <div className="px-6 text-center">
        <div className="flex h-[80px] items-center justify-center mb-[22px]">
          <FaWifi className="text-[72px] text-[#cc0000]" />
        </div>
        <h4 className="text-[18px] font-normal uppercase leading-[1.3] mb-[10px]">
          Free Wi-Fi
        </h4>
        <p className="mx-auto max-w-[225px] text-[14px] leading-[1.6]">
          We offer complimentary Wi-Fi throughout the hotel.
        </p>
      </div>

      {/* FITNESS FACILITY */}
      <div className="px-6 text-center">
        <div className="flex h-[80px] items-center justify-center mb-[22px]">
          <FaDumbbell className="text-[72px] text-[#cc0000]" />
        </div>
        <h4 className="text-[18px] font-normal uppercase leading-[1.3] mb-[10px]">
          Fitness Facility
        </h4>
        <p className="mx-auto max-w-[225px] text-[14px] leading-[1.6]">
          Keep up with your fitness regimen in our well equipped Fitness Centre featuring cardio and weight equipment. (Open 7am - 11pm daily)
        </p>
      </div>

      {/* ON-SITE PARKING */}
      <div className="px-6 text-center">
        <div className="flex h-[80px] items-center justify-center mb-[22px]">
          <FaParking className="text-[72px] text-[#cc0000]" />
        </div>
        <h4 className="text-[18px] font-normal uppercase leading-[1.3] mb-[10px]">
          On-site Parking
        </h4>
        <p className="mx-auto max-w-[225px] text-[14px] leading-[1.6]">
          Parking ($34 plus tax per night) is located behind the hotel. Limited spaces with a 5'8" height restriction. First come/first served.
        </p>
      </div>

      {/* DRY CLEANING */}
      <div className="px-6 text-center">
        <div className="flex h-[80px] items-center justify-center mb-[22px]">
          <FaTshirt className="text-[72px] text-[#cc0000]" />
        </div>
        <h4 className="text-[18px] font-normal uppercase leading-[1.3] mb-[10px]">
          Dry Cleaning
        </h4>
        <p className="mx-auto max-w-[225px] text-[14px] leading-[1.6]">
          Guests enjoy one-day dry cleaning service.
        </p>
      </div>

    </div>
  </div>
</section>

    </main>
  );
};

export default Home;