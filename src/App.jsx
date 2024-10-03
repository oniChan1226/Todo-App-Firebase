import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Pages/Home/Home.jsx";
import Features from "./Pages/Features/Features.jsx";
import Contact from "./Pages/Contact/Contact.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
