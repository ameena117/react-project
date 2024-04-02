import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        const resp = await fetch(`${import.meta.env.VITE_URL}/categories/active?page=1&limit=100`);
        const data = await resp.json();
        setCategories(data.categories);
    }

    useEffect(() => {
        getCategories();
    }, []);
    return (
        <div>
            <div className="categories">
                {categories.map(category => (
                    <Link to={`./products/${category._id}`} className="category" key={category._id}>
                        <img src={category.image.secure_url} alt={category.name} width={"55px"} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories