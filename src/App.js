import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from './Components/About'
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import ResturantMenu from "./Components/ResturantMenu";
import UserContext from "./utilis/UserContext";

const Grocery = lazy(() => import("./Components/Grocery"))

const AppLayout = () => {

  const [userName, setUserName] = useState()

  useEffect(() => {
    const data = {
      name: 'Rishabh Khare'
    }
    setUserName(data.name)
  }, [])


  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="bg-pink-200">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};
//You can also to this by 'CreateHashRouter' it work same as createBrowserRouter
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: '/grocery',
        element: <Suspense fallback={<h1 style={{textAlign: 'center'}}>Loading....</h1>}><Grocery/></Suspense>
      },
      {
        path: "/restaurant/:resId",
        element: <ResturantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
