import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useCart } from "../context/cart";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../styles/ProductDetailsStyles.css";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCart();

  //inital details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="300"
            width={"350px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Product Details</h1>
          <hr />
          <h6>Name : {product.name}</h6>
          <h6>Description : {product.description}</h6>
          <h6>
            Price :
            {product?.price?.toLocaleString("en-NP", {
              style: "currency",
              currency: "NPR",
            })}
          </h6>
          <h6>Category : {product?.category?.name}</h6>
          <button 
          className="btn btn-dark ms-1"
          onClick={() => {
            setCart([...cart, product]);
            localStorage.setItem(
              "cart",
              JSON.stringify([...cart, product])
            );
            toast.success("Item Added to cart");
          }}
          
         >ADD TO CART</button>
        </div>
      </div>
      <hr />
      
    </Layout>
  );
};

export default ProductDetails;


