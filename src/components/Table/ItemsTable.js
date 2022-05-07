import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ItemsTable = ({ item }) => {
    const navigate = useNavigate()


    const handleUpdate = (id) => {
        navigate(`/item/${id}`)
    }

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            const url = `https://secure-retreat-97587.herokuapp.com/item/${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('Item deleted')
                })
        }
    }
    return (
        <div>
            <Table responsive>
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
                        <td>{item?.name}</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <td key={index}> {item?.price}</td>
                        ))}
                    </tr>

                </tbody>
                <button onClick={() => handleUpdate(item?._id)} className='btn btn-primary'>Update</button>
                <button onClick={() => handleDelete(item?._id)} className='btn btn-danger'>Delete</button>
            </Table>
        </div>
    );
};

export default ItemsTable;