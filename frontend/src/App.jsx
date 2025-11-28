import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./routes/Routes";
import { SignupPage } from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
