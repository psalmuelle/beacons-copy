"use client";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useParams } from "next/navigation";
import Image from "next/image";
import Button from "@/components/Button";
import Link from "next/link";
import ThreeImage from "@/components/3d";

const ProductInfo = () => {
  const params = useParams();
  console.log(params.productId);

  const [show3D, setShow3D] = useState(false);

  const show3DImage = () => {
    setShow3D(!show3D);
  };

  return (
    <div className='relative'>
      <Header />
      <main className='px-[4%]'>
        <Link
          href={"/"}
          className='block mt-8 underline w-fit hover:text-secondary'>
          Go back home
        </Link>
        <div className='flex justify-between item-start gap-10 max-lg:flex-col '>
          <section className='flex justify-evenly gap-6 w-full max-w-2xl flex-wrap py-8'>
            <div className='relative'>
              <Image
                src={"/Product-pic.png"}
                alt=''
                width={300}
                height={300}
                className=''
              />
              <button
                className='absolute bottom-6 left-6 rounded-full px-4 py-2 border-2 border-secondary bg-white/60 hover:bg-white transition text-sm font-bold flex justify-center items-center gap-1'
                onClick={show3DImage}>
                <svg
                  focusable='false'
                  viewBox='0 0 24 24'
                  width='24'
                  height='24'
                  aria-hidden='true'
                  className='pip-svg-icon pip-btn__icon'>
                  <path d='M11 16.9766c.3294.0154.663.0233.9999.0233 2.2351 0 4.3234-.3458 6-.9495 1.7881-.6438 4-1.8975 4-4.0505 0-1.9568-1.8939-3.1985-3.5146-3.864l-1.5606 1.5606c.9375.2978 3.0752 1.0327 3.0752 2.3034 0 .9329-1.2789 1.5728-2 1.8958-1.8614.8335-3.9767 1.1042-6 1.1042-.3392 0-.6729-.0088-.9999-.0257v-1.9743l-3 3 3 3v-2.0233zm2-9.9532A21.3914 21.3914 0 0 0 12 7c-2.235 0-4.3234.3457-6 .9494C4.212 8.5932 2 9.847 2 12c0 1.9568 1.894 3.1984 3.5147 3.8639l1.5605-1.5605C6.1377 14.0057 4 13.2707 4 12.0001c0-.9329 1.279-1.5729 2-1.8958 1.8614-.8336 3.9768-1.1042 6-1.1042.3392 0 .6729.0087 1 .0257V11l3-3-3-3v2.0234z'></path>
                </svg>
                View in 3D
              </button>
            </div>
            <Image src={"/Product-pic1.png"} alt='' width={300} height={300} />
            <Image src={"/Product-pic2.png"} alt='' width={300} height={300} />
            <Image src={"/Product-pic.png"} alt='' width={300} height={300} />
          </section>
          <section className='py-8 w-full max-w-sm'>
            <div className='flex justify-between items-start gap-8'>
              <div className='flex flex-col gap-8'>
                <h1 className='text-xl font-semibold '>
                  Parkonison Chair- Madeup
                </h1>
                <p className='-mt-6'>Chair, anthracite</p>

                <p className='font-extrabold'>N70,000</p>

                <div className='flex gap-4'>
                  <Button bgColor='secondary' className='h-12 mt-4'>
                    Buy Now
                  </Button>
                  <button className='h-12 px-4 mt-4 border border-primary rounded-lg'>
                    Add to Cart
                  </button>
                </div>
              </div>

              <div>
                <Image
                  src={"/Heart.svg"}
                  alt='favourite'
                  width={26}
                  height={26}
                />
              </div>
            </div>
            <div className='mt-12'>
              <ul className='flex flex-col gap-4 list-disc list-inside font-semibold'>
                <li>Free shipping</li>
                <li>Free return within 7 days</li>
                <li>365 DAYS WARRANTY</li>
              </ul>
            </div>
          </section>
        </div>
        <section className=''>
          <h1 className='text-lg font-bold'>Product Description</h1>
          <div>
            Have a seat and stay a while - the friendly, embracing curves and
            flexy material make this chair nice and comfy. No tools are required
            to assemble the chair, you just click it together with a simple
            mechanism under the seat. The wood fibre/plastic composite material
            gives the chair a textured, matte surface that is soft and inviting
            to the touch. Viewed from afar, the wood fibres blend into the
            surface, up close they become an interesting design feature that
            catches the eye.
          </div>
          <h2 className='mt-10 mb-4 font-bold text-lg'>Measurements</h2>
          <div className='space-y-6 mb-14'>
            <p className='font-semibold'>
              Tested for: <span className='font-normal'>110kg</span>
            </p>
            <p className='font-semibold'>
              Width: <span className='font-normal'>45cm</span>
            </p>
            <p className='font-semibold'>
              Depth: <span className='font-normal'>51cm</span>
            </p>
            <p className='font-semibold'>
              Height: <span className='font-normal'>81cm</span>
            </p>
            <p className='font-semibold'>
              Seat width: <span className='font-normal'>45cm</span>
            </p>
            <p className='font-semibold'>
              Seat depth: <span className='font-normal'>41cm</span>
            </p>
            <p className='font-semibold'>
              Seat height: <span className='font-normal'>43cm</span>
            </p>
          </div>
          <table></table>
        </section>
      </main>
      <Footer />

      {/* 3D Image Container */}
      {show3D && (
        <div className='fixed top-0 left-0 w-screen h-screen bg-gray-400/30 backdrop-blur flex justify-center items-center'>
          <div className='relative bg-white w-[90%] max-w-lg h-[90%] rounded flex justify-center items-center'>
            <ThreeImage />
            <div className='absolute h-20 w-full bottom-0 bg-secondary text-white px-4'>
              <h1 className='font-bold text-xl mt-1'>A Swivelling Chair</h1>
              <p className='font-semibold'>
                Dimensions: 45cm &times; 40cm &times; 41cm
              </p>
              <hr className='mt-2 border-2 w-4/5 rounded-full mx-auto' />
            </div>
            <div
              onClick={show3DImage}
              className='absolute text-4xl top-4 right-4 w-10 h-10 bg-primary/60 flex justify-center items-center rounded-full cursor-pointer'>
              <Image
                src={"/close-icon.svg"}
                alt='close'
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
