"use client";

import Image from "next/image";
import { motion } from "framer-motion";
interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  newPrice: string;
  oldPrice: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ ...props }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className='relative w-[186px] text-left cursor-pointer bg-white hover:shadow-md shadow-secondary/60 transition rounded-lg'>
      <Image
        height={186}
        width={186}
        alt={props.name}
        src={props.image}
        className='h-[186px] w-[186px]'
      />
      <div className='p-2 pt-1'>
        <h1 className='text-sm overflow-hidden whitespace-nowrap text-ellipsis'>
          {props.name}
        </h1>
        <p className='font-medium'>{props.newPrice}</p>
        <p className='text-xs line-through text-gray-500'>{props.oldPrice}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
