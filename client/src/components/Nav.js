import { NavLink } from "react-router-dom";
function Nav() {
    return (
        <header>
        <nav>
            <div><NavLink to="/"><h1>Secumer</h1></NavLink></div>
            <ul>
                <li><NavLink to="/rdv">RDV</NavLink></li>
                <li><NavLink to="/boutique">Boutique</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
        </header>
    );
}

export default Nav;