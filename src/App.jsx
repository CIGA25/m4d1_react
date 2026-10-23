import { Navigate, Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./assets/pages/Home"
import Footer from "./components/Footer"
import Pizza from "./assets/pages/Pizza"
import Cart from "./assets/pages/Cart"
import Register from "./assets/pages/Register"
import Login from "./assets/pages/Login"
import Profile from "./assets/pages/Profile"
import NotFound from "./assets/pages/NotFound"
import { useContext } from "react"
import { UserContext } from "./contexts/UserContext"

function App() {
    const { token } = useContext(UserContext);

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={token == false ? <Register/> : <Navigate to="/"/> } />
                <Route path="/login" element={token == false ? <Login/> : <Navigate to="/"/> } />
                <Route path="/cart" element={token == true ? <Cart/> : <Navigate to="/login"/> } />
                <Route path="/pizza/:id" element={<Pizza/>} />
                <Route path="/profile" element={token == true ? <Profile/> : <Navigate to="/login"/> } />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer/>
        </>
    )
};

export default App;