import React, { useContext } from 'react';
import { userContext } from '../../Context/AuthContext';

const Order = () => {
    const {user} = useContext(userContext);
    return (
        <div>
           
            <h2 className="text-5xl">You have  Orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></OrderRow>)
                        } */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;