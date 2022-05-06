import React, { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const quantityRef = useRef('')
    const { itemId } = useParams()
    const [item, setItem] = useState([])
    useEffect(() => {
        const url = `https://secure-retreat-97587.herokuapp.com/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item])


    const handleDelivered = (id) => {
        const itemQuantity = item.quantity
        const updateQuantity = parseInt(itemQuantity) - 1
        const quantity = { ...item, quantity: updateQuantity }
        const url = `https://secure-retreat-97587.herokuapp.com/item/${id}`
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
    const addQuantity = (e) => {
        e.preventDefault()
        const newQuantity = quantityRef.current.value
        const itemQuantity = item.quantity
        const updateQuantity = parseInt(itemQuantity) + parseInt(newQuantity)
        const quantity = { ...item, quantity: updateQuantity }
        const url = `https://secure-retreat-97587.herokuapp.com/item/${item._id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)

        })
            .then(res => res.json())
            .then(data => {
                toast.success('Added Quantity', { id: 'Sajid' })
                e.target.reset()
            })

    }
    return (
        <div className='text-center'>
            <h1>Hello</h1>
            <img src={item.picture} alt="" />
            <h3>Name: {item.name}</h3>
            <p>ID: {item._id}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleDelivered(item._id)} className='btn btn-primary'>Delivered</button>



            <form className='my-5' onSubmit={addQuantity}>
                <label htmlFor="quantity">Restock {item.name}</label>
                <br />
                <input className='rounded p-2' ref={quantityRef} type="number" name="quantity" placeholder='Enter Quantity' />
                <br />
                <input className='my-2' type="submit" value="ADD" />
            </form>


        </div>
    );
};

export default ItemDetails;