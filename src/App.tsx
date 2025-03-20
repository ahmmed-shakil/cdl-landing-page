import { Route, Routes } from "react-router";
import LandingPage from "./pages/landing";
import ContentLayout from "./layouts/content";
import PrivacyPolicyPage from "./pages/privacy-policy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContentLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Route>
    </Routes>
  );
}

export default App;
