import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

const BlogPage = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="bg-[url('../public/title-bg.png')] py-4 text-4xl max-lg:text-3xl font-extrabold text-center text-white">
          Blogs
        </div>
        <section>
          <h1 className='text-center mt-8 mb-12 text-lg font-medium'>
            Get the latest updates about furniture and tips on how to revamp
            your space!
          </h1>
          <div className='my-8 max-w-[640px] mx-auto'>
            <Image
              src={"/blogpage-hero.jpg"}
              alt='Blog Hero'
              width={640}
              height={409}
              className='rounded-t-lg'
            />
            <h2 className='text-xl mt-4 mb-2 font-semibold capitalize'>
              Revamp Your Space: Unveiling the Ultimate Guide to Stylish and
              Practical Furniture Selection
            </h2>
            <div className='flex justify-start items-center text-sm gap-1 text-gray-500'>
              <p>4 min</p>
              <p>&#x2022;</p>
              <p>November 14, 2023</p>
            </div>
          </div>

          <section>
            <h1 className='text-center text-2xl font-bold mt-12 mb-6'>
              Read Our Articles
            </h1>
            <div className='max-w-4xl mx-auto px-4 mb-4 py-4 flex gap-6 items-center'>
              <Image
                src={"/blogpage-hero.jpg"}
                alt='blog'
                width={150}
                height={150}
              />
              <div>
                <h1 className='text-xl font-semibold capitalize'>
                  How to choose your colours for your furnitures
                </h1>
                <p className='text-[15px] text-gray-600 mt-2'>
                  Author: Erinle Samuel
                </p>
                <div className='flex justify-start items-center text-sm gap-1 text-gray-500'>
                  <p>4 min</p>
                  <p>&#x2022;</p>
                  <p>November 14, 2023</p>
                </div>
              </div>
            </div>

            <div className='max-w-4xl mx-auto px-4 mb-4 py-4 flex gap-6 items-center'>
              <Image
                src={"/blogpage-hero.jpg"}
                alt='blog'
                width={150}
                height={150}
              />
              <div>
                <h1 className='text-xl font-semibold capitalize'>
                  How to choose your colours for your furnitures
                </h1>
                <p className='text-[15px] text-gray-600 mt-2'>
                  Author: Erinle Samuel
                </p>
                <div className='flex justify-start items-center text-sm gap-1 text-gray-500'>
                  <p>4 min</p>
                  <p>&#x2022;</p>
                  <p>November 14, 2023</p>
                </div>
              </div>
            </div>

            <div className='max-w-4xl mx-auto px-4 mb-4 py-4 flex gap-6 items-center'>
              <Image
                src={"/blogpage-hero.jpg"}
                alt='blog'
                width={150}
                height={150}
              />
              <div>
                <h1 className='text-xl font-semibold capitalize'>
                  How to choose your colours for your furnitures
                </h1>
                <p className='text-[15px] text-gray-600 mt-2'>
                  Author: Erinle Samuel
                </p>
                <div className='flex justify-start items-center text-sm gap-1 text-gray-500'>
                  <p>4 min</p>
                  <p>&#x2022;</p>
                  <p>November 14, 2023</p>
                </div>
              </div>
            </div>

            <div className='max-w-4xl mx-auto px-4 mb-4 py-4 flex gap-6 items-center'>
              <Image
                src={"/blogpage-hero.jpg"}
                alt='blog'
                width={150}
                height={150}
              />
              <div>
                <h1 className='text-xl font-semibold capitalize'>
                  How to choose your colours for your furnitures
                </h1>
                <p className='text-[15px] text-gray-600 mt-2'>
                  Author: Erinle Samuel
                </p>
                <div className='flex justify-start items-center text-sm gap-1 text-gray-500'>
                  <p>4 min</p>
                  <p>&#x2022;</p>
                  <p>November 14, 2023</p>
                </div>
              </div>
            </div>

            <div className='max-w-4xl mx-auto px-4 mb-4 py-4 flex gap-6 items-center'>
              <Image
                src={"/blogpage-hero.jpg"}
                alt='blog'
                width={150}
                height={150}
              />
              <div>
                <h1 className='text-xl font-semibold capitalize'>
                  How to choose your colours for your furnitures
                </h1>
                <p className='text-[15px] text-gray-600 mt-2'>
                  Author: Erinle Samuel
                </p>
                <div className='flex justify-start items-center text-sm gap-1 text-gray-500'>
                  <p>4 min</p>
                  <p>&#x2022;</p>
                  <p>November 14, 2023</p>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
