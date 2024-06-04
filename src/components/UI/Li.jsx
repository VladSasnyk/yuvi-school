/* eslint-disable react/prop-types */
import { GiCheckMark } from "react-icons/gi";

const Li = ({ children, title }) => {
    return (
        <li className="flex items-start" >
            <GiCheckMark className="w-[10%] mt-2"/>
            <div className="w-[90%] flex flex-col gap-2">
                <h3 className="text-[#c14649] font-bold text-xl max-sm:text-base">{title}</h3>
                <p className="font-[400] text-xl text-[rgb(52, 53, 57)] max-sm:text-sm">{children}</p>
            </div>
        </li>
    )
}

export default Li;