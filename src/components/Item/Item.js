import React from 'react';

const Item = ({ item }) => {
    console.log(item);
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='row'>
                <div className='col-4'>
                    <img className='img-fluid' src={item?.picture} alt="" />

                </div>
                <div className='col-8'>
                    <h3>Name:{item?.name}</h3>
                    <h4>Price:{item?.price}</h4>
                    <p className='fw-bold'>Quantity:{item?.quantity}</p>
                    <p>Supplier:{item?.supplierName}</p>
                    <p>About:{item.about.slice(0, 100)}</p>
                    <button>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Item;