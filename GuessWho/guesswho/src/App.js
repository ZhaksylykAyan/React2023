import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Quiz' element={<Quiz />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/SignUp' element={<SignUp />} />
            </Routes>
        </>
    );
}

export default App;