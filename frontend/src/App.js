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
import NotFound from "./components/NotFound";
import EditProduct from "./components/editComponents/EditProduct";
import AddProduct from "./components/editComponents/AddProduct";
import DeleteProduct from "./components/editComponents/DeleteProduct";
import ChangeLogin from "./components/editComponents/ChangeLogin";
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
                    <Route path="/getstarted/payfor/ordercode" element={<OrderCode takeout={takeout} setTakeout={setTakeout}/>} />
                    <Route path="/adminlogin" element={<AdminLogin />} />
                    <Route path="/adminmode/add" element={<AddProduct />} />
                    <Route path="/adminmode/edit" element={<EditProduct />} />
                    <Route path="/adminmode/delete" element={<DeleteProduct />} />
                    <Route path="/adminmode/change" element={<ChangeLogin />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
