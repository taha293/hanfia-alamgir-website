import Image from 'next/image';

const Message = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 py-6 lg:py-14 lg:gap-10 xl:gap-20 bg-[#e6e6e6] shadow-md max-w-full mx-auto">
      {/* Image Section */}
      <div className="mb-4 md:mb-0 md:mr-6">
        <Image
          src="/logo2.png" 
          alt="Saeed Sabri"
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div className="text-center mt-2">
          <p className="text-sm lg:text-base text-gray-500">Director Hanfia Alamgir</p>
          <p className="font-bold text-lg lg:text-2xl text-gray-800">Saeed Sabri</p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="text-center md:text-left max-w-xl">
        {/* <p className="text-9xl text-primary font-serif text-[#58742c] mb-4">“</p> */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-6 lg:w-14 h-6 lg:h-14 text-[#58742c] mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
        <p className="text-gray-600 text-lg lg:text-2xl leading-relaxed">
          At Hanfia Alamgir, we believe in building a community rooted in the timeless values of Ilm Dosti, Qalam Dosti, Kitab Dosti, and Insaan Dosti. Since 1956, our mission has been to serve both deen and insaniyat.
        </p>
      </div>
    </div>
  );
}

export default Message