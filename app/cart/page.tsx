import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import CartCard from "@/components/CartCard";

const Cart = () => {
  const carts = ["w",'w'];
  return (
    <div className=''>
      <Header />
      <div className="bg-[url('../public/title-bg.png')] py-4 text-4xl max-lg:text-3xl font-extrabold text-center text-white">
        Cart
      </div>
      {carts.length === 0 ? (
        <div className='h-[70vh] px-[4%] flex flex-col justify-center items-center gap-4'>
          <Image
            width={200}
            height={200}
            src={"/oops.svg"}
            alt='No cart here'
          />
          <h1 className='text-3xl font-extrabold'>Oops!</h1>
          <p className='text-lg'>Your cart is empty</p>
          <Link href={"/products"}>
            <Button bgColor='primary' className='h-16 px-8 mt-4'>
              Checkout Furniture
            </Button>
          </Link>
        </div>
      ) : (
        <div className="px-[4%]">
          <div>
            <h1 className="text-[#284F49] text-2xl font-bold mt-16">Cart({carts.length})</h1>
            {carts.map((val, i) => {
              return <CartCard key={i} />;
            })}
          </div>
          <div className="flex justify-between items-center mt-10 mb-36">
            <p className="text-2xl max-md:text-xl font-bold text-gray-900">Total:N60,000 </p>
            <Button bgColor="secondary" className="w-48 max-md:w-36 h-12">Checkout</Button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
