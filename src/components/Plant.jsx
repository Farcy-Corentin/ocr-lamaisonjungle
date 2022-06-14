import "../styles/Plant.css"
import {CareScale} from "./CareScale";


export const Plant = ({ name, cover, light, water }) => {
  return (
      <li className="lmj-plant-item">
          <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
          {name}
          <div>
              <CareScale careType="light" scaleValue={light}/>
              <CareScale careType="water" scaleValue={water}/>
          </div>
      </li>
  )
}