import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import "../styles/Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page,setPage] =useState(1);

  // Increase quantity of a product in the cart
  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item._id === productId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

    // Add new item to the cart
const addToCart = (product) => {
  const existingItem = cart.find((item) => item._id === product._id);

  if (existingItem) {
    // If item already exists, increase the quantity
    increaseQuantity(product._id);
    toast.success('Item added to cart');
  } else {
    // If item doesn't exist, add it to the cart with quantity 1
    const newItem = { ...product, quantity: 1 };
    const updatedCart = [...cart, newItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success('Item added to cart');
  }
};
  
  //get products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, [page]);
  return (
    <Layout title={"All Products - Best offers "}>
      {/* banner image */}
      <img
        src="/images/banner.png"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      />
      {/* banner image */}
     <div className="container-fluid row mt-3 home-page">
        <div className="col-md-9 mx-auto">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-NP", {
                        style: "currency",
                        currency: "NPR",
                      })}
                    </h5>
                  </div>
                  <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                  <div className="card-name-price">

                      <button 
                      className={`btn ${
                        p.quantity <= 0 ? 'btn-outline-danger' : 'btn-outline-primary'
                      }`}
                      onClick={()=> addToCart(p)}
                      disabled={p.quantity <=0 }
                      >
                        { p.quantity <= 0? 'Out of stock' : 'Add to cart'}
                      </button>

                     <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    {/*<button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>*/}
                  </div>
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </div> 
    </Layout>
  );
};

export default HomePage;
