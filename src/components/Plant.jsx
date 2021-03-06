import "../styles/Plant.css"
import {CareScale} from "./CareScale";


export const Plant = ({ name, cover, light, water, price }) => {
  return (
      <li className="lmj-plant-item">
          <span className='lmj-plant-item-price'>{price}€</span>
          <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
          {name}
          <div>
              <CareScale careType="light" scaleValue={light}/>
              <CareScale careType="water" scaleValue={water}/>
          </div>
      </li>
  )
}