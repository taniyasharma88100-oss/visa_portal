const About = () => {
  return (
    <main className="w-full overflow-hidden bg-white text-[#333333]">

{/* HERO IMAGE */}
<section
  className="w-full h-[240px] md:h-[486px] bg-[#3a2a20] bg-cover bg-center"
  style={{ backgroundImage: "url('public/other-pages-img/img-5.jpg')" }}
/>


{/* ABOUT US INTRO */}
<section className="bg-[#f2f2f2] pt-[36px] pb-[40px] md:pt-[56px] md:pb-[68px]">
  <div className="mx-auto w-full max-w-[1070px] px-[13px]">

    <h1 className="text-[30px] md:text-[36px] font-light uppercase leading-[1.2] text-[#333333]">
      About Us
    </h1>

    <p className="mt-[20px] max-w-[925px] text-[14px] leading-[24px] text-[#333333]">
      To learn more about ARC THE.HOTEL OTTAWA, please refer to our Frequently Asked Questions below. If you don't find what you're looking for, contact us and a member of our staff will be happy to assist you.
    </p>

  </div>
</section>


{/* FAQ SECTION */}
<section className="pt-[40px] md:pt-[55px] pb-[60px]">
  <div className="mx-auto grid w-full max-w-[1070px] grid-cols-1 gap-x-[50px] px-[13px] md:grid-cols-2">

    {/* LEFT COLUMN */}
    <div className="flex flex-col gap-y-[42px]">

      <div>
        <h3 className="text-[14px] font-bold leading-[24px] text-[#222222]">
          What Is Your Check-In Time?
        </h3>
        <p className="mt-[8px] text-[13px] leading-[24px]">3 PM</p>
      </div>

      <div>
        <h3 className="text-[14px] font-bold leading-[24px] text-[#222222]">
          What Is Your Check-Out Time?
        </h3>
        <p className="mt-[8px] text-[13px] leading-[24px]">11 AM</p>
      </div>

      <div>
        <h3 className="text-[14px] font-bold leading-[24px] text-[#222222]">
          What Is The Cancellation Policy?
        </h3>
        <p className="mt-[8px] text-[13px] leading-[24px]">
          48 HRS (by 3 PM 2 days prior to arrival date)
        </p>
      </div>

      <div>
        <h3 className="text-[14px] font-bold leading-[24px] text-[#222222]">
          Is Parking Available?
        </h3>
        <p className="mt-[8px] text-[13px] leading-[24px]">
          We have limited underground parking spots available with in/out privileges - $34 + taxes per night. First come, first served.
        </p>
      </div>

      <div>
        <h3 className="text-[14px] font-bold leading-[24px] text-[#222222]">
          Is The Fitness Centre Open?
        </h3>
        <p className="mt-[8px] text-[13px] leading-[24px]">
          Yes, our fitness centre is open 24hrs.
        </p>
      </div>

      <div>
        <h3 className="text-[14px] font-bold leading-[24px] text-[#222222]">
          What Is Your Pet Policy?
        </h3>
        <p className="mt-[8px] text-[13px] leading-[24px]">
          A $50 non-refundable cleaning fee per pet will be applied for the stay.
        </p>
      </div>

    </div>

    {/* RIGHT COLUMN */}
    <div className="mt-[42px] flex flex-col gap-y-[42px] md:mt-0">

      <div>
        <h3 className="text-[14px] font-bold leading-[24px] text-[#222222]">
          What Is Your Payment Policy?
        </h3>
        <p className="mt-[8px] text-[13px] leading-[25px]">
          PRE-STAY: A valid credit card is required to secure your reservation (pre-authorization equal to the amount of your room charge + applicable tax will occur 24hrs before check-in to ensure your reservation is valid).
        </p>
        <p className="text-[13px] leading-[25px]">
          AT CHECK-IN: You will be required to provide a valid credit card along with photo identification. The credit card will be pre-authorized for incidentals and security deposit. We do not accept cash, debit, visa debit, pre-paid credit cards or cheque as a form of deposit.
        </p>
        <p className="text-[13px] leading-[25px]">
          AT CHECK-OUT: The authorization will hold the funds until check-out, at which time the amount incurred during your stay will be charged. Should you wish to pay with an alternate credit card, debit or cash, you may do so at check-out.
        </p>
      </div>

      <div>
        <h3 className="text-[14px] font-bold leading-[24px] text-[#222222]">
          Is The Restaurant Open?
        </h3>
        <p className="mt-[8px] text-[13px] leading-[24px]">
          Yes, we are open for breakfast, lunch &amp; dinner. Please visit our dining page for hours of operation.
        </p>
      </div>

      <div>
        <h3 className="text-[14px] font-bold leading-[24px] text-[#222222]">
          Do I Need A Reservation Before I Arrive At The Hotel?
        </h3>
        <p className="mt-[8px] text-[13px] leading-[24px]">
          No, a reservation is not required but recommended.
        </p>
      </div>

    </div>

  </div>
</section>

    </main>
  );
};

export default About;