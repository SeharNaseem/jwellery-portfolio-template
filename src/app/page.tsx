// pages/index.js
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 bg-[#A29875]">
        <h1 className="text-4xl font-black text-white">MANZZARI</h1>
      </header>

      {/* Featured Section */}
      <section className="flex flex-col items-center justify-center px-8 py-10 md:flex-row md:px-16 space-x-20 > * + *">
        <div className="md:w-1/2 md:pr-8 my-10 px-20" >
          <h2 className="text-3xl font-bold text-gray-900">IMPECCABLE CRAFTSMANSHIP AND FINESS</h2>
          <p className="mt-4 text-[#787054] font-medium">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains
            form a part of our desirable collection.
          </p>
          <button className="px-6 py-2 mt-6 text-sm font-semibold text-white bg-[#A29875] rounded-full">
            Explore Now
          </button>
        </div>
        <div className="w-[100%] mt-8 md:w-1/2 md:mt-0">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/image/jwellery-girl.png"
              alt="Jewelry Model"
              width={330}
              height={430}
              className="rounded-lg ml-0 "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
