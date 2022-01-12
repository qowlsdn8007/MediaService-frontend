import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BeforeLoginRouter from './routers/BeforeSignInRouter';
import LandingPageRouter from './routers/LandingPageRouter';
import SignUpRouter from './routers/SignUpRouter';
import SignInHelpRouter from './routers/SignInHelpRouter';
import Loading from './components/common/Loading';
//import { onCheckedAutoSignIn } from './api/sign';
import { getCookie } from './api/browserStorage';
import SignOutRouter from './routers/SignOutRouter';
const AfterLoginRouter = React.lazy(() => import('./routers/AfterSignInRouter'));

function App() {

  const refreshToken = getCookie('refreshToken');

  /* const [autoSignIn, setAutoSignIn] = useState(false);
  useEffect(() => {  // 처음 앱 시작 시 autoLogin 실행
    const autoCheck = onCheckedAutoSignIn();
    setAutoSignIn(autoCheck);
  }, [autoSignIn]); */      // 로그인 저장 기능 보류, 넷플릭스에서는 체크와 관계없이 자동로그인

  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route index element={refreshToken ? <Navigate replace to="/browse" /> : <LandingPageRouter />}></Route>
          <Route path="/signin" element={refreshToken ? <Navigate replace to="/browse" /> : <BeforeLoginRouter />}></Route>
          <Route path="/browse" element={<Suspense fallback={<Loading />}><AfterLoginRouter /></Suspense>}></Route>
          <Route path="/signup" element={<SignUpRouter />}></Route>
          <Route path="/signinhelp" element={<SignInHelpRouter />}></Route>
          <Route path="/signout" element={<SignOutRouter />}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
