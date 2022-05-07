import React from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const useDelivered = ({ item }) => {
    const { itemId } = useParams()
    const itemQuantity = item.quantity
    const updateQuantity = parseInt(itemQuantity) - 1
    const quantity = { ...item, quantity: updateQuantity }
    const url = `https://secure-retreat-97587.herokuapp.com/item/${itemId}`
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

};

export default useDelivered;