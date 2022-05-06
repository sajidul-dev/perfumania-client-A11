import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item])


    const handleDelivered = (id) => {
        const itemQuantity = item.quantity
        const updateQuantity = parseInt(itemQuantity) - 1
        const quantity = { ...item, quantity: updateQuantity }
        const url = `http://localhost:5000/item/${id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)

        })
            .then(res => res.json())
            .then(data => {
                toast.success('Product Delivered', { id: 'Sajid' })
            })

    }
    return (
        <div>
            <h1>Hello</h1>
            <img src={item.picture} alt="" />
            <p>ID: {item._id}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleDelivered(item._id)} className='btn btn-primary'>Delivered</button>
        </div>
    );
};

export default ItemDetails;