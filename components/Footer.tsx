import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[url('../public/footer-bg.png')] bg-contain text-[#FAFAFA] text-center px-[4%] pt-20">
      <div className='py-10'>
        <h1 className='text-white text-xl font-semibold '>GET IN TOUCH</h1>
        <p className=''>Feel free to get in touch with us via email</p>
        <a href='mailto:psalmuelle1@gmail.com' className='text-sm'>
          psalmuelle1@gmail.com
        </a>
      </div>
      <div className='flex justify-center items-center flex-wrap gap-4 py-4'>
        <Image width={217} height={70} src={"/logo-white.svg"} alt='Logo' />
        <p>&copy; 2020 | webovio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
