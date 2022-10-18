import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Container from 'components/Container/Container';
import Loader from 'components/Loader/Loader';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import { ToastContainer } from 'react-toastify';
const Feedback = lazy(() =>
  import(/* webpackChunkName: "Feedback" */ 'pages/Feedback/Feedback')
);

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Container>
          <Routes>
            <Route path="/" element={<Feedback />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Container>
        <ToastContainer />
      </Suspense>
    </>
  );
}
