import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Body from "./Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from './Components/About'
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import UserContext from "./utilis/UserContext";
import { Provider } from "react-redux";
import ResturantMenu from "./Components/ResturantMenu"
import appStore from "./redux-store/appStore";
import Header from "./Components/Header"
import Cart from "./Components/Cart";
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
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
    <div className="">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
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
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
