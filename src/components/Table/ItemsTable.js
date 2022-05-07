import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const ItemsTable = ({ item }) => {
    // const { name, price, about, picture, quantity, supplierName } = item
    console.log(item?.name);
    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>

                        <th>ID: {item?._id}</th>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <th key={index}>{item?.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>{item?.name}</td>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <td key={index}> {item?.name}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>2</td>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <td key={index}> {item?.price}</td>
                        ))}
                    </tr>

                </tbody>
            </Table>
        </div>
    );
};

export default ItemsTable;