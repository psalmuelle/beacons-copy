import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[url('../public/footer-bg.png')] bg-cover text-[#FAFAFA] text-center ">
      <div className='py-10 px-[4%]'>
        <h1 className='text-white text-xl font-semibold '>GET IN TOUCH</h1>
        <p className=''>Feel free to get in touch with us via email</p>
        <a href='mailto:psalmuelle1@gmail.com' className='text-sm'>
          psalmuelle1@gmail.com
        </a>
      </div>
      <div className='flex justify-center md:justify-between items-center flex-wrap gap-4 py-4 border-t border-gray-400/50 px-[4%]'>
        <Image width={217} height={70} src={"/logo-white.svg"} alt='Logo' />
        <p>&copy; 2020 | webovio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
