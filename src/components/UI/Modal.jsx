/* eslint-disable react/prop-types */

import ReactDOM from 'react-dom';
import { IoCloseCircle } from "react-icons/io5";

const Backdrop = (props) => {
    return <div className="fixed top-0 left-0 w-full h-screen z-20 bg-black bg-opacity-50" onClick={props.onClose}> </div>
}

const ModalOverlay = (props) => {
    return <div className="h-auto fixed top-[11vh] left-[20%] w-[60%] bg-[#E2E1DD] p-6 text-black rounded-xl shadow-md z-30 slide-down max-sm:top-[5vh] max-[391px]:top-0 max-lg:w-[90%] max-lg:left-[5%]">
        <IoCloseCircle onClick={props.onClose} className='absolute right-[3%] text-5xl text-[#c14649] top-[8%] cursor-pointer max-lg:right-[5%] max-lg:top-[5%] max-sm:hidden' />
        <div className='border-[#c14649] border-2 rounded-xl'>
            {props.children}
        </div>
    </div>
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>, portalElement)}
    </>
}

export default Modal;