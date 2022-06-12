import {useState} from "react";
import "../styles/Footer.css"

export const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleBlur = () => {
        if(!inputValue.includes("@")) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
        }
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>
                Laissez-nous votre mail :
                <form action="">
                    <input
                        value={inputValue}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </form>
            </div>
        </footer>
    )
}