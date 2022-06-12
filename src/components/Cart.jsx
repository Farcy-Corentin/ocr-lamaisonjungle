import "../styles/Cart.css"
import {useEffect, useState} from "react";

export const Cart = () => {
    const plants = [
        {
            name: "monstera",
            price: 8,
        },
        {
            name: "lierre",
            price: 10,
        },
        {
            name: "bouquet de fleur",
            price: 15
        }
    ]

    const [result, setResult] = useState(0)

    const totalPrice = () => {
        let result = 0
        plants.map(plant => (
            setResult(result += plant.price)
        ))
    }

    useEffect(() => {
        totalPrice()
    }, [])

    return (
        <div className="lmj-cart">
            <ul>
                {plants.map((plant, index) => (
                    <li key={index}>{ plant.name } { plant.price }€</li>
                ))}
            </ul>
            <span>Total: { result }€</span>
        </div>
    )
}