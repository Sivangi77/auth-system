import { Route, Routes, Navigate } from 'react-router-dom';
import FloatingShape from "./components/FloatingShape";


import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

import LoadingSpinner from './components/LoadingSpinner';

import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/authStore';
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if(!isAuthenticated){
    return <Navigate to="/login" replace />;
  }

  return children;
}

const RedirectAthenticatedUser = ({children}) => {
  const {isAuthenticated, user} = useAuthStore();
  
  if(isAuthenticated){
    return <Navigate to="/" replace />
  }

  return children;
}

function App() {
  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;
  return (
   <div 
      className='min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden'>
    <FloatingShape color="bg-green-500" size="w-64 h-64" top="-5%" Left="10%" delay={0} />
    <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" Left="80%" delay={5} />
    <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" Left="-10%" delay={2} />
   
   <Routes>
    <Route path='/' element={<ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>} />
    <Route path='/signup'
           element={
              <RedirectAthenticatedUser>
                <SignUpPage />
              </RedirectAthenticatedUser>
           } />
    <Route path='/login' element={<RedirectAthenticatedUser>
                <LoginPage />
              </RedirectAthenticatedUser>} />
   </Routes>

  <Toaster />
   </div>
  );
}

export default App
