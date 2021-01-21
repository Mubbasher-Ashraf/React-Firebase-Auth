
const Modal = ({selected, selectedImage }) => {
    const handleClick = (e) => { 
        if (e.target.classList.contains('backdrop')) {
            selectedImage(null);
        }
    };
    return (
        <div className="backdrop" onClick={ handleClick }>
            <img src={selected} alt="Enlarge_image here" />
        </div>
    )
};

export default Modal;