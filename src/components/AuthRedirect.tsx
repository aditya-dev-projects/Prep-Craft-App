
import { useAuth } from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const AuthRedirect = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner component
  }

    return user ? <Navigate to="/dsa" replace /> : <Outlet />;
};

export default AuthRedirect;
