import { motion } from "framer-motion";
import Input from "../components/Input";
import { Lock, Mail, User, Loader } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";
import toast from 'react-hot-toast';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { signup, error, isLoading } = useAuthStore();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      await signup(email, password, name);
      navigate("/");
      toast.success("User signed up successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full bg-[#2A1458] bg-opacity-80 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
    >
      <div className='p-8'>
        <h2
          className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#E8988A] to-[#9B177E] text-transparent bg-clip-text'
        >
          Create Account
        </h2>

        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            type='text'
            placeholder='Full Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className='text-[#E8988A] font-semibold mt-2'>{error}</p>}
          <PasswordStrengthMeter password={password} />

          <motion.button
            className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-[#E8988A] to-[#9B177E] text-white font-bold rounded-lg shadow-lg hover:from-[#E47A74] hover:to-[#811364] focus:outline-none focus:ring-2 focus:ring-[#9B177E] focus:ring-offset-2 focus:ring-offset-[#FFEAD8] transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? <Loader className='animate-spin mx-auto' size={24} /> : "Sign Up"}
          </motion.button>


        </form>
      </div>
      <div className='px-8 py-4 bg-[#2A1458] bg-opacity-90 flex justify-center'>
        <p className='text-sm text-[#FFEAD8]'>
          Already have an account?{" "}
          <Link to={"/login"} className='text-[#E8988A] hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
