import { Route, Router, Routes } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/index.tsx";
import { NewServer } from "./pages/new-server/index.tsx";
import { NewServerConfig } from "./pages/new-server/ui/config/index.tsx";
import { NewServerContainer } from "./pages/new-server/ui/container/index.tsx";

const App = () => (
  <Routes>
    <Route path="/new" element={<NewServer />} />
    <Route path="/new/config" element={<NewServerConfig />} />
    <Route path="/new/container" element={<NewServerContainer />} />
    <Route path="/" element={<Dashboard />} />
    {/* <Route path="/server" element={<Server />} /> */}
    {/* <Route path="/alram" element={<Alram />} /> */}
    {/* <Route path="/setting" element={<Setting />} /> */}
  </Routes>
);

export default App;