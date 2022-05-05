import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [itemId])
    return (
        <div>
            <h1>Hello</h1>
            <img src={item.picture} alt="" />
            <p>ID: {item._id}</p>
        </div>
    );
};

export default ItemDetails;