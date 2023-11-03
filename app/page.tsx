import Button from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { categories, features } from "@/appData/home";

export default function Home() {
  return (
    <div>
      <Header />
      <main className=''>
        <section className="h-[60vh] max-lg:h-[50vh] lg:h-[80vh] lg:bg-[url('../public/hero.png')]  max-lg:bg-[url('../public/mobile-hero.png')] bg-no-repeat bg-cover px-[4%] flex justify-start items-center ">
          <div className='text-white max-w-2xl flex flex-col items-start gap-4'>
            <h1 className='text-5xl max-lg:text-3xl font-bold'>
              Discover Stylish Furniture to Transform Your Space!
            </h1>
            <p className='text-xl max-lg:text-lg'>
              Find a bright ideal to suit your taste with our great selection of
              suspension, wall, floor and table lights
            </p>
            <Button bgColor='primary' className='w-52 h-14'>
              <Link href={"/products"}>Shop Now</Link>
            </Button>
          </div>
        </section>

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
        <div className='mt-12 flex justify-evenly items-center gap-10 px-[4%] max-lg:hidden'>
          {
            features.map(val=>{
              return(
                <div className="flex justify-center items-center gap-4">
                  <Image width={40} height={40} src={val.image} alt={val.title} />
                  <div>
                    <h2 className="text-lg font-semibold">{val.title}</h2>
                    <p className="text-gray-500">{val.desc}</p>
                  </div>
                  </div>
              )
            })
          }
        </div>

     {/* Top Trending */}
        <div className="text-center mt-20 max-lg:mt-10 px-[4%]">
          <h1 className="text-5xl max-lg:text-3xl font-bold text-secondary ">Top Trending</h1>
          <p className="text-xl max-lg:text-lg text-gray-600 font-medium max-w-2xl mt-2 mx-auto">Find a bright ideal to suit your great selection of suspension, wall, floor and table lights.</p>
          <div className="h-1 bg-primary w-28 mx-auto my-4 rounded-md"/>

        </div>
      </main>
    </div>
  );
}
