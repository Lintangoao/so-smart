import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Loginn from "./components/Loginn";
import Users from "./pages/Users";
import Laporan from "./pages/Laporan";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddLaporan from "./pages/AddLaporan";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginn/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/users/add" element={<AddUser/>} />
          <Route path="/users/edit/:id" element={<EditUser/>} />
          <Route path="/laporan" element={<Laporan/>} />
          <Route path="/laporan/add" element={<AddLaporan/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
