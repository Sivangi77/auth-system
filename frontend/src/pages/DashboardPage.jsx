import { motion } from 'framer-motion';
import { useAuthStore } from '../store/authStore';
import { formatDate } from '../utils/date';

const DashboardPage = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5 }}
      className='max-w-md w-full mx-auto mt-10 p-8 bg-[#2A1458] bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-xl shadow-2xl border border-[#9B177E]'
    >
      <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#E8988A] to-[#9B177E] text-transparent bg-clip-text'>
        Welcome, {user.name}!
      </h2>

      <div className='space-y-6'>
        <motion.div
          className='p-4 bg-[#2A1458] bg-opacity-80 rounded-lg border border-[#9B177E]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-[#9B177E] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg">
              {user.name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-white font-semibold text-lg">{user.name}</p>
              <p className="text-[#FFEAD8] text-sm">{user.email}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className='p-4 bg-[#2A1458] bg-opacity-80 rounded-lg border border-[#9B177E]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className='text-xl font-semibold text-[#E8988A] mb-3'>Account Activity</h3>
          <p className='text-[#FFEAD8]'>
            <span className='font-bold'>Joined: </span>
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className='text-[#FFEAD8]'>
            <span className='font-bold'>Last Login: </span>
            {formatDate(user.lastLogin)}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className='mt-4'
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleLogout}
          className='w-full py-3 px-4 bg-gradient-to-r from-[#E8988A] to-[#9B177E] text-[#FFEAD8] font-bold rounded-lg shadow-lg hover:from-[#9B177E] hover:to-[#2A1458] focus:outline-none focus:ring-2 focus:ring-[#E8988A] focus:ring-offset-2 focus:ring-offset-[#2A1458]'
        >
          Logout
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default DashboardPage;
