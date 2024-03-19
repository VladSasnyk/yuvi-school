
/* eslint-disable react/prop-types */

import Button from "../UI/Button";

const PriceItem = props => {
    return (
        <div className="min-w-max h-full flex items-center flex-col m-auto justify-around py-4 max-[1400px]:w-[65%]
        border-black border-4 shadow-xl rounded-3xl
        gap-8 max-sm:gap-2 px-4 max-[1100px]:w-[50vw] priceItem max-[600px]:w-[85vw]
        bg-[#F1F1F0] pb-10">
            <h2 className="text-2xl font-bold max-sm:text-lg">{props.title}</h2>
            <ul className='max-sm:p-2 flex flex-col gap-4 max-sm:gap-1 self-start'>
                {props.children}
            </ul>
            <div className="flex w-full gap-20 max-md:flex-col max-[1400px]:gap-6 max-sm:gap-2">
                <div className="w-1/2 text-center gap-4 flex flex-col max-md:w-full">
                    <h3 className="font-bold text-lg max-md:text-base">дорослі</h3>
                    <Button className='self-center text-xl font-[600] text-white self-end max-md:w-[75%] max-sm:text-base py-2'>{props.price1}</Button>
                </div>
                <div className="w-1/2 text-center gap-4 flex flex-col max-md:w-full">
                    <h3 className="font-bold text-lg max-md:text-base">діти</h3>
                    <Button className='self-center text-xl font-[600] text-white self-end max-md:w-[75%] max-sm:text-base py-2'>{props.price2}</Button>
                </div>

            </div>

        </div>


    )

}

export default PriceItem;