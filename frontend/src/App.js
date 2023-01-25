import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Bar from "./components/Bar";
import OrderingMenu from "./components/OrderingMenu";
import {useState} from "react";
import OrderType from "./components/OrderType";
import Welcome from "./components/Welcome";
import EditMenu from "./components/EditMenu";
import PayMenu from "./components/PayMenu";
import OrderCode from "./components/OrderCode";
import AdminLogin from "./components/AdminLogin";
function App() {
    const [takeout, setTakeout] = useState(false)
    return (
        <div className="App">
            <BrowserRouter>
                <Bar takeout={takeout} setTakeout={setTakeout}></Bar>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/getstarted" element={<OrderType takeout={takeout} setTakeout={setTakeout}/>} />
                    <Route path="/getstarted/menu" element={<OrderingMenu />} />
                    <Route path="/getstarted/menu/add" element={<EditMenu />} />
                    <Route path="/getstarted/payfor" element={<PayMenu />} />
                    <Route path="/getstarted/payfor/ordercode" element={<OrderCode />} />
                    <Route path="/adminlogin" element={<AdminLogin />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
