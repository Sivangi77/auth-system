import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({ icon: Icon, type, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='relative mb-6'>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-[#E8988A]" />
      </div>

      <input
        {...props}
        type={isPassword && showPassword ? "text" : type}
        className='w-full pl-10 pr-10 py-2 bg-[#2A1458] bg-opacity-60 rounded-lg border border-[#9B177E] focus:border-[#E8988A] focus:ring-2 focus:ring-[#E8988A] text-white placeholder-[#FFEAD8] transition duration-200'
      />

      {isPassword && (
        <div
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-[#E8988A]"
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </div>
      )}
    </div>
  );
};

export default Input;
