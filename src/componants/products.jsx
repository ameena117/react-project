import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

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
  
  return (
    <div>
      <div className="products">
        {products.map(product => (
          <div className="product" key={product._id}>
            <img src={product.mainImage.secure_url} alt={product.name} width={"55px"} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products