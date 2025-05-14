import { Route, Router, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/index.tsx";

const App = () => (
  <Routes>
    {/* <Route path="/new" element={<NewServer />} /> */}
    <Route path="/" element={<Dashboard />} />
    {/* <Route path="/server" element={<Server />} /> */}
    {/* <Route path="/alram" element={<Alram />} /> */}
    {/* <Route path="/setting" element={<Setting />} /> */}
  </Routes>
);

export default App;