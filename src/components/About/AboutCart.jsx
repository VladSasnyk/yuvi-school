/* eslint-disable react/prop-types */

// bg-gradient-to-tl from-sky-900/50 via-green-600/80 to-stone-600/50
//     bg-gradient-to-b from-green-700/80 via-slate-700/80 to-green-700/80
const AboutCart = props => {
    return <div className={
        `aboutCart text-3xl border-2 w-full rounded-3xl min-h-[35vh] relative
        flex items-center justify-center text-center p-4 cursor shadow-xl
        border-[#3F7B5B]
        `} >
        <p className="text-center z-10 font-semibold">{props.children} </p>
        <div className="absolute z-0 text-[700%] opacity-50 text-green-700">{props.back}</div>
    </div>
}

export default AboutCart;