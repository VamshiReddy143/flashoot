const Reviews = () => {
  return (
    <div className="min-h-screen mt-20 sm:mt-24 md:mt-28 lg:mt-30 px-4 sm:px-6 md:px-8 lg:px-7 text-white max-w-7xl mx-auto">
      <div className="text-center mb-8 flex items-center justify-between sm:mb-10">
        <h1 className="text-[28px] uppercase sm:text-[32px] md:text-[36px] lg:text-[76px] font-[700] leading-tight sm:leading-snug lg:leading-normal">
          Success{" "}
          <span className="bg-gradient-to-r from-[#EF4444] from-[93%] to-[#3A0B0D] bg-clip-text text-transparent">
           stories.
          </span>
        </h1>
        <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-gray-400 mt-2">
          Join thousands of satisfied <br /> customers who trust Shot&Go
        </p>
      </div>

      <div className="mt-7 flex gap-5">
        <div className="p-7 w-[30%] flex flex-col justify-between bg-black/15 backdrop-blur-3xl border border-[#BA011F] rounded-2xl">
          <div className="flex items-center justify-between">
            <h1 className="text-[30px] font-bold">4.9/5</h1>
            <p className="w-[150px] text-[15px] font-semibold">
              We’ve delivered 1000+ Videos that drive real results.
            </p>
          </div>

          <div>
            <div className="flex flex-col gap-3">


{/* overlapon one other */}
              <div className="flex items-center">
                <img src="/images/user1.jpg" alt="" className="h-10 w-10 object-cover rounded-full border border-white z-[5]" />
                <img src="/images/user2.jpg" alt="" className="h-10 w-10 object-cover rounded-full border border-white -ml-3 z-[4]" />
                <img src="/images/user3.jpg" alt="" className="h-10 w-10 object-cover rounded-full border border-white -ml-3 z-[3]" />
                <img src="/images/user4.jpg" alt="" className="h-10 w-10 object-cover rounded-full border border-white -ml-3 z-[2]" />
                <img src="/images/user5.jpg" alt="" className="h-10 w-10 object-cover rounded-full border border-white -ml-3 z-[1]" />
              </div>


              <svg viewBox="0 0 250 16" id="svg9490493795">
                <g>
                  <path d="M 0 16 L 0 0 L 16 0 L 16 16 Z" fill="transparent" />
                  <path
                    d="M 14.643 7.177 L 11.831 9.604 L 12.688 13.234 C 12.735 13.431 12.723 13.637 12.652 13.827 C 12.582 14.018 12.457 14.183 12.294 14.302 C 12.13 14.421 11.934 14.489 11.732 14.497 C 11.529 14.505 11.329 14.453 11.156 14.347 L 8 12.405 L 4.842 14.347 C 4.669 14.453 4.469 14.504 4.267 14.496 C 4.065 14.487 3.87 14.419 3.706 14.3 C 3.543 14.181 3.418 14.016 3.348 13.826 C 3.278 13.637 3.266 13.43 3.312 13.234 L 4.172 9.604 L 1.36 7.177 C 1.207 7.045 1.096 6.871 1.042 6.676 C 0.987 6.482 0.992 6.275 1.054 6.083 C 1.116 5.89 1.233 5.721 1.391 5.595 C 1.549 5.469 1.741 5.392 1.942 5.374 L 5.63 5.077 L 7.052 1.634 C 7.129 1.447 7.261 1.286 7.429 1.173 C 7.597 1.06 7.796 1 7.998 1 C 8.201 1 8.399 1.06 8.568 1.173 C 8.736 1.286 8.867 1.447 8.944 1.634 L 10.366 5.077 L 14.054 5.374 C 14.255 5.391 14.448 5.468 14.606 5.593 C 14.765 5.719 14.883 5.889 14.945 6.082 C 15.008 6.274 15.012 6.481 14.958 6.676 C 14.903 6.871 14.793 7.046 14.639 7.178 Z"
                    fill="var(--token-c2c4dd37-49da-448f-83b8-7513387cf04e, rgb(255, 71, 38))"
                  />
                </g>
                <g transform="translate(20 1)">
                  <path
                    d="M 0 35 L 0 19 L 16 19 L 16 35 Z"
                    fill="transparent"
                  />
                  <path
                    d="M 14.643 6.177 L 11.831 8.604 L 12.688 12.234 C 12.735 12.431 12.723 12.637 12.653 12.827 C 12.582 13.018 12.458 13.183 12.294 13.302 C 12.13 13.421 11.934 13.489 11.732 13.497 C 11.529 13.505 11.329 13.453 11.156 13.347 L 8 11.405 L 4.842 13.347 C 4.669 13.453 4.469 13.504 4.267 13.496 C 4.065 13.487 3.87 13.419 3.706 13.3 C 3.543 13.181 3.418 13.016 3.348 12.826 C 3.278 12.637 3.265 12.43 3.313 12.234 L 4.172 8.604 L 1.36 6.177 C 1.207 6.045 1.096 5.871 1.042 5.676 C 0.988 5.482 0.992 5.275 1.054 5.083 C 1.116 4.89 1.233 4.721 1.391 4.595 C 1.549 4.469 1.741 4.392 1.942 4.374 L 5.63 4.077 L 7.052 0.634 C 7.13 0.447 7.261 0.286 7.429 0.173 C 7.597 0.06 7.796 0 7.998 0 C 8.201 0 8.399 0.06 8.568 0.173 C 8.736 0.286 8.867 0.447 8.944 0.634 L 10.366 4.077 L 14.054 4.374 C 14.255 4.391 14.448 4.468 14.606 4.593 C 14.765 4.719 14.883 4.889 14.946 5.082 C 15.008 5.274 15.012 5.481 14.958 5.676 C 14.903 5.871 14.793 6.046 14.639 6.178 Z"
                    fill="var(--token-c2c4dd37-49da-448f-83b8-7513387cf04e, rgb(255, 71, 38))"
                  />
                </g>
                <g transform="translate(40 1)">
                  <path
                    d="M 0 55 L 0 39 L 16 39 L 16 55 Z"
                    fill="transparent"
                  />
                  <path
                    d="M 14.643 6.177 L 11.831 8.604 L 12.688 12.234 C 12.735 12.431 12.723 12.637 12.653 12.827 C 12.582 13.018 12.458 13.183 12.294 13.302 C 12.13 13.421 11.934 13.489 11.732 13.497 C 11.529 13.505 11.329 13.453 11.156 13.347 L 8 11.405 L 4.842 13.347 C 4.669 13.453 4.469 13.504 4.267 13.496 C 4.065 13.487 3.87 13.419 3.706 13.3 C 3.543 13.181 3.418 13.016 3.348 12.826 C 3.278 12.637 3.266 12.43 3.313 12.234 L 4.172 8.604 L 1.36 6.177 C 1.207 6.045 1.096 5.871 1.042 5.676 C 0.987 5.482 0.992 5.275 1.054 5.083 C 1.116 4.89 1.233 4.721 1.391 4.595 C 1.549 4.469 1.741 4.392 1.943 4.374 L 5.63 4.077 L 7.053 0.634 C 7.13 0.447 7.261 0.286 7.429 0.173 C 7.597 0.06 7.796 0 7.998 0 C 8.201 0 8.399 0.06 8.568 0.173 C 8.736 0.286 8.867 0.447 8.944 0.634 L 10.366 4.077 L 14.054 4.374 C 14.255 4.391 14.448 4.468 14.606 4.593 C 14.765 4.719 14.883 4.889 14.946 5.082 C 15.008 5.274 15.012 5.481 14.958 5.676 C 14.903 5.871 14.793 6.046 14.639 6.178 Z"
                    fill="var(--token-c2c4dd37-49da-448f-83b8-7513387cf04e, rgb(255, 71, 38))"
                  />
                </g>
                <g transform="translate(60 1)">
                  <path
                    d="M 0 75 L 0 59 L 16 59 L 16 75 Z"
                    fill="transparent"
                  />
                  <path
                    d="M 14.643 6.177 L 11.831 8.604 L 12.688 12.234 C 12.735 12.431 12.723 12.637 12.653 12.827 C 12.582 13.017 12.457 13.183 12.294 13.302 C 12.13 13.421 11.934 13.489 11.732 13.497 C 11.529 13.505 11.329 13.453 11.156 13.347 L 8 11.405 L 4.842 13.347 C 4.669 13.453 4.469 13.504 4.267 13.496 C 4.065 13.487 3.87 13.419 3.706 13.3 C 3.543 13.181 3.418 13.016 3.348 12.826 C 3.278 12.637 3.266 12.43 3.313 12.234 L 4.172 8.604 L 1.36 6.177 C 1.207 6.045 1.096 5.871 1.042 5.676 C 0.987 5.482 0.992 5.275 1.054 5.083 C 1.116 4.89 1.233 4.721 1.391 4.595 C 1.549 4.469 1.741 4.392 1.943 4.374 L 5.63 4.077 L 7.052 0.634 C 7.129 0.447 7.26 0.286 7.429 0.173 C 7.597 0.06 7.796 0 7.998 0 C 8.201 0 8.399 0.06 8.568 0.173 C 8.736 0.286 8.867 0.447 8.944 0.634 L 10.366 4.077 L 14.054 4.374 C 14.255 4.391 14.448 4.468 14.606 4.593 C 14.765 4.719 14.883 4.889 14.945 5.082 C 15.008 5.274 15.012 5.481 14.958 5.676 C 14.903 5.871 14.793 6.046 14.639 6.178 Z"
                    fill="var(--token-c2c4dd37-49da-448f-83b8-7513387cf04e, rgb(255, 71, 38))"
                  />
                </g>
                <g transform="translate(80 1)">
                  <path
                    d="M 0 95 L 0 79 L 16 79 L 16 95 Z"
                    fill="transparent"
                  />
                  <path
                    d="M 14.643 6.177 L 11.831 8.604 L 12.688 12.234 C 12.735 12.431 12.723 12.637 12.653 12.827 C 12.582 13.017 12.457 13.183 12.294 13.302 C 12.13 13.421 11.934 13.489 11.732 13.497 C 11.529 13.505 11.329 13.453 11.156 13.347 L 8 11.405 L 4.842 13.347 C 4.669 13.452 4.469 13.504 4.267 13.496 C 4.065 13.487 3.87 13.419 3.706 13.3 C 3.543 13.181 3.418 13.016 3.348 12.826 C 3.278 12.637 3.266 12.43 3.313 12.234 L 4.172 8.604 L 1.36 6.177 C 1.207 6.045 1.096 5.871 1.042 5.676 C 0.987 5.482 0.992 5.275 1.054 5.083 C 1.116 4.89 1.233 4.721 1.391 4.595 C 1.549 4.469 1.741 4.392 1.942 4.374 L 5.63 4.077 L 7.052 0.634 C 7.129 0.447 7.26 0.286 7.429 0.173 C 7.597 0.06 7.796 0 7.998 0 C 8.201 0 8.399 0.06 8.568 0.173 C 8.736 0.286 8.867 0.447 8.944 0.634 L 10.366 4.077 L 14.054 4.374 C 14.255 4.391 14.448 4.468 14.606 4.593 C 14.765 4.719 14.883 4.889 14.945 5.082 C 15.008 5.274 15.012 5.481 14.958 5.676 C 14.903 5.871 14.793 6.046 14.639 6.178 Z"
                    fill="var(--token-c2c4dd37-49da-448f-83b8-7513387cf04e, rgb(255, 71, 38))"
                  />
                </g>
              </svg>


              <div>
                <p>Trusted by 500+ People</p>
              <p>They hit their targets — you’re next.</p>
              </div>
            </div>
            <button className="bg-white p-3 mt-3 rounded-full w-full text-red-700 font-semibold">
              Leave a review
            </button>
          </div>
        </div>
        <div className="flex gap-5 w-[70%]">
          <div className="flex flex-col gap-5">
            <div className="border bg-gradient-to-r from-[#3F090C] to-[#280307] border-[#BA011F] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-4 flex flex-col">
              <div className="p-3 bg-white rounded-xl text-gray-800">
                <p className="flex items-center gap-2 text-gray-500 uppercase text-[12px]">4.9 <img src="/images/ss.svg" alt="" className="h-3" /> rating</p>
                <p className="pt-5 font-semibold ">
                  "shot&go truly changed the game! Unlike traditional videographers, they delivered stunning reels instantly after my event."
                </p>
              </div>

             <div className="pt-7">
                <img src="" alt="" />
                <div className="flex items-center gap-4">
                  <img src="/images/user1.jpg" alt="" className="h-10 w-10 object-cover rounded-full " />
                  <p className="font-semibold">Jared Kim</p>
              
                </div>
              </div>
            </div>
            <div className="border bg-gradient-to-r from-[#3F090C] to-[#280307] border-[#BA011F] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-4 flex flex-col">
              <div className="p-3 bg-white rounded-xl text-gray-800">
                 <p className="flex items-center gap-2 text-gray-500 uppercase text-[12px]">4.9 <img src="/images/ss.svg" alt="" className="h-3" /> rating</p>
                <p className="pt-5 font-semibold">
                  "Seamless booking, professional creators, and stunning reels! shot&go made capturing memories effortless and fun."
                </p>
              </div>

               <div className="pt-7">
                <img src="" alt="" />
                <div className="flex items-center gap-4">
                  <img src="/images/user2.jpg" alt="" className="h-10 w-10 object-cover rounded-full " />
                  <p className="font-semibold">Rahul</p>
              
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="border bg-gradient-to-r from-[#3F090C] to-[#280307] border-[#BA011F] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-4 flex flex-col">
              <div className="p-3 bg-white rounded-xl text-gray-800">
                  <p className="flex items-center gap-2 text-gray-500 uppercase text-[12px]">4.9 <img src="/images/ss.svg" alt="" className="h-3" /> rating</p>
                <p className="pt-5 font-semibold">
                  "shot&go is a game-changer! Quick booking, talented reel makers, and amazing event coverage. Loved the experience!"
                </p>
              </div>

             <div className="pt-7">
                <img src="" alt="" />
                <div className="flex items-center gap-4">
                  <img src="/images/user3.jpg" alt="" className="h-10 w-10 object-cover rounded-full " />
                  <p className="font-semibold">Priya</p>
              
                </div>
              </div>
            </div>
            <div className="border bg-gradient-to-r from-[#3F090C] to-[#280307] border-[#BA011F] rounded-[16px] sm:rounded-[18px] md:rounded-[20px] p-6 sm:p-8 md:p-10 lg:p-4 flex flex-col">
              <div className="p-3 bg-white rounded-xl text-gray-800">
                  <p className="flex items-center gap-2 text-gray-500 uppercase text-[12px]">4.9 <img src="/images/ss.svg" alt="" className="h-3" /> rating</p>
                <p className="pt-5 font-semibold">
                  "shot&go made booking a reel maker super easy! Great service, skilled creators, and stunning reels. Highly recommend!"
                </p>
              </div>

              <div className="pt-7">
                <img src="" alt="" />
                <div className="flex items-center gap-4">
                  <img src="/images/user4.jpg" alt="" className="h-10 w-10 object-cover rounded-full " />
                  <p className="font-semibold">Alex</p>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
