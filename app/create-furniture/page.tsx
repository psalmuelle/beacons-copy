import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { categories } from "@/appData/home";

const CustomizeFurniture = () => {
  return (
    <div className='w-full'>
      <Header />
      <div className="bg-[url('../public/title-bg.png')] py-4 text-4xl max-lg:text-3xl font-extrabold text-center text-white">
        Customize your furniture and build your space
      </div>

      <section className=' w-[27%] h-[100vh] shadow-xl px-[2%]'>
        <div className='space-y-4 pt-10'>
          <p className='text-[#4D533C]'>Select Background</p>
          <div className='w-full h-14 bg-[#F4F4F4] rounded-xl'></div>
        </div>
        <div className='flex flex-wrap justify-start gap-4 mt-6'>
          {categories.map((val) => {
            return (
              <div
                key={val.id}
                className='flex flex-col justify-center items-center gap-1 cursor-pointer'>
                <div className='w-20 h-20 p-5 rounded-xl bg-[#F2F0E0]'>
                  <Image
                    height={36}
                    width={36}
                    src={val.image}
                    alt={val.name}
                    className='max-lg:w-7'
                  />
                  <p className='text-xs font-semibold text-center'>
                    {val.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <Image src={'/Product-pic2.png'} width={1400} height={1440} alt="Coming-soon"/>
      </section>
    </div>
  );
};

export default CustomizeFurniture;
