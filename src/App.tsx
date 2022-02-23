import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BeforeLoginRouter from "./routers/BeforeSignInRouter";
import LandingPageRouter from "./routers/LandingPageRouter";
import SignUpRouter from "./routers/SignUpRouter";
import SignInHelpRouter from "./routers/SignInHelpRouter";
import Loading from "./components/common/Loading";
//import { onCheckedAutoSignIn } from './api/sign';
import { getCookie } from "./api/browserStorage";
import SignOutRouter from "./routers/SignOutRouter";
import NotFound from "./routers/NotFound";
import ManageProfileRouter from "routers/ManageProfileRouter";
import AccountManageRouter from "routers/AccountManageRouter";
import {QueryClient, QueryClientProvider }  from"react-query";
import {ReactQueryDevtools } from 'react-query/devtools'
import MainHeader from "components/common/MainHeader";
const AfterSignInRouter = React.lazy(
  (): any => import("./routers/AfterSignInRouter"),
);

const queryClient = new QueryClient();

function App() {
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    const token: any = getCookie("refreshToken");
    setRefreshToken(token);
  }, []);

  /* const [autoSignIn, setAutoSignIn] = useState(false);
  useEffect(() => {  // 처음 앱 시작 시 autoLogin 실행
    const autoCheck = onCheckedAutoSignIn();
    setAutoSignIn(autoCheck);
  }, [autoSignIn]); */ // 로그인 저장 기능 보류, 넷플릭스에서는 체크와 관계없이 자동로그인

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LandingPageRouter />} >
            <Route path="signin" element={<BeforeLoginRouter />} />
            <Route path="browse" element={     <Suspense fallback={<Loading />}>
                <AfterSignInRouter />
              </Suspense>} />
              <Route path="signup" element={<SignUpRouter />}></Route>
          <Route path="signinhelp" element={<SignInHelpRouter />}></Route>
          <Route path="signout" element={<SignOutRouter />}></Route>
          <Route
            path="manageProfile"
            element={<ManageProfileRouter />}
          ></Route>
          <Route path="yourAccount" element={<AccountManageRouter />}></Route>
          <Route path="notfound" element={<NotFound />}></Route>
          </Route>
          </Routes>
      </BrowserRouter>
    </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
