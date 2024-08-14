import { Routes, Route } from "react-router-dom";

import "./globals.css";
import { Home } from "./_root/Pages";
import SigninForm from "./auth/forms/SigninForm";

import AuthLayout from "./auth/forms/AuthLayout";
import RootLayout from "./_root/RootLayout";
import SignUpForm from "./auth/forms/SignUpForm";
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
         {/* public routes */}
        <Route element={<AuthLayout />}>
      \<Route path="/sign-up" element={<SignUpForm />} />
          <Route path="/sign-in" element={<SigninForm />} />

        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
