import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const ManageItems = () => {
    const [allItems, setAllItems] = useState([])

    useEffect(() => {

        fetch('http://localhost:5000/allItems')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])

    return (
        <div className='row container mx-auto mt-5'>
            {allItems.map(item => <Item key={item._id}
                item={item}
            ></Item>)}
        </div>
    );
};

export default ManageItems;