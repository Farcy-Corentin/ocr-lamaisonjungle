import {Header} from "./components/Header";
import {Cart} from "./components/Cart";
import {ShoppingList} from "./components/ShoppingList";
import {Footer} from "./components/Footer";

import "../src/styles/Layout.css"

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="lmj-layout-inner">
                <Cart/>
                <ShoppingList/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
