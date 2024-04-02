import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const getProduct = async () => {
        const resp = await fetch(`${import.meta.env.VITE_URL}/products/${id}`);
        const data = await resp.json();
        setProduct(data.product);
        console.log(product);
    }
    
    useEffect(() => {
        getProduct();
    }, []);

    return (
      <div>{product.name}</div>
    )
  }
  
  export default Product