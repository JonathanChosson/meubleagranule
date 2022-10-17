// import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Error from "./Pages/Error"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
