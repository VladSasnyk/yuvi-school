/* eslint-disable react/prop-types */

const Title = props => {
    // text-[#3f7b5b]
    return <h1 className="max-md:text-4xl text-center text-6xl font-bold  text-shadow-lg max-sm:text-3xl" id={props.id}>
        {props.children}
    </h1>
}

export default Title;