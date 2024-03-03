import React, { useEffect, useState } from 'react'

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        const resp = await fetch('https://ecommerce-node4.vercel.app/categories/active?page=1&limit=10');
        const data = await resp.json();
        setCategories(data.categories);
        console.log(categories);
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div>
            <div className="categories">
                {categories.map(category => (
                    <div className="category" key={category._id}>
                        <img src={category.image.secure_url} alt={category.name} width={"55px"}/> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories