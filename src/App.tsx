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
const AfterSignInRouter = React.lazy(
    (): any => import("./routers/AfterSignInRouter"),
);
const queryClient = new QueryClient();

function App() {
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
