import React, { Suspense, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BeforeLoginRouter from './routers/BeforeSignInRouter';
import LandingPageRouter from './routers/LandingPageRouter';
import SignUpRouter from './routers/SignUpRouter';
import SignInHelpRouter from './routers/SignInHelpRouter';
import Loading from './components/common/Loading';
const AfterLoginRouter = React.lazy(() => import('./routers/AfterSignInRouter'));

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPageRouter />}></Route>
          <Route path="/login" element={<BeforeLoginRouter />}></Route>
          <Route path="/browse" element={<Suspense fallback={<Loading />}><AfterLoginRouter /></Suspense>}></Route>
          <Route path="/signup" element={<SignUpRouter />}></Route>
          <Route path="/signinhelp" element={<SignInHelpRouter />}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
