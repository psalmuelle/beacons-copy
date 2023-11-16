"use client";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="bg-[url('../public/title-bg.png')] py-4 text-4xl max-lg:text-3xl font-extrabold text-center text-white">
        Contact Us
      </div>
      <main>
        <div className='max-w-xl mb-12 mx-auto'>
          <p className='mb-10 mt-12'>
            Feel free to reach out or send me an email directly at{" "}
            <span className='font-bold text-secondary'>
              psalmuelle1@gmail.com
            </span>
          </p>
          <form
            className='flex flex-col  gap-8'
            onSubmit={(e) => e.preventDefault()}>
            <Input type='text' label='Your name' />

            <Input type='email' label='Email' />

            <textarea
              className='bg-transparent focus:bg-white focus:outline-none p-4  h-48 rounded-[7px] border px-3 py-2.5 outline outline-0 transition-all focus:border-2 focus:border-secondary focus:outline-0 placeholder-black/90'
              placeholder='Message'
              autoComplete='off'
              name='message'
            />
            <Button bgColor='primary' className='h-14'>
              Send Message
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
