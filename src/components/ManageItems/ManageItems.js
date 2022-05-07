import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Loading from '../Shared/Loading';
import ItemsTable from '../Table/ItemsTable';

const ManageItems = () => {
    const [allItems, setAllItems] = useState([])

    useEffect(() => {

        fetch('https://secure-retreat-97587.herokuapp.com/allItems')
            .then(res => res.json())
            .then(data => {
                <Loading></Loading>
                setAllItems(data)
            })
    }, [])

    return (
        <div className='container mt-5'>
            {/* <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <td>Name</td>
                        <td>Price</td>
                        <td>Qunatity</td>
                        <td>Supplier</td>
                        <td>About</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{allItems.map(item => item?.name)}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>3</td>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <td key={index}>Table cell {index}</td>
                        ))}
                    </tr>
                </tbody>
            </Table> */}


            {
                allItems.map(item => <ItemsTable key={item._id} item={item}></ItemsTable>)
            }
            {/* <ItemsTable></ItemsTable> */}
        </div>
    );
};

export default ManageItems;