import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import BeforeLoginRouter from './routers/BeforeSignInRouter';
import LandingPageRouter from './routers/LandingPageRouter';
import SignUpRouter from './routers/SignUpRouter';
import SignInHelpRouter from './routers/SignInHelpRouter';
import Loading from './components/common/Loading';
import { getCookie, getLocalItem, setLocalItem } from './api/browserStorage';
import { onCheckedAutoSignIn } from './api/sign';
const AfterLoginRouter = React.lazy(() => import('./routers/AfterSignInRouter'));

function App() {

  const [autoSignIn, setAutoSignIn] = useState(false);
  useEffect(() => {  // 처음 앱 시작 시 autoLogin 실행
    const autoCheck = onCheckedAutoSignIn();
    setAutoSignIn(autoCheck);
  }, [autoSignIn]);

  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          {autoSignIn && <Route element={<Navigate replace to="/browse" />} />}   {/* path 설정하면 특정 라우팅만 리턴된다... 여러 페이지 리턴시켜줘야하는데.. */}
          <Route index element={<LandingPageRouter />}></Route>
          <Route path="/signin" element={<BeforeLoginRouter />}></Route>
          <Route path="/browse" element={<Suspense fallback={<Loading />}><AfterLoginRouter /></Suspense>}></Route>
          <Route path="/signup" element={<SignUpRouter />}></Route>
          <Route path="/signinhelp" element={<SignInHelpRouter />}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
