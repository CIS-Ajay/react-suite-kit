import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { RootState, AppDispatch } from '@/store/store';
import { getCurrentUser, logout } from '@/store/slices/authSlice';

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const auth = useSelector((state: RootState) => state.auth);

  // Initialize user on app start if token exists
  useEffect(() => {
    if (auth.token && !auth.user && !auth.isLoading) {
      dispatch(getCurrentUser());
    }
  }, [auth.token, auth.user, auth.isLoading, dispatch]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return {
    ...auth,
    logout: handleLogout,
  };
};