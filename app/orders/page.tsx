'use client'
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { useState } from "react";

const Orders = () => {
    const [active, setActive] = useState()
  return (
    <div>
      <Header />
      <div className="bg-[url('../public/title-bg.png')] py-4 text-4xl max-lg:text-3xl font-extrabold text-center text-white">
          My Orders
        </div>
      <main>
        <div className="text-lg font-medium flex gap-1 items-center justify-center mt-10 mb-8">
            <h1 className={`${active && 'border-b-2 '} px-2 py-1 cursor-pointer`} onClick={()=> {}}>Open Orders(2)</h1>
            <h1 className="px-2 py-1 cursor-pointer">Closed Orders(2)</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Orders;
