import { Check, X } from "lucide-react";

const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "At least 6 characters", met: password.length >= 6 },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
  ];

  return (
    <div className='mt-2 space-y-1'>
      {criteria.map((item) => (
        <div key={item.label} className='flex items-center text-xs'>
          {item.met ? (
            <Check className='size-4 text-[#9B177E] mr-2' />
          ) : (
            <X className='size-4 text-[#E8988A] mr-2' />
          )}
          <span className={item.met ? 'text-[#9B177E]' : 'text-[#FFEAD8]'}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthMeter = ({ password }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };

  const strength = getStrength(password);

  const getColor = (strength) => {
    if (strength === 0) return "bg-[#E8988A]";
    if (strength === 1) return "bg-[#E8988A]";
    if (strength === 2) return "bg-[#FFEAD8]";
    if (strength === 3) return "bg-[#9B177E]";
    return "bg-[#2A1458]";
  };

  const getStrengthText = (strength) => {
    if (strength === 0) return "Very Weak😞";
    if (strength === 1) return "Weak😕";
    if (strength === 2) return "Fair🙂";
    if (strength === 3) return "Good😄";
    return "Strong💪";
  };

  return (
    <div className='mt-2'>
      <div className='flex justify-between items-center mb-1'>
        <span className='text-xs text-[#FFEAD8]'>Password strength: </span>
        <span className='text-xs text-[#FFEAD8]'>{getStrengthText(strength)}</span>
      </div>

      <div className='flex space-x-1'>
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 ${
              index < strength ? getColor(strength) : "bg-[#2A1458]"
            }`}
          />
        ))}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrengthMeter;
