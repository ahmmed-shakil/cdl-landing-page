import { Route, Routes } from "react-router";
import LandingPage from "./pages/landing";
import ContentLayout from "./layouts/content";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContentLayout />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  );
}

export default App;
