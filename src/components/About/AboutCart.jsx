/* eslint-disable react/prop-types */

const AboutCart = props => {
    return <div className={
        `aboutCart text-2xl border-2 w-full rounded-3xl min-h-[30vh] relative max-sm:min-h-[20vh] max-sm:text-xl
        flex items-center justify-center text-center p-4 cursor shadow-xl
        border-[#c14649]
        `} >
        <p className="text-center z-10 font-semibold">{props.children} </p>
        <div className="absolute z-0 text-[700%] opacity-50 text-[#c14649]">{props.back}</div>
    </div>
}

export default AboutCart;