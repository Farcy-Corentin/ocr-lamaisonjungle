import {Header} from "./components/Header";
import {Cart} from "./components/Cart";
import {ShoppingList} from "./components/ShoppingList";
import {Footer} from "./components/Footer";
import {useState} from "react";

import "../src/styles/Layout.css"


function App() {
    const [cart, updateCart] = useState([])
    return (
        <div className="App">
            <Header/>
            <div className="lmj-layout-inner">
                <Cart cart={cart} updateCart={updateCart}/>
                <ShoppingList cart={cart} updateCart={updateCart}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
