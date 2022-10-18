import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import { ToastContainer } from 'react-toastify';
const Homepage = lazy(() =>
  import(/* webpackChunkName: "Homepage" */ 'pages/Homepage/Homepage')
);

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container>
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <ToastContainer />
        </Container>
      </Suspense>
    </>
  );
}
