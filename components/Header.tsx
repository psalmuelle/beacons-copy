"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";



//Nav Menu on the header
const Nav = () => {
  const productLists = ["Chairs", "Tables", "Bed", "Workstation"];

  const [showProducts, setShowProducts] = useState(false);

  const handleShowProducts = () => {
    setShowProducts(!showProducts);
  };
  return (
    <div className=' flex justify-center items-center max-lg:flex-col gap-10 font-semibold'>
      <div className='relative'>
        <div
          className='max-lg:hidden flex justify-center items-center gap-1 cursor-pointer'
          onClick={handleShowProducts}>
          <p>Products</p>
          <Image
            width={20}
            height={20}
            src={"/Arrow-down.svg"}
            alt='dropdown'
            className={`${showProducts && "rotate-180"} transition-all`}
          />
        </div>
        <AnimatePresence>
          {showProducts && (
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className='absolute top-10 flex justify-center flex-col gap-2 font-normal bg-white shadow-md p-4 rounded-b-lg'>
              {productLists.map((product, index) => (
                <div
                  key={index}
                  className='hover:bg-gray-50/40 px-2 py-1 rounded-lg'>
                  <Link href={`/products/${product.toLowerCase()}`}>
                    {product}
                  </Link>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <Link href={"/blogs"}>Blogs</Link>
      <Link href={"/contact"}> Contact</Link>
    </div>
  );
};

//Search Bar on the header
const Search = () => {
  return (
    <div className='relative w-80 h-fit max-lg:hidden'>
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
        className='block text-sm outline-none transition-all focus:border-gray-300 pl-10 pr-4 py-2.5 w-full rounded-md border border-gray-200 bg-transparent'
      />
    </div>
  );
};

// Header Component
const Header = () => {
  const login = true;
  const [openNav, setOpenNav] = useState(false);

  return (
    <header className='relative flex justify-between items-center px-[4%] py-4'>
      <Image width={110} height={55} src={"/logo.svg"} alt='Minifurs' />

      <div className='max-lg:hidden'>
        <Nav />
      </div>
      <Search />

      {login ? (
        <div className='max-lg:hidden flex justify-center items-center gap-10'>
          <div className='cursor-pointer rounded-full hover:bg-gray-100 transition-all p-1.5'>
            <Image width={24} height={24} alt='favourite' src={"/Heart.svg"} />
          </div>
          <Link
            href={"/cart"}
            className=' rounded-full hover:bg-gray-100 transition-all p-1.5'>
            <Image width={24} height={24} alt='favourite' src={"/Cart.svg"} />
          </Link>

          <div>
            <Image
              width={24}
              height={24}
              alt='Profile'
              src={"/profile-pic.png"}
            />
          </div>
        </div>
      ) : (
        <div className='max-lg:hidden flex justify-center items-center gap-4'>
          <Link href={"/login"} className='font-bold text-lg  px-2 py-1'>
            Login
          </Link>
          <Button bgColor='primary'>
            <Link href={"/register"}>Register</Link>
          </Button>
        </div>
      )}

{/** Mobile Hamburger */}
      <div className='lg:hidden cursor-pointer'>
        <Image
          width={24}
          height={24}
          alt='Menu'
          src={"/Menu.svg"}
          onClick={() => setOpenNav(!openNav)}
        />
      </div>


{/** Mobile NavMenu */}
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ x: 320, y: -500, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            className='absolute bg-secondary gap-10 text-white flex justify-center items-center flex-col top-20 left-0 w-full h-[80vh] font-semibold'>
            <Link
              href={"/products"}
              className=' rounded-full hover:bg-gray-100 transition-all p-1.5 '>
              Products
            </Link>
            {login ? (
              <div className=' flex justify-center items-center flex-col gap-10'>
                <div className='cursor-pointer rounded-full hover:bg-gray-100 transition-all p-1.5 '>
                  Favourites
                </div>

                <Link
                  href={"/cart"}
                  className=' rounded-full hover:bg-gray-100 transition-all p-1.5 '>
                  My Cart
                </Link>
                <Link href={"/blogs"}>Blogs</Link>
                <Link href={"/contact"}> Contact</Link>
              </div>
            ) : (
              <div className='flex justify-center flex-col items-center gap-6'>
                <Link href={"/login"} className='font-bold text-lg  px-2 py-1'>
                  Login
                </Link>
                <Button bgColor='primary' className='w-[250px] h-[48px]'>
                  <Link href={"/register"}>Register</Link>
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
