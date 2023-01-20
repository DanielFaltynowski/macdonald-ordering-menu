import {useState} from "react";
import ProductsList from "./ProductsList";

const OrderingMenu = () => {
    const [burgers, setBurgers] = useState([{name: "BigMac", price: 3.99, desc: "simple burger, thats all", vege: false}, {name: "McDouble", price: 4.99, desc: "simple burger, thats all", vege: false}]);
    const [sandwiches, setSandwiches] = useState([{name: "SanChicken", price: 3.49, desc: "simple sandwich, thats all", vege: false}, {name: "SanTofu", price: 3.99, desc: "simple burger, thats all", vege: true}]);
    const [nuggets, setNuggets] = useState([{name: "SanChicken", price: 3.49, desc: "simple sandwich, thats all", vege: false}, {name: "SanTofu", price: 3.99, desc: "simple burger, thats all", vege: true}]);
    const [fands, setFands] = useState([{name: "SanChicken", price: 3.49, desc: "simple sandwich, thats all", vege: false}, {name: "SanTofu", price: 3.99, desc: "simple burger, thats all", vege: true}]);
    const [beverages, setBeverages] = useState([{name: "SanChicken", price: 3.49, desc: "simple sandwich, thats all", vege: false}, {name: "SanTofu", price: 3.99, desc: "simple burger, thats all", vege: true}]);
    const [coffees, setCoffees] = useState([{name: "SanChicken", price: 3.49, desc: "simple sandwich, thats all", vege: false}, {name: "SanTofu", price: 3.99, desc: "simple burger, thats all", vege: true}]);
    const condition = burgers === null || sandwiches === null || nuggets === null || fands === null || beverages === null || coffees === null
    const temp = {
        name: "Product",
        price: 2.99,
        vege: false,
        desc: "some description",
        type: "burgers",
        extras: {
            pickles: 0,
            onion: 0,
            becon: 0,
            lettuce: 0,
            bigbun: 0,
            salt: 0,
            pepper: 0,
            egg: 0,
            butter: 0,
            tomato: 0,
            ice: 0,
            nocofeine: 0,
            sugar: 0,
        }

    }
    const template = (
        <div className="flex flex-col gap-10 pt-24">
            <ProductsList groupOf={burgers} header="BURGERS"></ProductsList>
            <ProductsList groupOf={sandwiches} header="SANDWICHES"></ProductsList>
            <ProductsList groupOf={nuggets} header="NUGGETS"></ProductsList>
            <ProductsList groupOf={fands} header="FRIES & SIDES"></ProductsList>
            <ProductsList groupOf={beverages} header="BEVERAGES"></ProductsList>
            <ProductsList groupOf={coffees} header="COFFEES"></ProductsList>
        </div>
    )
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4">
                {condition && (
                    <div className="flex flex-col gap-10 pt-24">
                        <div className="text-center">Loading...</div>
                    </div>
                )}
                {(!condition) && template}
            </div>
        </div>
    )
}
export default OrderingMenu;