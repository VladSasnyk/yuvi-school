/* eslint-disable react/prop-types */

const RulesItem = ({ children, icon }) => {
    return (
        <div className="w-[50%] max-md:w-[100%] border-[#3A6D5B] border-4 p-10 flex gap-4 max-md:flex-col max-md:p-6">
            <p className="w-[95%] text-center">{children}</p>
            <span className="text-[400%] text-[#3A6D5B] flex items-center justify-center">{icon}</span>
        </div>

    )
}

export default RulesItem;