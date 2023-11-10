"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import ProductSection from "@/components/ProductSection";

const Products = () => {
  const categories = ["Chairs", "Tables", "Bed", "Workstation"];
  return (
    <div>
      <Header />
      <main>
        <section className='w-full'>
          <div className="relative w-full h-[40vh] min-h-[500px] bg-[url('../public/pexels-hero5.jpg')] bg-cover bg-center flex justify-center items-center gap-4 flex-col px-[4%]">
            <div className='w-full h-full absolute top-0 left-0 bg-secondary/50'></div>
            <h1 className='z-50 text-white text-5xl font-extrabold max-md:text-3xl'>
              Discover the Perfect Piece for Your Home!
            </h1>
            <p className='text-lg text-white/90 z-50'>
              Browse our collection now and redefine your living spaces with our
              exceptional furniture offerings.
            </p>
            <div className='relative w-full max-w-sm h-fit mt-8'>
              <Image
                width={20}
                height={20}
                src={"/Search.svg"}
                alt='search'
                className='absolute left-2 top-1/4'
              />
              <input
                type='text'
                placeholder='Search for minimalist chair'
                className='block text-sm outline-none transition-all bg-secondary/70 text-white font-semibold focus:border-gray-300 pl-10 pr-4 py-2.5 w-full rounded-md border border-gray-200'
              />
            </div>
          </div>
        </section>
        <h1 className='text-center font-bold text-secondary text-3xl mb-14 mt-8'>
          Explore Our Store
        </h1>
        {categories.map((val, i) => {
          return <ProductSection title={val} key={i} />;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Products;
