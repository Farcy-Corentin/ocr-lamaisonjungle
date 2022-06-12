import {plants} from "../datas/plants"
import "../styles/ShoppingList.css"
import {Plant} from "./Plant";

export const ShoppingList = () => {
    const categories = plants.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div className="">
            <ul>
                {categories.map((category) =>(
                    <li key={category}>{ category }</li>
                ))}
            </ul>
            <ul className="lmj-plant-list">
                {plants.map(({name,cover, id, light, water}) => (
                    <Plant name={name} cover={cover} id={id} light={light} water={water} />
                ))}
            </ul>
            {}
        </div>
    )
}