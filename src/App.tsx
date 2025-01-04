import './App.css'
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
