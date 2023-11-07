import Header from "@/components/Header";
import Image from "next/image";
import { categories } from "@/appData/home";

const CustomizeFurniture = () => {
  return (
    <div className='w-full'>
      <Header />
      <div className="bg-[url('../public/title-bg.png')] py-4 text-4xl max-lg:text-3xl font-extrabold text-center text-white">
        Customize your furniture and build your space
      </div>

      <div className='flex h-screen max-lg:flex-col'>
        <section className='w-[27%] max-lg:w-full min-w-[300px] h-full shadow-xl px-[2%] max-lg:flex items-center flex-col'>
          <div className='space-y-4 pt-10'>
            <p className='text-[#4D533C]'>Select Background</p>
            <div className='w-full h-14 bg-[#F4F4F4] rounded-xl max-lg:w-[80vw]'></div>
          </div>
          <div className='flex flex-wrap justify-start gap-4 mt-6 max-lg:justify-center mb-2'>
            {categories.map((val) => {
              return (
                <div
                  key={val.id}
                  className='flex flex-col justify-center items-center gap-2 cursor-pointer'>
                  <div className='w-24 h-24 p-1 rounded-xl bg-[#F2F0E0] flex justify-center items-center flex-col gap-3'>
                    <Image
                      height={36}
                      width={36}
                      src={val.image}
                      alt={val.name}
                      className='max-lg:w-7 '
                    />
                    <p className='text-xs font-semibold'>{val.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="h-screen bg-[url('../public/coming-soon-bg.png')] w-full">
          <div className='w-full h-full bg-secondary/30 flex justify-center items-center flex-col gap-6'>
            <Image
              src={"/airport-icon.png"}
              width={150}
              height={150}
              alt='Coming-soon'
              className='max-lg:w-10 max-lg:h-10'
            />
            <h1 className='text-white text-4xl font-extrabold'>Coming Soon!</h1>
            <p className='text-white max-w-2xl text-center text-lg font-extrabold p-4'>
              Find a bright ideal to suit your taste with our great selection of
              suspension, wall, floor and table lights. breathable Walking
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CustomizeFurniture;
