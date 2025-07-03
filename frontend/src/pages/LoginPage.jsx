import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Lock, Loader } from 'lucide-react';
import { Link } from "react-router-dom";
import Input from '../components/Input';
import { useAuthStore } from '../store/authStore';
import toast from 'react-hot-toast';

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!name.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    await login(name, password);
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#FFEAD8] via-[#E8988A] to-[#9B177E]">
      <div className="hidden md:flex w-1/2 items-center justify-center p-10">
        <h2 className="text-white text-4xl font-bold drop-shadow-lg text-center">
          Welcome Back <br /> Log in to continue
        </h2>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md bg-[#2A1458] bg-opacity-80 backdrop-blur-lg rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#E8988A] to-[#9B177E] text-transparent bg-clip-text">
            Welcome Back
          </h2>

          <form onSubmit={handleLogin}>
            <Input
              icon={User}
              type='text'
              placeholder='Username'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              icon={Lock}
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className='text-[#E8988A] font-semibold mb-2'>{error}</p>}

            <motion.button
              className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-[#E8988A] to-[#9B177E] text-white font-bold rounded-lg shadow-lg hover:from-[#E47A74] hover:to-[#811364] focus:outline-none focus:ring-2 focus:ring-[#9B177E] focus:ring-offset-2 focus:ring-offset-[#FFEAD8] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type='submit'
              disabled={isLoading}
            >
              {isLoading ? <Loader className='w-6 h-6 animate-spin mx-auto' /> : "Login"}
            </motion.button>
          </form>

          <div className='pt-6 text-center text-sm text-[#FFEAD8]'>
            Don’t have an account?{" "}
            <Link to={"/signup"} className='text-[#E8988A] hover:underline'>
              Sign Up
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
