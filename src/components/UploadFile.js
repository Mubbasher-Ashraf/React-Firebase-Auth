import { useState } from 'react'
import { Image, Alert } from 'react-bootstrap';
import image from '../logo192 copy.png';

function UploadFile() {
    const [file, setFile] = useState(null);
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
            <div style={{ display: 'grid', placeItems: 'center'}}>
                <Image src={ image } rounded />
                <input
                    style={{ position: 'sticky', left: '50%' }}
                    type="file"
                    placeholder="Choose File"
                    onChange={changeHandler}
                />
                { file && <div>{ file.name }</div> }
            </div>
            { error && <Alert variant="danger">{error}</Alert> }
        </>
    )
}
export default UploadFile;