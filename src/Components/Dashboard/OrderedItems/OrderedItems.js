import React from 'react';

const OrderedItems = ({order}) => {
    return (
        <tr>
        <td>{order.serviceName}</td>
        <td>{order.servicePrice}</td>
        <td>{order.name}</td>
        <td>{order.email}</td>
      </tr>
    );
};

export default OrderedItems;