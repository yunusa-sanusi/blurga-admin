import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthShareLayout from './pages/shared/AuthShareLayout';
import SharedLayout from './pages/shared/SharedLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';

import { onAuthStateChangedListener } from './utils/firebase/auth';

function App() {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        console.log(user);
      }
    });

    return unsubscribe;
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
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
