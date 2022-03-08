import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BeforeLoginRouter from "./routers/BeforeSignInRouter";
import LandingPageRouter from "./routers/LandingPageRouter";
import SignUpRouter from "./routers/SignUpRouter";
import SignInHelpRouter from "./routers/SignInHelpRouter";
import Loading from "./components/common/Loading";
//import { onCheckedAutoSignIn } from './api/sign';
import SignOutRouter from "./routers/SignOutRouter";
import ManageProfileRouter from "routers/ManageProfileRouter";
import AccountManageRouter from "routers/AccountManageRouter";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ErrorPage from "routers/ErrorPage";
import axios from "axios";
import { getCookie, setCookie } from "api/browserStorage";
const AfterSignInRouter = React.lazy((): any =>
    import("./routers/AfterSignInRouter"),
);
const queryClient = new QueryClient();

function App() {

    axios.interceptors.request.use(function (request: any) {
        if (!request.headers.hasOwnProperty("access_token")) {
            const access_token = getCookie("access_token");
            if (access_token) {
                request.headers.access_token = access_token;
            }
            const refresh_token = getCookie("refresh_token");
            if (refresh_token) {
                request.headers.refresh_token = refresh_token;
            }
        }
        return request;
    });

    axios.interceptors.response.use(function (response: any) {
        if (response.headers.hasOwnProperty("access_token")) {
            const access_token = response.headers.access_token;
            setCookie("access_token", access_token, 1);
            axios.defaults.headers.common["access_token"] = response.headers.access_token;
        }
        return response;
    });

    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/*" element={<LandingPageRouter />}>
                            <Route
                                path="signin"
                                element={<BeforeLoginRouter />}
                            />
                            <Route
                                path="browse"
                                element={
                                    <Suspense fallback={<Loading />}>
                                        <AfterSignInRouter />
                                    </Suspense>
                                }
                            />
                            <Route
                                path="signup"
                                element={<SignUpRouter />}
                            ></Route>
                            <Route
                                path="signinhelp"
                                element={<SignInHelpRouter />}
                            ></Route>
                            <Route
                                path="signout"
                                element={<SignOutRouter />}
                            ></Route>
                            <Route
                                path="manageProfile"
                                element={<ManageProfileRouter />}
                            ></Route>
                            <Route
                                path="yourAccount"
                                element={<AccountManageRouter />}
                            ></Route>
                            <Route path="*" element={<ErrorPage />}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
