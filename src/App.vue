<template>
  <div class="px-6 w-full h-screen flex items-center justify-center relative overflow-hidden bg-pale-blue">
    <img class="absolute top-0 left-0 w-full md:hidden" src="./assets/images/pattern-background-mobile.svg" alt="" />
    <img
      class="absolute top-0 left-0 w-full hidden md:block"
      src="./assets/images/pattern-background-desktop.svg"
      alt=""
    />
    <div class="relative w-full max-w-[450px] bg-white rounded-[20px] overflow-hidden shadow-card">
      <img class="w-full" src="./assets/images/illustration-hero.svg" alt="Order summary" />
      <div class="px-6 py-8 sm:px-12 spm:py-12">
        <h1 class="text-center font-black text-[22px] text-blue-dark sm:text-[28px]">Order Summary</h1>
        <p
          class="
            mt-4
            text-center text-[15px] text-desaturated-blue
            font-medium
            leading-[25px]
            sm:text-base sm:leading-[26px]
          "
        >
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </p>
        <div class="mt-6 p-4 flex items-center bg-pale-blue-light rounded-[11px] space-x-5">
          <div class="flex-shrink-0">
            <img class="w-12 h-12" src="./assets/images/icon-music.svg" alt="Play" />
          </div>
          <div class="text-[14px] flex-grow sm:text-base">
            <span class="block font-black text-blue-dark"> Annual Plan </span>
            <span class="block font-medium text-desaturated-blue"> $59.99/year </span>
          </div>
          <div>
            <a
              href="#"
              class="text-blue font-bold text-[13px] underline hover:no-underline hover:text-blue-light sm:text-sm"
              >Change</a
            >
          </div>
        </div>
        <button
          class="
            block
            w-full
            rounded-[11px]
            mt-6
            py-[15px]
            bg-blue
            text-white
            font-black
            text-[15px]
            leading-snug
            shadow-button
            hover:bg-blue-light
          "
        >
          Proceed to Payment
        </button>
        <a href="#" class="block text-center mt-6 text-desaturated-blue text-[15px] font-black hover:text-blue-dark"
          >Cancel Order</a
        >
      </div>
    </div>
  </div>
</template>
