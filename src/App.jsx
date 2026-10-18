import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./assets/pages/Home"
import Footer from "./components/Footer"
import Pizza from "./assets/pages/Pizza"
import Cart from "./assets/pages/Cart"
import Register from "./assets/pages/Register"
import Login from "./assets/pages/Login"
import Profile from "./assets/pages/Profile"
import NotFound from "./assets/pages/NotFound"

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/cart" element={<Cart/>} />
                <Route path="/pizza/:id" element={<Pizza/>} />
                <Route path="/profile" element={<Profile/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
            <Footer/>
        </>
    )
};

export default App