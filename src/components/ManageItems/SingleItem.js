import React from 'react';


const SingleItem = ({ item }) => {
    const { name, price, about, picture, quantity, supplierName } = item

    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <img src={picture} alt="" />
            <h4>Name :{name}</h4>
            <p>Price :{price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier: {supplierName}</p>
            <p><small>About : {about}</small></p>
            <button className='btn btn-primary'>Update</button>
            <button className='btn btn-danger'>Delete</button>
        </div>
    );
};

export default SingleItem;