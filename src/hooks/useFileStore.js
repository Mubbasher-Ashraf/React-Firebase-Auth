import { useState, useEffect } from 'react';
import { fileStore } from '../firebase/index';

const UseFileStore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = fileStore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(da => {
                    documents.push({ ...da.data() });
                });
                setDocs(documents);
            })
        return () => unsub();
    }, [collection]);

    return { docs };
};

export default UseFileStore;