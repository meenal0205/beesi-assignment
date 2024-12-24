import React from 'react';

const HowItWorks = () => {
    return (
        <div className="w-full py-10 flex flex-wrap justify-center items-center text-white font-semibold">
            {/* Step 1 */}
            <div className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#714FFF] flex flex-col justify-center items-center mt-10 md:mt-20 lg:mt-40 text-xs sm:text-sm lg:text-base sm:text-[10px]">
                <img src="goal 2.png" className="w-6 sm:w-8 mb-1" alt="" />
                <span>Step 1:</span>
                <span className="text-center">Set your goal</span>
            </div>

            <img src="Arrow 1.png" className="hidden sm:block sm:w-10 md:w-14 lg:w-20 mx-4" alt="" />

            {/* Step 2 */}
            <div className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#714FFF] flex flex-col justify-center items-center -mt-5 md:-mt-10 text-xs sm:text-sm lg:text-base sm:text-[10px]">
                <img src="add-friend 1.png" className="w-6 sm:w-8 mb-1" alt="" />
                <span>Step 2:</span>
                <span className="text-center">Create or Join Group</span>
            </div>

            <img src="Arrow 2.png" className="hidden sm:block sm:w-10 md:w-14 lg:w-20 mx-4 -mt-5 md:-mt-10" alt="" />

            {/* Step 3 */}
            <div className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#714FFF] flex flex-col justify-center items-center mt-5 md:mt-14 text-xs sm:text-sm lg:text-base sm:text-[10px]">
                <img src="pay-per-click 1.png" className="w-6 sm:w-8 mb-1" alt="" />
                <span>Step 3:</span>
                <span className="text-center">Pay amount on time</span>
            </div>

            <img src="Arrow 3.png" className="hidden sm:block sm:w-10 md:w-14 lg:w-20 mx-4 mt-5 md:mt-10" alt="" />

            {/* Step 4 */}
            <div className="rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-[#714FFF] flex flex-col justify-center items-center -mt-8 sm:-mt-6 md:-mt-12 text-xs  sm:text-[10px] lg:text-base ">
                <img src="gift-card 1.png" className="w-6 sm:w-8 mb-1" alt="" />
                <span>Step 4:</span>
                <span className="text-center text-wrap mb-2">Earn Rewards</span>
            </div>
        </div>
    );
};

export default HowItWorks;
