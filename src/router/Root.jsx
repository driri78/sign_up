import { createBrowserRouter } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Loading from "../pages/loading/Loading";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const SignUpPage = lazy(() =>
  import("../pages/account/sign/sign_up/SignUpPage")
);
const SignInPage = lazy(() =>
  import("../pages/account/sign/sign_in/SignInPage")
);
const SearchIdPage = lazy(() =>
  import("../pages/account/search/id/SearchIdPage")
);
const SearchPwPage01 = lazy(() =>
  import("../pages/account/search/pw/SearchPwPage01")
);
const SearchPwPage02 = lazy(() =>
  import("../pages/account/search/pw/SearchPwPage02")
);
const Root = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
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
              <Suspense fallback={<Loading />}>
                <SignUpPage />
              </Suspense>
            ),
          },
          {
            path: "sign-in",
            element: (
              <Suspense fallback={<Loading />}>
                <SignInPage />
              </Suspense>
            ),
          },
          {
            path: "search_id",
            element: (
              <Suspense fallback={<Loading />}>
                <SearchIdPage />
              </Suspense>
            ),
          },
          {
            path: "search_pw",
            element: (
              <Suspense fallback={<Loading />}>
                <SearchPwPage01 />
              </Suspense>
            ),
          },
          {
            path: "search_pw/:id",
            element: (
              <Suspense fallback={<Loading />}>
                <SearchPwPage02 />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

export default Root;
