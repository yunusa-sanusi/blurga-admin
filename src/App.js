import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AuthShareLayout from './pages/shared/AuthShareLayout';
import SharedLayout from './pages/shared/SharedLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import CreatePost from './pages/post/CreatePost';
import Categories from './pages/post/Categories';

import {
  onAuthStateChangedListener,
  getUserDocument,
} from './utils/firebase/auth';

import {
  getUser,
  getUserAuthId,
  getLoggedInUser,
} from './store/features/userSlice';
import { fetchCategories } from './store/features/categorySlice';

function App() {
  const { userAuthId } = useSelector(getLoggedInUser);
  const dispatch = useDispatch();

  const getLoggedInUserAuth = () => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        dispatch(getUserAuthId(user.uid));
      }
    });

    return unsubscribe;
  };

  const getLoggedInUserDocument = async () => {
    const user = await getUserDocument(userAuthId);
    const userData = { ...user, createdAt: user?.createdAt.seconds };
    dispatch(getUser(userData));
  };

  useEffect(() => {
    getLoggedInUserAuth();
  }, []);

  useEffect(() => {
    getLoggedInUserDocument();
  }, [userAuthId]);

  useEffect(() => {
    dispatch(fetchCategories('random'));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="create-post" element={<CreatePost />} />
          <Route path="categories" element={<Categories />} />
        </Route>
        <Route path="auth" element={<AuthShareLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
