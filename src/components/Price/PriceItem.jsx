
/* eslint-disable react/prop-types */

import Button from "../UI/Button";

const PriceItem = props => {
    return (
        <div className="min-h-[90vh] w-1/2 flex items-center flex-col m-auto justify-around py-4 max-[1400px]:w-[65%]
        border-black border-4 shadow-xl rounded-3xl 
        gap-8 max-sm:gap-2 px-8 max-[1100px]:w-full priceItem
        bg-[#F1F1F0]">
            <h2 className="text-2xl font-bold max-sm:text-lg">{props.title}</h2>
            <ul className='max-sm:p-2 flex flex-col gap-4 max-sm:gap-1'>
                {props.children}
            </ul>
            <Button className='self-center text-2xl w-[50%] font-[600] text-white self-end max-md:w-[75%] max-sm:text-base'>{props.price}</Button>
        </div>


    )

}

export default PriceItem;