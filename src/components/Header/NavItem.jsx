/* eslint-disable react/prop-types */
import { Link } from "react-scroll";


const NavItem = (props) => {
    const liHover = "p-2 transition duration-500 ease-in-out hover:border-b-2 hover:border-green-700 hover:text-green-700 transition hover:duration-500"

    return <li onClick={props.onClick} className={`list-item cursor-pointer max-sm:w-screen active:text-green-600`}>
        <Link
            activeClass="active"
            to={props.to}
            spy={true}
            smooth={true}
            duration={1200}
            className={`max-sm:block max-sm: w-full ${liHover}`}
            onClick={props.onClick}>
            {props.children}
        </Link>
    </li>
}






export default NavItem;