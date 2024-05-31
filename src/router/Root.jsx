import { createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loding from "../pages/loding/Loding";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const SignUpPage = lazy(() =>
  import("../pages/account/sign/sign_up/SignUpPage")
);
const SignInPage = lazy(() =>
  import("../pages/account/sign/sign_in/SignInPage")
);
const Root = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loding />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "account",
        children: [
          {
            path: "sign-up",
            element: (
              <Suspense fallback={<Loding />}>
                <SignUpPage />
              </Suspense>
            ),
          },
          {
            path: "sign-in",
            element: (
              <Suspense fallback={<Loding />}>
                <SignInPage />
              </Suspense>
            ),
          },
          {
            path: "search_id",
            element: <Suspense fallback={<Loding />}></Suspense>,
          },
          {
            path: "search_pw",
            element: <Suspense fallback={<Loding />}></Suspense>,
          },
        ],
      },
    ],
  },
]);

export default Root;
