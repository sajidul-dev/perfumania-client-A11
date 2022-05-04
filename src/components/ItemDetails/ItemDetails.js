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
    console.log(item);
    return (
        <div>
            <h1>Hello</h1>
            <img src={item.picture} alt="" />
        </div>
    );
};

export default ItemDetails;