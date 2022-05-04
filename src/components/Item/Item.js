import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    const { name, picture, price, quantity, supplierName, about, _id } = item
    const navigate = useNavigate()

    const handleUpdate = (id) => {
        navigate(`/item/${id}`)

    }

    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='row'>
                <div className='col-4'>
                    <img className='img-fluid' src={picture} alt="" />

                </div>
                <div className='col-8'>
                    <h3>Name:{name}</h3>
                    <h4>Price:{price}</h4>
                    <p className='fw-bold'>Quantity:{quantity}</p>
                    <p>Supplier:{supplierName}</p>
                    <p>About:{about.slice(0, 100)}</p>
                    <button onClick={() => handleUpdate(_id)}>Update</button>
                    <Link to='/item'></Link>
                </div>
            </div>
        </div>
    );
};

export default Item;