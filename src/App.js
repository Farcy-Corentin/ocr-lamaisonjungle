import {Header} from "./components/Header";
import {Cart} from "./components/Cart";
import {ShoppingList} from "./components/ShoppingList";

function App() {
    return (
        <div className="App">
            <Header/>
            <Cart/>
            <ShoppingList/>
        </div>
    );
}

export default App;
