import { App } from "../App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home.tsx";
import { Contact } from "../pages/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Contact", element: <Contact /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}