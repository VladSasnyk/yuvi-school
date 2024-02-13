/* eslint-disable react/prop-types */
import { Link } from "react-scroll";

const NavItem = ({ to, onClick, children }) => {
    return (
        <li className="cursor-pointer ">
            <Link
                activeClass="active"
                to={to}
                spy={true}
                smooth={true}
                duration={1200}
                className="p-2 transition duration-500 ease-in-out hover:border-b-2 hover:border-green-700 hover:text-green-700 max-lg:border-b-2 max-lg:border-green-700"
                onClick={onClick}
            >
                {children}
            </Link>
        </li>
    );
};

export default NavItem;