import "../styles/Cart.css"
import {useState} from "react";

export const Cart = () => {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(true)


    return isOpen ? (
        <div className="lmj-cart">
            <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>
                Fermer
            </button>
            <h2>Panier</h2>
            <div>Monstera: {monsteraPrice}€</div>
            <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
            <h3>Total: { monsteraPrice * cart }€</h3>
            <button onClick={() => updateCart(0)}>Vider</button>
        </div>
    ) : (
        <div className='lmj-cart-closed'>
            <button className="ljm-cart-toggle-button" onClick={() => setIsOpen(true)}>
                Ouvrir le panier
            </button>
        </div>
    )
}