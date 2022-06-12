import {Header} from "./components/Header";
import {Cart} from "./components/Cart";
import {ShoppingList} from "./components/ShoppingList";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Cart/>
            <ShoppingList/>
            <Footer/>
        </div>
    );
}

export default App;
