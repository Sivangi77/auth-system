import { Route, Routes, Navigate } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LoadingSpinner from './components/LoadingSpinner';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/authStore';
import { useEffect } from "react";
import Footer from './components/Footer';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const RedirectAthenticatedUser = ({ children }) => {
  const { isAuthenticated } = useAuthStore();
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FFEAD8] via-[#E8988A] to-[#9B177E] relative overflow-hidden">
      <main className="flex-grow flex items-center justify-center relative">
        <Routes>
          <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
          <Route path="/signup" element={<RedirectAthenticatedUser><SignUpPage /></RedirectAthenticatedUser>} />
          <Route path="/login" element={<RedirectAthenticatedUser><LoginPage /></RedirectAthenticatedUser>} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
