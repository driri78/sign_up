import { createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const loding = <div>로딩중.......</div>;
const SignUpPage = lazy(() =>
  import("../account/sign/pages/sign_up/pages/SignUpPage")
);

const Root = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <Suspense fallback={loding}></Suspense>,
      },
      {
        path: "account",
        children: [
          {
            path: "sign-up",
            element: (
              <Suspense fallback={loding}>
                <SignUpPage />
              </Suspense>
            ),
          },
          {
            path: "sign-in",
            element: <Suspense fallback={loding}></Suspense>,
          },
        ],
      },
    ],
  },
  {},
]);

export default Root;
