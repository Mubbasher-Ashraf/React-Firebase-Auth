import { useState } from 'react'
import { Image, Alert } from 'react-bootstrap';
import ImageGrid from './ImageGrid';
import ProgressBar from './ProgressBar';
import Modal from './Modal';
import image from '../logo192 copy.png';

const UploadFile = () => {
    const [file, setFile] = useState(null);
    const [selected, selectedImage] = useState(null);
    const [error, setError] = useState(false);
    const validTypes = ['image/png', 'image/jpg', 'image/jpeg'];

    const changeHandler = event => {
        const selected = event.target.files[0];
        if (selected && validTypes.includes(selected.type)) {
            setFile(selected);
            setError(false);
        } else {
            setFile(null);
            setError('Selected File Type Not Supported. Supoorted type are [png, jpg, jpeg]');
        }
    };

    return (
        <>
            <div className="cf" style={{ display: 'grid', placeItems: 'center' }}>
                <Image src={image} rounded />
                <input
                    type="file"
                    placeholder="Choose File"
                    onChange={changeHandler}
                />
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
            { error && <Alert variant="danger">{error}</Alert>}
            <ImageGrid selectedImage={selectedImage} />
            { selected && <Modal selected={selected} selectedImage={selectedImage} />}
        </>
    );
};
export default UploadFile;