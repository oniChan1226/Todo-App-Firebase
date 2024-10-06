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
import NotFound from "./Pages/NotFound/NotFound.jsx"
import { UserAuthContextProvider } from "./components/Contexts/UserAuthContext.jsx"
import SignUp from "./Pages/SignUp/SignUp.jsx";
import TodoPage from "./Pages/TodoPage/TodoPage.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './Pages/ProtectedRoute/ProtectedRoute.jsx'
import LogIn from "./Pages/LogIn/LogIn.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/todo" element={
          <ProtectedRoute>
              <TodoPage /> 
          </ProtectedRoute>
        }/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );



  return (
    <UserAuthContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </UserAuthContextProvider>
  );
}

export default App;
