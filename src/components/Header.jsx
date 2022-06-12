import "../styles/Header.css"
import logo from "../assets/logo.png"

export const Header = () => {
    const title = "la maison jungle"

    return (
        <div className="lmj-header">
            <img src={logo} alt="La maison jungle" className="lmj-logo"/>
            <h1 className="lmj-title">{ title.toUpperCase() }</h1>
        </div>
    )
}