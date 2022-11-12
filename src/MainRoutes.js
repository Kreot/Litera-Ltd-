import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddressPage from "./pages/AddressPage";
import ContactsPage from "./pages/ContactsPage";

const mainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/address",
      element: <AddressPage />,
      id: 2,
    },
    {
      link: "/contacts",
      element: <ContactsPage />,
      id: 3,
    },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((item) => (
        <Route path={item.link} element={item.element} key={item.id} />
      ))}
    </Routes>
  );
};

export default mainRoutes;
