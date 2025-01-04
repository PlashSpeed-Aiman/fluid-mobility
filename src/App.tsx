import './App.css'
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Toilet from "./pages/Toilet";

function App() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/toilets/:id" element={<Toilet/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
