import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Loginn from "./components/user/Loginn";
import Users from "./pages/user/Users";
import Laporan from "./pages/laporan/Laporan";
import EditUser from "./pages/user/EditUser";
import AddLaporan from "./pages/laporan/AddLaporan";
import Register from "./components/user/Register";
import Home from "./pages/user/Home";
import LoginAdmin from "./components/admin/LoginAdmin";

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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
