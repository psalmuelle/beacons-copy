"use client";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { categories, features } from "@/appData/home";
import ProductCard from "@/components/ProductCard";
import products from "@/appData/products";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main className=''>
        <motion.section
          className="h-[60vh] min-h-[500px] max-lg:h-[50vh] lg:h-[80vh] lg:bg-[url('../public/hero.png')]  max-lg:bg-[url('../public/mobile-hero.png')] bg-no-repeat bg-cover px-[4%] flex justify-start items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 0.6, 0.8, 1] }}
          transition={{ duration: 1 }}>
          <div className='text-white max-w-2xl flex flex-col items-start gap-4'>
            <h1 className='text-6xl max-md:text-[40px] font-bold'>
              Discover{"  "}
              <motion.span className='inline-flex py-1.5 h-[76px] max-md:h-14 overflow-hidden'>
                <motion.div
                  animate={{ y: [0, -74, -74, -152, -152] }}
                  transition={{
                    delay: 0.1,
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 1,
                  }}
                  className='flex flex-col gap-4 max-md:gap-9'>
                  <div>Stylish</div>
                  <div>Classy</div>
                  <div>Elegant</div>
                </motion.div>
              </motion.span>{" "}
              Furniture to Transform Your Space!
            </h1>
            <p className='text-xl max-lg:text-lg'>
              Find a bright ideal to suit your taste with our great selection of
              suspension, wall, floor and table lights
            </p>
            <Button bgColor='primary' className='w-52 h-14'>
              <Link href={"/products"}>Shop Now</Link>
            </Button>
          </div>
        </motion.section>

        {/* Categories */}
        <div className='flex justify-center items-center gap-14 max-lg:gap-3 w-2/3 max-lg:w-full h-28 bg-white mx-auto lg:-mt-14 lg:shadow-lg rounded-lg'>
          {categories.map((val) => {
            return (
              <div
                key={val.id}
                className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
                <div className='p-3 rounded-xl bg-gray-50'>
                  <Image
                    height={36}
                    width={36}
                    src={val.image}
                    alt={val.name}
                    className='max-lg:w-7'
                  />
                </div>
                <p className='text-xs font-semibold'>{val.name}</p>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <section className='mt-12 flex justify-evenly items-center gap-10 px-[4%] max-lg:hidden'>
          {features.map((val,i) => {
            return (
              <div className='flex justify-center items-center gap-4' key={i}>
                <Image width={40} height={40} src={val.image} alt={val.title} />
                <div>
                  <h2 className='text-lg font-semibold'>{val.title}</h2>
                  <p className='text-gray-500'>{val.desc}</p>
                </div>
              </div>
            );
          })}
        </section>

        {/* Top Trending */}
        <section className='text-center mt-20 max-lg:mt-10 px-[4%]'>
          <h1 className='text-5xl max-lg:text-3xl font-bold text-secondary '>
            Top Trending
          </h1>
          <p className='text-xl max-lg:text-lg text-gray-600 font-medium max-w-2xl mt-2 mx-auto'>
            Find a bright ideal to suit your great selection of suspension,
            wall, floor and table lights.
          </p>
          <div className='h-1 bg-primary w-28 mx-auto my-4 rounded-md' />

          {/* Products */}
          <div className='w-full overflow-x-auto overflow-y-hidden scroll-smooth'>
            <div className='w-fit min-w-min grid grid-flow-col items-center gap-4  my-4 py-4 px-2 mx-auto'>
              {products.map((val, i) => {
                return i <= 3 && <ProductCard key={val.id} {...val} />;
              })}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className='mx-auto w-[186px] h-[260px] bg-secondary rounded-lg text-white flex justify-center items-center cursor-pointer hover:shadow-md shadow-secondary/60 transition'>
                See All &rarr;
              </motion.div>
            </div>
          </div>
        </section>

        <section className='px-[4%] bg-gradient-to-br from-[#373636]/50 via-[#E68314]/30 to-[#EFE5D5] flex flex-wrap-reverse justify-center items-center gap-8 my-20 py-10'>
          <div className='max-w-xl flex flex-col gap-2 justify-start items-start'>
            <h1 className='text-primary text-4xl font-bold'>
              Customize your furniture and build your space with minifurs.
            </h1>
            <p className='text-[#373636] font-medium max-w-md'>
              Allows you to view our showrooms containing our latest furniture
              collections
            </p>
            <Link className="mt-4" href={'/create-furniture'}>
            <Button bgColor='secondary' className='h-14 w-48'>
              Coming soon...
            </Button>
            </Link>
          </div>
          <Image width={545} height={356} src={"/egg-chair.png"} alt='' />
        </section>

        <section className='px-[4%]'>
          <div className='flex items-center justify-center flex-wrap gap-8'>
            <h1 className='text-[#4D533C] font-extrabold text-3xl w-80'>
              We Have Some Awesome Products
            </h1>

            <p className='text-gray-500 max-w-2xl'>
              Welcome to our furniture haven! Explore our awesome products
              designed to elevate your home. Discover stylish sofas, elegant
              dining sets, cozy beds, and smart storage solutions. Transform
              your space with our curated collection!
            </p>
          </div>
          <div className='w-full overflow-x-auto overflow-y-hidden scroll-smooth my-8'>
            <div className='w-fit min-w-min grid grid-flow-col items-center gap-4  my-4 py-4 px-2 mx-auto'>
              {products.map((val, i) => {
                return i <= 3 && <ProductCard key={val.id} {...val} />;
              })}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className='mx-auto w-[186px] h-[260px] bg-secondary rounded-lg text-white flex justify-center items-center cursor-pointer hover:shadow-md shadow-secondary/60 transition'>
                See All &rarr;
              </motion.div>
            </div>
          </div>
        </section>
        <section className=' w-4/5 bg-[#FAFAFA] py-16 px-[4%] drop-shadow-md -mb-16 mt-20'>
          <h1 className='text-3xl max-lg:text-2xl font-bold text-secondary max-w-sm'>
            Let's make your space amazing together
          </h1>
          <p className='mt-6 underline text-secondary/70 hover:text-secondary/50 cursor-pointer w-fit'>
            REACH OUT TO US NOW
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
