import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { path } from "utils/constants.js";
import Login from "pages/Login/Login.jsx";
import HomePage from "pages/HomePage/HomePage";
import NotFound from "pages/NotFound/NotFound";
import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";
import "./App.scss";
import { useSelector } from "react-redux";
import HouseholdPage from "pages/HouseholdPage/HouseholdPage";
function App() {
   const token = useSelector((state) => state.user.token);
   return (
      <BrowserRouter>
         {!token ? (
            <Routes>
               <Route path={path.LOGIN} element={<Login />} />
               <Route path="*" element={<Navigate to={path.LOGIN} />} />
            </Routes>
         ) : (
            <Routes>
               <Route path={path.LOGIN} element={<Login />} />
               <Route
                  path={path.HOME}
                  element={
                     <DefaultLayout>
                        <HomePage />
                     </DefaultLayout>
                  }
               />
               <Route
                  path={path.HOUSEHOLD}
                  element={
                     <DefaultLayout>
                        <HouseholdPage />
                     </DefaultLayout>
                  }
               />
               <Route path="*" element={<NotFound />} />
            </Routes>
         )}
      </BrowserRouter>
   );
}

export default App;
