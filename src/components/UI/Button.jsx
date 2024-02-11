/* eslint-disable react/prop-types */

const Button = props => {

    // return <button type="button"
    //     onClick={props.onClick}
    //     id={props.id}
    //     className={`shadow-xl bg-gradient-to-r from-green-700/70 via-green-800 to-green-900/70 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-600 dark:focus:ring-green-800 font-medium rounded-lg  px-5 py-3 text-center me-2 mb-2 ${props.className}`}>
    //     {props.children}
    // </button>
    return <button type="button"
        onClick={props.onClick}
        id={props.id}
        className={`bg-[#3F7B5B] rounded-[50px] px-4 py-4 shadox-xl hover:bg-[#368a5d] ${props.className}`}>
        {props.children}
    </button>
}

export default Button;
