import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

function Products() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const getCategoryProducts = async () => {
    const resp = await fetch(`${import.meta.env.VITE_URL}/products/category/${id}`);
    const data = await resp.json();
    setProducts(data.products);
    console.log(products);
  }
  useEffect(() => {
    getCategoryProducts();
  }, [id]);

  const getAllProducts = async () => {
    const resp = await fetch(`${import.meta.env.VITE_URL}/products`);
    const data = await resp.json();
    setProducts(data.products)
    console.log(products);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  const addToCart = async (id) => {
    const token = localStorage.getItem('user');
    const data = await axios.post(`${import.meta.env.VITE_URL}/cart`, {
      productId: id
    },
      {
        headers: {
          Authorization: `Tariq__${token}`
        }
      })
    console.log(data);
  }
  return (
    <div>
      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <>
            <Link to={`../product/${product._id}`} className="product" key={product._id}>
              <img src={product.mainImage.secure_url} alt={product.name} width={"55px"} />
            </Link>
            <button onClick={() => addToCart(product._id)}>Add To Cart</button>
          </>
        ))}
      </div>
    </div>
  )
}

export default Products