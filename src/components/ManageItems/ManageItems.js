import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const ManageItems = () => {
    const [allItems, setAllItems] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        fetch('https://secure-retreat-97587.herokuapp.com/allItems')
            .then(res => res.json())
            .then(data => {
                <Loading></Loading>
                setAllItems(data)
            })
    }, [allItems])

    const handleUpdate = (id) => {
        navigate(`/item/${id}`)
    }

    const handleDelete = (id) => {
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            const url = `https://secure-retreat-97587.herokuapp.com/item/${id}`
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
        <div className='container mt-5'>
            <Table responsive>
                <thead>
                    <tr>

                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Qunatity</th>
                        <th>Supplier</th>
                        <th>About</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allItems.map(item =>
                            <>

                                <tr>
                                    <td><img className='rounded-circle w-25' src={item?.picture} alt="" /></td>
                                    <td>{item?.name}</td>
                                    <td>{item?.price}</td>
                                    <td>{item?.quantity}</td>
                                    <td>{item?.supplierName}</td>
                                    <td>{item?.about.slice(0, 50)}...</td>
                                    <td><button onClick={() => handleUpdate(item?._id)} className='btn btn-primary'>Update</button></td>
                                    <td><button onClick={() => handleDelete(item?._id)} className='btn btn-danger'>Delete</button></td>
                                </tr>
                            </>
                        )
                    }

                </tbody>
            </Table>


            {/* {
                allItems.map(item => <ItemsTable key={item._id} item={item}></ItemsTable>)
            } */}
            {/* <ItemsTable></ItemsTable> */}
        </div>
    );
};

export default ManageItems;