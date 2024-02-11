/* eslint-disable react/prop-types */

const Title = props => {
    // text-[#3f7b5b]
    return <h1 className="max-md:text-4xl text-center text-7xl font-bold  text-shadow-lg" id={props.id}>
        {props.children}
    </h1>
}

export default Title;