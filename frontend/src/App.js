import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Bar from "./components/Bar";
import OrderingMenu from "./components/OrderingMenu";
import {useState} from "react";
import OrderType from "./components/OrderType";
import Welcome from "./components/Welcome";
import EditMenu from "./components/EditMenu";

function App() {
    const [order, setOrder] = useState([{id: 1, name: "burger", price: 3.99, amount: 1}, {id: 2, name: "cheseburger", price: 4.99, amount: 2}, {id: 3, name: "coca-cola", price: 1.49, amount: 1}])
    const [takeout, setTakeout] = useState(false)
    return (
        <div className="App">
            <BrowserRouter>
                <Bar order={order} setOrder={setOrder} takeout={takeout} setTakeout={setTakeout}></Bar>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/getstarted" element={<OrderType takeout={takeout} setTakeout={setTakeout}/>} />
                    <Route path="/getstarted/menu" element={<OrderingMenu />} />
                    <Route path="/getstarted/menu/add" element={<EditMenu order={order} setOrder={setOrder} takeout={takeout} setTakeout={setTakeout}/>} />
                </Routes>
                {/*<OrderingMenu order={order} setOrder={setOrder}></OrderingMenu>*/}
            </BrowserRouter>
        </div>
    );
}

export default App;
