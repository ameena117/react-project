import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

function Products() {
  const { id } = useParams();
  // console.log(id);
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const resp = await fetch(`https://ecommerce-node4.vercel.app/products/category/${id}`);
    const data = await resp.json();
    setProducts(data.products);
    console.log(products);
  }

  useEffect(() => {
    getProducts();
  }, [id]);

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