import { useState, useEffect } from 'react';
import { storage, fileStore } from '../firebase/index';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = storage.ref(file.name);
        const collectionRef = fileStore.collection('images');
        
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
                setError(err);
        }, async () => {
            const url = storageRef.getDownloadURL();
            // await collectionRef.doc('URL').set({ url, createdAt: Date.now });
            setUrl(url);
        });
    }, [file]);
    
    return { url, progress, error };
};

export default useStorage;