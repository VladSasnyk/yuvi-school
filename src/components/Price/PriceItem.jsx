
/* eslint-disable react/prop-types */

import Button from "../UI/Button";

const PriceItem = props => {
    return (
        <div className="h-full w-1/3 flex items-center flex-col 
        border-black border-4 shadow-xl rounded-3xl 
        gap-8 pt-14 pb-32 px-8 max-[1100px]:w-full priceItem
        hover:bg-green-700/10 relative
        bg-[#F1F1F0]">
            {/* <div className="priceItemImg  text-[500%] h-1/5 text-green-700/70">{props.image}</div> */}
            <h2 className="text-2xl font-bold">{props.title}</h2>
            <ul className= 'max-sm:p-4 flex flex-col gap-4'>
                {props.children}
            </ul>
            {/* <div className="w-full w-100 h-auto flex justify-between rounded-t-xl text-xl max-[1300px]:text-lg max-sm:flex-col text-center">
                <p className="max-sm:w-full w-1/2 bg-green-700/70 p-4 text-white whitespace-nowrap ">Діти - {props.price1}</p>
                <p className="max-sm:w-full w-1/2 bg-green-700/70 p-4 pl-0 text-white text-center whitespace-nowrap "> {props.price2} - Дорослі</p>
            </div> */}
            <Button className='absolute bottom-10 right-10 text-2xl w-[50%] font-[600] text-white self-end'>{props.price}</Button>
        </div>


    )

}

export default PriceItem;