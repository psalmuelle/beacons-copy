import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Input from "@/components/Input";

const Login = () => {
  return (
    <div className="bg-[url('../public/register-bg.png')]">
      <Header />
      <div>
        <h1 className='mt-[10vh] text-4xl max-lg:text-3xl font-extrabold w-fit mx-auto text-primary'>
          Welcome Back!
        </h1>
        <p className='w-fit mx-auto mt-5 text-[#908E8E]'>
          Enter your details to proceed
        </p>
      </div>
      <section className='my-20 w-[92%] max-w-lg mx-auto'>
        <form className='flex flex-col gap-6' autoComplete='off'>
          <Input type='email' label='Email' />
          <Input type='password' label='Password' />

          <div className='flex justify-end items-center mb-4'>
            <p className='text-sm text-[#EB5E55] font-semibold cursor-pointer'>
              Recover password
            </p>
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

export default Login;
