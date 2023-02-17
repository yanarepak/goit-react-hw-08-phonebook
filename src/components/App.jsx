import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import Home from 'pages/home/Home';
import Register from 'pages/register/Register';
import Login from 'pages/login/Login';
import Contacts from 'pages/contacts/Contacts';
import { ErrorPage } from 'pages/error/ErrorPage';
import Navigation from './Navigation/Navigation';
import PublicRoute from './Routes/PublicRoute';
import PrivateRoute from './Routes/PrivateRoute';
import { selectIsRefreshing } from 'redux/selectors';


import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from 'redux/operation/userOperation';

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  console.log(111111111, isRefreshing);
  // return (
  //   <>
  //     <Navigation />

  //     <Suspense fallback={<p>Loading....</p>}>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/register" element={<Register />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/contacts" element={<Contacts />} />

  //         <Route element={<ErrorPage />} path="*" />
  //       </Routes>
  //     </Suspense>
  //   </>
  // );

  return (

    !isRefreshing &&
    <>
      <Navigation />

      <Suspense fallback={<p>Loading....</p>}>
        <Routes>
          <Route path="/" element={<PublicRoute children={<Home />}/>} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts"  children={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts"  children={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" children={<Contacts />} />
            }
          />

          <Route element={<ErrorPage />} path="*" />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
