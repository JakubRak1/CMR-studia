import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Schools from "./pages/Schools";
// import Home from "./pages/Home";
import CookiesMessage from "./components/CookiesMessage";
import MainNavbar from "./components/MainNavbar";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUserUsername = Cookies.get("user");
    const savedUserRights = Cookies.get("admin_rights");
    if (savedUserUsername && savedUserRights) {
      const savedUser = {
        username: savedUserUsername,
        admin_rights: savedUserRights,
      };
      setUser(savedUser);
    }
  }, []);
  return (
    <>
      <MainNavbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" />
        <Route path="/home" />
        {/* <Route
          path="/home"
          element={<Home user={user} setUser={setUser}></Home>}
        />
        <Route path="/" element={<Home user={user} setUser={setUser}></Home>} /> */}
        <Route path="/login" element={<Login setUser={setUser}> </Login>} />
        <Route path="/routes" element={<div>Trasy do robienia</div>} />
        <Route path="/schools" element={<Schools user={user} />} />
        <Route path="/concerts" element={<div>Kocerty do robienia</div>} />
        <Route path="/teams" element={<div>Zespoły do robienia</div>} />
        <Route path="/musicians" element={<div>Pracownicy do robienia</div>} />
        <Route path="/maps" element={<div>Mapy do robienia</div>} />
        <Route path="/users" element={<div>Użytkownicy do robienia</div>} />
        {/* To fix error page */}
        <Route path="*" element={<Error />} />
      </Routes>
      <CookiesMessage />
    </>
  );
}

export default App;
