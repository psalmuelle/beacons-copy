import Link from "next/link";
import ProductCard from "./ProductCard";
import products from "@/appData/products";

interface ProductSectionProps {
  title: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ title }) => {
  return (
    <section className='max-w-6xl bg-black/5 mb-8 mx-auto rounded'>
      <div className='bg-secondary text-white rounded-t flex justify-between items-center py-4 px-4'>
        <h1 className='font-bold text-lg'>{title}</h1>
        <Link
          href={`products/${title.toLocaleLowerCase()}`}
          className='hover:underline'>
          See All
        </Link>
      </div>

      <div className='w-full mx-auto'>
        <div className='w-fit min-w-min flex max-md:grid grid-cols-2 px-[4%] justify-start  flex-wrap gap-4  my-4 py-4 '>
          {products
            .filter((product) => product.category === title.toLowerCase())
            .map((val) => {
              return <ProductCard key={val.id} {...val} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
