import "../styles/Categories.css"

export const Categories = ({categories, activeCategory, setActiveCategory}) => {

    return(
        <div className="lmj-categories">
            <select
                value={activeCategory}
                onChange={(e) =>setActiveCategory(e.target.value)}
                className="lmj-categories-select"
            >
                <option value=''>---</option>
                {categories.map((category) => (
                    <option key={category} onClick={() => setActiveCategory(category)}>{category}</option>
                    ))}
            </select>
            <button onClick={() => setActiveCategory('')}>Réinitialiser</button>
        </div>
    )
}