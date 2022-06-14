import {plants} from "../datas/plants"
import "../styles/ShoppingList.css"
import {Plant} from "./Plant";
import {useState} from "react";
import {Categories} from "./Categories";

export const ShoppingList = ({cart, updateCart}) => {
    const [activeCategory, setActiveCategory] = useState("")
    const categories = plants.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    const addToCart = (name, price) => {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            return updateCart([
                ...cartFilteredCurrentPlant,
                {name, price, amount: currentPlantSaved.amount + 1}
            ])
        }

        return updateCart([...cart, {name, price, amount: 1}])
    }

    return (
        <div className="lmj-shopping-list">
            <Categories categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
            <ul className="lmj-plant-list">
                {plants.map(({name, cover, id, light, water, price,category}) => !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <Plant
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                    ) : null
                )}
            </ul>
            {}
        </div>
    )
}