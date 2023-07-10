import React, { useState, useEffect } from "react";
import "../styles/sneakers.css";
import { InfinitySpin } from "react-loader-spinner";
import { useFetch } from "../hooks/useFetch";

const Sneakers = () => {
  const url = "https://example-data.draftbit.com/sneakers?_limit=20";
  const { isLoading, data: products } = useFetch(url);

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
