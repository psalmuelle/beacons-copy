"use client";
import products from "@/appData/products";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { useParams } from "next/navigation";

const ProductCategory = () => {
  const params = useParams();
  return (
    <div>
      <Header />

      <section>
        <div className="bg-[url('../public/title-bg.png')] py-4 text-4xl max-lg:text-3xl font-extrabold text-center text-white capitalize">
          {params.category}
        </div>
        {
          <div className='w-fit min-w-min flex max-md:grid grid-cols-2 justify-start items-center flex-wrap gap-4 px-[4%] my-4 py-4 mx-auto'>
            {products
              .filter((product) => product.category === params.category)
              .map((val) => {
                return <ProductCard key={val.id} {...val} />;
              })}
          </div>
        }
      </section>

      <Footer />
    </div>
  );
};

export default ProductCategory;
