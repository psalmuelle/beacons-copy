import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";

const Register = () => {
  return (
    <div className="bg-[url('../public/register-bg.png')]">
      <Header />
      <div>
        <h1 className='mt-[10vh] text-4xl max-lg:text-3xl font-extrabold w-fit mx-auto text-primary'>
          Sign Up To Get Started
        </h1>
        <p className='w-fit mx-auto mt-5 text-[#908E8E]'>
          Enter your details to proceed further
        </p>
      </div>
      <section className='my-20 w-[92%] max-w-lg mx-auto'>
        <form className='flex flex-col gap-6' autoComplete='off'>
          <Input type='email' label='Email' />
          <div className='flex justify-between items-center gap-6 max-sm:flex-wrap'>
            <Input type='text' label='First name' />
            <Input type='text' label='Last name' />
          </div>
          <Input type='password' label='Password' />

          <div className='flex justify-center items-center gap-2 mb-4'>
            <input id='tac' type='radio' className='accent-secondary' />
            <label
              htmlFor='tac'
              className='w-fit text-sm font-bold text-[#908E8E]'>
              I agree with terms and conditions
            </label>
          </div>

          <Button className='h-14' bgColor='secondary'>
            Sign Up
          </Button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
