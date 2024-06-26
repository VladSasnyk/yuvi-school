/* eslint-disable react/prop-types */
import { Link } from "react-scroll";

const NavItem = ({ to, onClick, children ,href}) => {
    return (
        <li className="cursor-pointer ">
            <Link
                activeClass="active"
                to={to}
                href={href}
                spy={true}
                smooth={true}
                duration={1200}
                className="p-2 transition duration-500 ease-in-out hover:border-b-2 hover:border-[#fcd3e1] hover:text-[#fcd3e1] max-lg:border-b-2 max-lg:border-white max-lg:text-[#c14649]"
                onClick={onClick}
            >
                {children}
            </Link>
        </li>
    );
};

export default NavItem;