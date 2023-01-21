import {useSelector} from "react-redux";

const EditMenu = () => {
    const currentOrder = useSelector((state) => state.currentOrder.currentProduct)
    console.log(currentOrder)
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
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4">
                <div className="flex justify-between">
                    <div>Hello</div>
                    <div>Hello</div>
                </div>
            </div>
        </div>
    )
}
export default EditMenu;