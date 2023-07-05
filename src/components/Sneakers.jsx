import React, { useState, useEffect } from "react";
import "../styles/sneakers.css";
import { InfinitySpin } from "react-loader-spinner";
// template sneakers
// loading state
//CONDITION ? action1 : action2
// cars- ola,
// properioes - sheu, nike, uche
//restaurants - mofe, zainab
//crypto - toyin, precious, funsho
// authors

// loading 
// template 

const Sneakers = () => {
  const url = "https://example-data.draftbit.com/sneakers?_limit=20";
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setIsLoading(false);
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <InfinitySpin width="200" color="#4fa94d" />;
  }

  return (
    <section>
      {isLoading && <InfinitySpin width="200" color="#4fa94d" />}
      <h1 className="pro">See Our Latest Products</h1>
      <div className="container">
        {products.map((product) => {
          const {
            id,
            title,
            brand,
            retailPrice,
            media: { smallImageUrl },
          } = product;

          return (
            <div key={id} className="card">
              <img src={smallImageUrl} alt={title} />
              <h3> {brand} </h3>
              <h4>Price: $ {retailPrice} </h4>
              <h3>{title} </h3>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sneakers;
