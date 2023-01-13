import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Loginn from "./components/user/Loginn";
import Users from "./pages/admin/user/Users";
import Laporan from "./pages/pelayanan/laporan/Laporan";
import EditUser from "./pages/admin/user/EditUser";
import AddLaporan from "./pages/pelayanan/laporan/AddLaporan";
import Register from "./components/user/Register";
import Home from "./pages/user/Home";
import LoginAdmin from "./components/admin/LoginAdmin";
import Permohonan from "./pages/pelayanan/permohonan/Permohonan";
import AddPermohonan from "./pages/pelayanan/permohonan/AddPerrmohonan";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginn/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/users/edit/:id" element={<EditUser/>} />
          <Route path="/laporan" element={<Laporan/>} />
          <Route path="/laporan/add" element={<AddLaporan/>} />
          <Route path="/loginAdmin" element={<LoginAdmin/>} />
          <Route path="/permohonan" element={<Permohonan/>} />
          <Route path="/permohonan/add" element={<AddPermohonan/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
