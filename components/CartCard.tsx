"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "./Button";

const CartCard = () => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
    return;
  };

  return (
    <section className='max-w-6xl py-4  my-4 border-b'>
      <div className='flex justify-between items-center gap-4 max-md:flex-wrap'>
        <div className='w-full max-w-3xl flex items-center gap-4 max-md:flex-wrap justify-center'>
          <Image
            width={150}
            height={150}
            src={"/Product-pic1.png"}
            alt='image'
            className='rounded-lg max-md:w-full max-w-sm'
          />
          <div className='space-y-2'>
            <h1 className='text-secondary text-xl font-semibold '>
              Moraino Table And Chair
            </h1>
            <p className='text-gray-800'>
              Find a bright ideal to suit your taste with our great selection of
              suspension, wall, floor and table lights. breathable Walking.
            </p>
            <p className='text-primary font-bold'>
              <span className='text-bold text-gray-800'>Size:</span> 34cm
              &times; 24cm &times; 54cm
            </p>
          </div>
        </div>
        <div>
          <p className='font-bold text-lg text-secondary'>N30,000</p>
          <p className='line-through font-light text-gray-400'>N19,000</p>
        </div>
      </div>
      <div className='flex justify-between items-center mt-2'>
        <div className='w-fit flex justify-center items-center gap-2 rounded-lg py-2 px-4 hover:bg-primary/20 transition cursor-pointer drop-shadow-xl'>
          <Image width={24} height={24} src={"/delete.svg"} alt='Delete' />
          <p className='text-primary text-sm'>REMOVE</p>
        </div>
        <div className='flex justify-center items-center gap-6'>
          <Button
            bgColor='primary'
            className='p-1'
            handleClick={decreaseQuantity}>
            &minus;
          </Button>
          <p>{quantity}</p>
          <Button bgColor='primary' handleClick={increaseQuantity}>
            &#43;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CartCard;
