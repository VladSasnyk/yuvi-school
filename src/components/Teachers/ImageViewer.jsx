
/* eslint-disable react/prop-types */


const ImageViewer = ({ imageUrl, onClose }) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center z-50 pt-20 max-md:items-center max-md:pt-0 hover:cursor-zoom-out" onClick={onClose}>
            <div className="max-w-[70vw] max-h-[70vh] max-md:max-w-full max-md:max-h-[50vh]">
                <img className="w-full h-full object-container" src={imageUrl} alt="Full-screen" />
            </div>
        </div>
    );
};

export default ImageViewer;