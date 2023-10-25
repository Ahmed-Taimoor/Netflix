import React from "react";

const HeroSignup = () => {
  return (
    <div>
      <div
        className=" h-[100%] w-[100%] relative"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(main-background-image.jpg)`,
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className=" absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%] text-center text-white w-[100%]">
          <h1 className=" text-[46px] font-[600] ">
            Unlimited movies, TV <br />
            shows, and more.
          </h1>
          <p className="text-[22px]">Watch anywhere. Cancel anytime.</p>
          <p className="text-[20px] mt-3">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="text-[30px] mt-5 h-[60px] overflow-hidden flex justify-center  ">
            <input
              type="text"
              placeholder="Email Adress"
              className=" inline w-[60%] text-xl text-black email-placeholder"
            />

            <button
              htmlFor="enter-email"
              className=" bg-[#f40612] cursor-pointer inline px-3"
            >
              <span>Get Started</span>
              <span>
                <img src="learn-more.png" alt="" className="inline ml-3" />
              </span>
              {/* <img src="learn-more.png" alt="" className="w-[100%] h-[100%]" /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSignup;
