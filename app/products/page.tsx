"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import products from "@/appData/products";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Products = () => {
  return (
    <div>
      <Header />
      <main>
        <section className='w-full'>
          {/* <Image height={} width={} src={} alt=""/> */}
          <Carousel
            autoPlay={true}
            showArrows={false}
            showStatus={false}
            swipeable={true}>
            <div className="w-full h-[40vh] min-h-[500px] bg-[url('../public/pexels-hero1.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-[40vh] min-h-[500px] bg-[url('../public/pexels-hero2.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-[40vh] min-h-[500px] bg-[url('../public/pexels-hero3.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-[40vh] min-h-[500px] bg-[url('../public/pexels-hero4.jpg')] bg-cover bg-center"></div>
            <div className="w-full h-[40vh] min-h-[500px] bg-[url('../public/pexels-hero5.jpg')] bg-cover bg-center"></div>
          </Carousel>
        </section>
        <h1 className='text-center font-bold text-secondary text-3xl'>
          Explore Our Store
        </h1>
        <section className='max-w-6xl bg-black/5 my-8 mx-auto rounded'>
          <div className='bg-secondary text-white rounded-t flex justify-between items-center py-4 px-4'>
            <h1 className='font-bold text-lg'>Chairs</h1>
            <Link href={"products/chairs"} className='hover:underline'>
              See All
            </Link>
          </div>

          <div className='w-full'>
            <div className='w-fit min-w-min flex justify-center items-center flex-wrap gap-4  my-4 py-4 px-2 mx-auto'>
              {products.map((val) => {
                return <ProductCard key={val.id} {...val} />;
              })}
            </div>
          </div>
        </section>

        <section className='max-w-6xl bg-black/5 mb-8 mx-auto rounded'>
          <div className='bg-secondary text-white rounded-t flex justify-between items-center py-4 px-4'>
            <h1 className='font-bold text-lg'>Table</h1>
            <Link href={"products/table"} className='hover:underline'>
              See All
            </Link>
          </div>

          <div className='w-full'>
            <div className='w-fit min-w-min flex justify-center items-center flex-wrap gap-4  my-4 py-4 px-2 mx-auto'>
              {products.map((val) => {
                return <ProductCard key={val.id} {...val} />;
              })}
            </div>
          </div>
        </section>

        <section className='max-w-6xl bg-black/5 mb-8 mx-auto rounded'>
          <div className='bg-secondary text-white rounded-t flex justify-between items-center py-4 px-4'>
            <h1 className='font-bold text-lg'>Bed</h1>
            <Link href={"products/bed"} className='hover:underline'>
              See All
            </Link>
          </div>

          <div className='w-full'>
            <div className='w-fit min-w-min flex max-md:grid grid-cols-2 justify-center items-center flex-wrap gap-4  my-4 py-4 mx-auto'>
              {products.map((val) => {
                return <ProductCard key={val.id} {...val} />;
              })}
            </div>
          </div>
        </section>

        <section className='max-w-6xl bg-black/5 mb-8 mx-auto rounded'>
          <div className='bg-secondary text-white rounded-t flex justify-between items-center py-4 px-4'>
            <h1 className='font-bold text-lg'>Workstation</h1>
            <Link href={"products/workstation"} className='hover:underline'>
              See All
            </Link>
          </div>

          <div className='w-full'>
            <div className='w-fit min-w-min flex justify-center items-center flex-wrap gap-4  my-4 py-4 px-2 mx-auto'>
              {products.map((val) => {
                return <ProductCard key={val.id} {...val} />;
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
