import React, { useEffect, useState } from 'react';
import ItemsTable from '../Table/ItemsTable';
import SingleItem from './SingleItem';

const ManageItems = () => {
    const [allItems, setAllItems] = useState([])

    useEffect(() => {

        fetch('https://secure-retreat-97587.herokuapp.com/allItems')
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [])

    return (
        <div className='row container mx-auto mt-5'>
            {
                allItems.map(item => <ItemsTable key={item._id} item={item}></ItemsTable>)
            }
            {/* <ItemsTable></ItemsTable> */}
        </div>
    );
};

export default ManageItems;