import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cart = () => {
    const [cart, setCart] = useState(null);
    const token = localStorage.getItem('user');

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_URL}/cart`, {
                    headers: {
                      Authorization: `Tariq__${token}`
                    }
                });
                setCart(response.data.products);
            } catch (error) {
                console.error('Error fetching cart data:', error);
            }
        };

        fetchCartData();
    }, [token]);

    return (
        <div>
            <h2>Cart</h2>
            {cart ? (
                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.details.name} - ${item.details.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading cart...</p>
            )}
        </div>
    );
};

export default Cart;
