import usefireStore from '../hooks/useFileStore';


const ImageGrid = ({ selectedImage }) => {
    const { docs } = usefireStore('images');
    return (
        <div className="img-grid">
            { docs && docs.map((doc, index) => (
                <div className="img-wrap" key={index} onClick={() => selectedImage(doc.imageUrl)}>
                    <img src={doc.imageUrl} alt="Uploaded_Image here" />
                </div>
              ))
            }
        </div>
    )
};

export default ImageGrid;
