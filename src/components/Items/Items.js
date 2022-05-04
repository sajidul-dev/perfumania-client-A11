import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className=' container mx-auto'>
            <h2 className='text-center'>This is from items {items.length}</h2>
            <div className='row g-5'>
                {
                    items.map(item => <Item key={item._id}
                        item={item}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;