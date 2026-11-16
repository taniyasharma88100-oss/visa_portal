import { Link } from "react-router-dom";

const Meetings = () => {
  return (
    <main className="w-full overflow-hidden bg-white text-[#333333]">

{/* HERO IMAGE */}
<section
  className="w-full h-[260px] md:h-[667px] bg-[#2b2b2b] bg-cover bg-center"
  style={{ backgroundImage: "url('public/other-pages-img/img-5.jpg')" }}
/>


{/* MEETINGS & EVENTS INTRO */}
<section className="bg-[#f2f2f2] pt-[36px] pb-[50px] md:pt-[54px] md:pb-[96px]">
  <div className="mx-auto w-full max-w-[1070px] px-[13px]">

    <h1 className="text-[30px] md:text-[36px] font-light uppercase leading-[1.2] text-[#333333]">
      Meetings &amp; Events
    </h1>

    <p className="mt-[20px] max-w-[930px] text-[14px] leading-[24px] text-[#333333]">
      Host your next Ottawa event in a dynamic and engaging space that will elevate the meeting experience to another level. Ideally situated in the{" "}
      <a href="#downtown" className="font-medium text-[#cc0000] underline">
        heart of downtown Ottawa
      </a>
      , steps from Parliament Hill and the city's most prestigious businesses, ARC THE.HOTEL OTTAWA is a premier choice for corporate gatherings. Choose from 2,717 square feet of meeting space encompassing three distinctive venues. All feature a chic, contemporary design and floor-to-ceiling windows that fill the space with natural light. In addition to fully tailored event planning and catering, we offer I Prefer or Aeroplan points for meeting planners and individual guests.
    </p>

    <Link
      to="/contact"
      className="mt-[48px] inline-flex h-[40px] w-[218px] items-center justify-center bg-[#505050] hover:bg-[#333333] text-[13px] font-medium uppercase text-white transition-colors duration-300"
    >
      Request for Proposal
    </Link>

  </div>
</section>


{/* MEETING ROOM CARDS */}
<section className="mt-[40px] md:mt-[62px] pb-[60px]">
  <div className="mx-auto grid w-full max-w-[1070px] grid-cols-1 gap-[18px] px-[13px] md:grid-cols-3">

    {/* CARD 1 — THE O'CONNOR MEETING ROOM */}
    <div className="flex flex-col bg-[#f2f2f2]">
      <img
        src="public/other-pages-img/img-6.jpg"
        alt="The O'Connor Meeting Room"
        className="h-[255px] w-full object-cover bg-[#d9d9d9]"
      />
      <div className="flex flex-1 flex-col px-[11px] pt-[18px] pb-[20px]">
        <h3 className="text-[22px] font-normal leading-[1.3] text-[#222222]">
          The O'Connor Meeting Room
        </h3>
        <p className="mt-[8px] text-[13px] leading-[22px]">
          This room offers 792 sq ft of versatile meeting space, and the optimal set-up is a board room or U-shape style.
        </p>
        <Link
          to="/meetings/oconnor"
          className="mt-auto pt-[12px] w-fit text-[13px] font-bold text-[#cc0000] underline"
        >
          See meeting room detail →
        </Link>
      </div>
    </div>

    {/* CARD 2 — THE SLATER BOARDROOM */}
    <div className="flex flex-col bg-[#f2f2f2]">
      <img
        src="public/other-pages-img/img-7.jpg"
        alt="The Slater Boardroom"
        className="h-[255px] w-full object-cover bg-[#d9d9d9]"
      />
      <div className="flex flex-1 flex-col px-[11px] pt-[18px] pb-[20px]">
        <h3 className="text-[22px] font-normal leading-[1.3] text-[#222222]">
          The Slater Boardroom
        </h3>
        <p className="mt-[8px] text-[13px] leading-[22px]">
          This 275 sq ft boardroom can accommodate 18 people.
        </p>
        <Link
          to="/meetings/slater"
          className="mt-auto pt-[12px] w-fit text-[13px] font-bold text-[#cc0000] underline"
        >
          See meeting room detail →
        </Link>
      </div>
    </div>

    {/* CARD 3 — THE LIBRARY BOARDROOM */}
    <div className="flex flex-col bg-[#f2f2f2]">
      <img
        src="public/other-pages-img/img-8.jpg"
        alt="The Library Boardroom"
        className="h-[255px] w-full object-cover bg-[#d9d9d9]"
      />
      <div className="flex flex-1 flex-col px-[11px] pt-[18px] pb-[20px]">
        <h3 className="text-[22px] font-normal leading-[1.3] text-[#222222]">
          The Library Boardroom
        </h3>
        <p className="mt-[8px] text-[13px] leading-[22px]">
          This 450 sq ft boardroom can accommodate 16 people.
        </p>
        <Link
          to="/meetings/library"
          className="mt-auto pt-[12px] w-fit text-[13px] font-bold text-[#cc0000] underline"
        >
          See meeting room detail →
        </Link>
      </div>
    </div>

  </div>
</section>

    </main>
  );
};

export default Meetings;