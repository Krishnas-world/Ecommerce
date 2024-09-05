import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/login"; // Make sure to import AuthLogin
import AuthRegister from "./pages/auth/register";

export default function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header here</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>
      </Routes>
    </div>
  );
}
